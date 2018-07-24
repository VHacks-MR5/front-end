import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import ResultsList from './ResultsList';
import { Header } from './Headers';
import About from './About';
import {FooterFixed, Footer} from './Footer';
import './styles/CaptureImage.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
var base64Img = require('base64-img');
var base64 = require('file-base64');


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false, 
      name: '', 
      age: '',
      nationality: '',
      uploader_name: '',
      uploader_relation: '',
      uploader_contact_info: '',
      file: {}, 
      file_string: ''
      };

    this.fileChange = this.fileChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.nationalityChange = this.nationalityChange.bind(this);
    this.uploaderNameChange = this.uploaderNameChange.bind(this);
    this.uploaderRelationChange = this.uploaderRelationChange.bind(this);
    this.uploaderContactInfoChange = this.uploaderContactInfoChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uploaderNameChange(event) {
    this.setState({uploader_name: event.target.value});
  }

  uploaderRelationChange(event) {
    this.setState({uploader_relation: event.target.value});
  }

  uploaderContactInfoChange(event) {
    this.setState({uploader_contact_info: event.target.value});
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

  fileChange(event) {
    this.setState({file: event.target.files[0]});
   function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  toDataURL(this.state.file, function(dataUrl) {
    console.log('RESULT:', dataUrl.split(/,(.+)/)[1]);
    // this.setState({file_string:dataUrl.split(/,(.+)/)[1]});
  });  
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://23.101.170.100:5000/upload/web', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({
        image: this.state.file,
        name: this.state.name,
        age: this.state.age,
        nationality: this.state.nationality, 
        uploader_name: this.state.uploader_name,
        uploader_relation: this.state.uploader_relation,
        uploader_contact_info: this.state.uploader_contact_info
      })
    }).then((res) => {
      console.log("this is res", res);
      console.log(this.state);
    }).catch((err) => {
      console.log(err)
    }); 
    console.log(this.state.personImageUrl);
    this.setState({'submitted': true});
  }

  render() {
  if (this.state.submitted){
      return (
        <div className="App">
        <Header/>
        <h1 className="about-headers"> Thank you for submitting information about your missing relative. </h1>
        <h4 className="about-headers"> If someone believes that they have found your relative we will reach out to you to arrange a connection.</h4>
        <h4 className="upload-text"> In the meanwhile, use the search feature to check if someone has uploaded an image of your relative. </h4>
        <Link to="/form" className="demo-upload">Search for missing relative</Link>
        <FooterFixed /> 
        </div>
      )
    } else { 
    return (
      <div className="App">
      <Header/> 
      <h1 className="about-headers">Add a missing person</h1>
      <form onSubmit={this.handleSubmit} className="">  
      <Container className="centered">
      <Row >
      <div className="credentials-input">
      <h4>Photo of missing relative: </h4>
      <input className="mdl-textfield__input answer" type="file" onChange={this.fileChange} />
      </div>
      </Row>
      <h5>Information about your missing relative</h5>
      <br /> 
      <Row>
      <input className="mdl-textfield__input answer" type="text" name="name" placeholder="Name" onChange={this.nameChange}/>
      <input className="mdl-textfield__input answer" type="text" name="age" placeholder="Age" onChange={this.ageChange}/>
      <input className="mdl-textfield__input answer" type="text" name="nationality" placeholder="Nationality" onChange={this.nationalityChange}/>
      </Row>
      <br /><br />
      <h5>Your information</h5>
      <br />
      <Row>
      <input className="mdl-textfield__input answer" type="text" name="searcher_name" placeholder="Your Name" onChange={this.uploaderNameChange}/>
      <input className="mdl-textfield__input answer" type="text" name="relation" placeholder="Relation to missing person " onChange={this.uploaderRelationChange}/>
      <input className="mdl-textfield__input answer" type="text" name="contact_info" placeholder="Contact info (# or email)" onChange={this.uploaderContactInfoChange}/>
      </Row>
      <input className="btn submit" type="submit" value="Submit" />
      </Container>
      </form>
      <FooterFixed/> 
      </div>
    );}
}
}
//Code for image uploading. Currently can't use it cause we aren't storing pics in a database
              
export default Upload;