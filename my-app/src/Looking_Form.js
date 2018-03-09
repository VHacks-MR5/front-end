import React, { Component } from 'react';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import './CaptureImage.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
var base64Img = require('base64-img');

class LookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      looking: true,
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
      person_location: ''
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

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault(); 
    console.log(this.state);
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        my_screenshot: this.my_screenshot,
        my_name: this.my_name,
        my_last_name: this.my_last_name,
        my_email: this.my_email,
        my_phone: this.my_phone,
        person_image: this.person_image,
        person_name: this.person_name,
        person_age: this.person_age, 
        person_gender: this.person_gender, 
        person_nationality:this.person_nationality, 
        person_nname:this.person_nname, 
        person_location: this.person_location
      })
    }); 
  }

  imageMeCallback = (imageScreenshot) => { 
      console.log(typeof(imageScreenshot));
        this.setState({my_screenshot: imageScreenshot});
  }

  imagePersonCallback = (imageScreenshot) => {
      console.log(imageScreenshot[0].preview);
     // var data = base64Img.base64Sync();
      this.setState({person_image: imageScreenshot[0].preview});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className=""> 
        <Container> 
        <Row>
          <Col sm="6">
            <h4>Your information:</h4>
            <br />
            First Name: <input type="text" value={this.state.my_name} onChange={this.myFirstNameChange} />
            <br />
            Last Name: <input type="text" value={this.state.my_last_name} onChange={this.myLastNameChange} />
            <br />
            Email Address: <input type="text" value={this.state.my_email} onChange={this.myEmailChange} />
            <br />
            Phone Number: <input type="text" value={this.state.my_number} onChange={this.myPhoneChange} />
            <br />
            <CaptureImage callbackFromParent={this.imageMeCallback}/> 
            <br />
            </Col>
          <Col sm="6">
            <h4>Missing Person Identification: </h4>
            <br />
            Name:<input type="text" value={this.state.person_name} onChange={this.personNameChange} /> 
            <br /> 
            Age:<input type="text" value={this.state.person_age} onChange={this.personAgeChange} /><br />
            Gender:<input type="text" value={this.state.person_gender} onChange={this.personGenderChange} /><br />
            Nationality:<input type="text" value={this.state.person_nationality} onChange={this.personNationalityChange} /><br />
            Nickname:<input type="text" value={this.state.person_nname} onChange={this.personNNameChange} /><br />
            Place last seen:<input type="text" value={this.state.person_location} onChange={this.personLastSeenChange} /><br />
            <UploadImage callbackFromParent={this.imagePersonCallback}/> 
            {this.state.person_image ? <div><p> This is the image that will be submitted</p><img src={this.state.person_image} /></div> : null}
          </Col>
          </Row>
        </Container>
        <input type="submit" value="Submit" />
        {this.state.my_screenshot ? <div><p> This is the image that will be submitted. If you would like to retake the photo, simply re-capture the photo</p><img src={this.state.my_screenshot} /></div> : null}
   
      </form>
    );
  }
}

export default LookingForm;