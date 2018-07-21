import React from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import ReactDOM from 'react-dom';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import axios from 'axios';
import './styles/results.css';
import './styles/about.css';
import './styles/contactapp.css';
import {Footer} from './Footer';
import { Header } from './Headers';
var http = require("https");
var base64Img = require('base64-img');


class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      my_image: '', 
      my_screenshot: '', 
      my_name: '',
      age: '',
      relation: '',
      location: '',
      contact: '',
      notes: '', 
      score: this.props.texts,
      person_image: this.props.person_image,
      submitted_photo: this.props.submitted_photo
    }

    this.NameChange = this.NameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.relationChange = this.relationChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.contactChange = this.contactChange.bind(this);
    this.extraChange = this.extraChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    };


  imageMeCallback = (imageScreenshot) => {
    this.setState({my_screenshot: imageScreenshot, my_image: imageScreenshot.split(/,(.+)/)[1]});
    console.log(this.state.my_image);
  }

  NameChange(event) {
    this.setState({my_name: event.target.value});
  }

  ageChange(event) {
    this.setState({age: event.target.value});
  }

  relationChange(event) {
    this.setState({relation: event.target.value});
  }

  locationChange(event) {
    this.setState({location: event.target.value});
  }

  contactChange(event) {
    this.setState({contact: event.target.value});
  }

  extraChange(event) {
    this.setState({notes: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://23.101.170.100:5000/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      mode: 'no-cors',
      body: JSON.stringify({
        searcher_image: this.state.my_image,
        name: this.state.my_name,
        age: this.state.age, 
        relation: this.state.relation, 
        location: this.state.location,
        contact: this.state.contact,
        info: this.state.notes, 
        missing_person_image: this.state.person_image,
        searcher_submitted_image: this.state.submitted_photo
      })
    }).then((res) => {
    }).catch((err) => {
      console.log(err)
    });
    this.setState({submitted: true});
  }

  render() {
    if (this.state.submitted){
      return (
        <div className="App">
        <h1 className="about-headers"> Thank you for filling out the application! </h1>
        <p className="about-headers"> We will process your information immediately and reach out to you if we need any more information.</p>
        <Footer /> 
        </div>
      )
    } else {
      return (
        <div className="App">
        <h1 className="about-headers"> Application to contact relative </h1>
        <p className="about-headers"> Note: While you are not required to fill out any particular fields, a more complete form will allow us to rapidly verify your background.</p>
        <form onSubmit={this.handleSubmit} className=""> 
        <div className="center-align">
        <input className="mdl-textfield__input answer" type="text" name="name" placeholder="Your Name" onChange={this.NameChange}/>
        <input className="mdl-textfield__input answer" type="text" name="age" placeholder="Age" onChange={this.ageChange}/>
        <input className="mdl-textfield__input answer" type="text" name="relation" placeholder="Relation to missing person" onChange={this.relationChange}/>
        <input className="mdl-textfield__input answer" type="text" name="relation" placeholder="Current location" onChange={this.locationChange}/>
        <textarea className="mdl-textfield__input textfield-border" placeholder=" Contact info (please provide an email address or phone number)" onChange={this.contactChange} type="text" rows= "5" id="sample5" ></textarea>
        <br />
        <textarea className="mdl-textfield__input textfield-border" placeholder=" Additional Information" onChange={this.extraChange} type="text" rows= "5" id="sample5" ></textarea>
        </div>
        <CaptureImage callbackFromParent={this.imageMeCallback}/>
        {this.state.my_screenshot ? <div><p> This is the image that will be submitted. If you would like to retake the photo, simply re-capture the photo</p><img src={this.state.my_screenshot} /></div> : null}
        <input className="btn submit" type="submit" value="Submit" />
        </form>
        <Footer /> 
        </div>
      );
    }
  }
}

export default ContactApp;