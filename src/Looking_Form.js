import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import ResultsList from './ResultsList';
import About from './About';
import {Footer} from './Footer';
import './styles/CaptureImage.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
var base64Img = require('base64-img');
var base64 = require('file-base64');

class LookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false, 
      name: '', 
      age: '',
      my_screenshot: null,
      my_image:null,
      nationality: '', 
      file: {}
      };

    this.fileChange = this.fileChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.nationalityChange = this.nationalityChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(event) {
    this.setState({name: event.target.value});
  }

  ageChange(event) {
    this.setState({age: event.target.value});
  }

  nationalityChange(event) {
    this.setState({nationality: event.target.value});
  }

  imageMeCallback = (imageScreenshot) => {
        this.setState({my_screenshot: imageScreenshot, my_image: imageScreenshot.split(/,(.+)/)[1]});
  }
  fileChange(event) {
    // event.preventDefault();
    // this.setState({file: event.target.files[0]}); 
    // console.log(this.state.file);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://52.170.250.135:5000/upload', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({
        image_string: this.state.my_image
      })
    }).then((res) => {
      console.log("this is res", res);
    }).catch((err) => {
      console.log(err)
    });
    this.setState({'submitted': true});
  }

  imageMeCallback = (imageScreenshot) => {
        this.setState({my_screenshot: imageScreenshot, my_image: imageScreenshot.split(/,(.+)/)[1]});
        console.log(this.state.my_image);
  }

  imagePersonCallback = (imageScreenshot) => { 
      console.log(imageScreenshot);
      var split = imageScreenshot.preview.split('/'); 
      var size  = split.length;
      this.setState({person_image: imageScreenshot.preview, person_file: split[size-1]});
  }

  render() { 
    if (this.state.submitted){
      return (<ResultsList missing_person={this.state.my_image}/>)
    } else {
    return (
      <div className="App">
      <h1 className="about-headers">Search for a missing person</h1>
      <form onSubmit={this.handleSubmit} className="">  
      <Container>
      <Row>
      <div className="credentials-input">
      <CaptureImage callbackFromParent={this.imageMeCallback}/> 
      {this.state.my_screenshot ? <div><p> This is the image that will be submitted. If you would like to retake the photo, simply re-capture the photo</p><img src={this.state.my_screenshot} /></div> : null}
          
      </div>
      </Row>
      <input className="btn submit" type="submit" value="Submit" />
      </Container>
      </form>
      <Footer/>
      </div>
    );}
}
}
//Code for image uploading. Currently can't use it cause we aren't storing pics in a database
              
export default LookingForm;