import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import ResultsList from './ResultsList';
import About from './About';
import {Header} from './Headers';
import {FooterFixed} from './Footer';
import './styles/CaptureImage.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
var base64Img = require('base64-img');
var base64 = require('file-base64');

class SearchUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false, 
      my_image: null,
      my_screenshot: null,
      my_name: '',
      my_last_name: '',
      my_email: '',
      my_phone: '',
      person_image: null,
      person_name: '',
      person_age: '', 
      person_gender: '', 
      person_nationality:'', 
      person_nname:'', 
      person_location: '', 
      person_file:'', 
      person_url_image:'', 
      validUrl: false
      };

    this.myFirstNameChange = this.myFirstNameChange.bind(this);
    this.myLastNameChange = this.myLastNameChange.bind(this);
    this.myEmailChange = this.myEmailChange.bind(this);
    this.myPhoneChange = this.myPhoneChange.bind(this);
    this.personNameChange = this.personNameChange.bind(this);
    this.personAgeChange = this.personAgeChange.bind(this);
    this.personGenderChange = this.personGenderChange.bind(this);
    this.personNationalityChange = this.personNationalityChange.bind(this);
    this.personNNameChange = this.personNNameChange.bind(this);
    this.personLastSeenChange = this.personLastSeenChange.bind(this);
    this.personImageUrl = this.personImageUrl.bind(this);

    this.undo = this.undo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUrl = this.validateUrl.bind(this);
  }

  myFirstNameChange(event) {
    this.setState({my_name: event.target.value});
  }

  myLastNameChange(event) {
    this.setState({my_last_name: event.target.value});
  }

  myEmailChange(event) {
    this.setState({my_email: event.target.value});
  }

  myPhoneChange(event) {
    this.setState({my_phone: event.target.value});
  }

  personNameChange(event) {
    this.setState({person_name: event.target.value});
  }

  personAgeChange(event) {
    this.setState({person_age: event.target.value});
  }

  personGenderChange(event) {
    this.setState({person_gender: event.target.value});
  }

  personNationalityChange(event) {
    this.setState({person_nationality: event.target.value});
  }

  personNNameChange(event) {
    this.setState({person_nname: event.target.value});
  }

  personLastSeenChange(event) {
    this.setState({person_location: event.target.value});
  }

  personImageUrl(event) {
    if(this.validateUrl(this.state.personImageUrl)){
      this.setState({validUrl: true});
    } else {
      this.setState({validUrl: false});
    }
    this.setState({personImageUrl: event.target.value});
  }

  validateUrl(value) {
      return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

  undo(event) {
    console.log(this.state.person_image);
    this.setState({person_image: false});
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
        image: this.state.person_image,
        first_name: this.state.my_name,
        last_name: this.state.my_last_name
      })
    }).then((res) => {
      console.log("this is res", res);
      console.log(this.state.person_image);
    }).catch((err) => {
      console.log(err)
    }); 
    console.log(this.state.personImageUrl);
    this.setState({'submitted': true});
  }

  imageMeCallback = (imageScreenshot) => {
        this.setState({my_screenshot: imageScreenshot, my_image: imageScreenshot.split(/,(.+)/)[1]});
  }

  imagePersonCallback = (imageScreenshot) => { 
      console.log(imageScreenshot);
      var split = imageScreenshot.preview.split('/'); 
      var size  = split.length;
      this.setState({person_image: imageScreenshot.preview, person_file: split[size-1]});
  }

  render() {
    return (
      <div className="App"> 
      <Header/> 
        <Container>
         <h4>Would you like to</h4> 
         <div className="whiteSpace"></div>
        <Row>
        <div className="whiteSpace"></div>
        <div className="whiteSpace"></div>
          <Col sm="6" className="stripe">
          <Link to="/form" className="demo">Search for a missing person</Link>
          </Col>
          <Col sm="6">
            <Link to="/upload" className="demo">Add a person to the database</Link>
          </Col>
          <div className="whiteSpace"></div>
          <div className="whiteSpace"></div>
          </Row>
          <div className="whiteSpace"></div>
        </Container>
        <FooterFixed />
      </div>
    );}
}
//Code for image uploading. Currently can't use it cause we aren't storing pics in a database
              
export default SearchUpload;