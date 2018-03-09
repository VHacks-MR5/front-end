import React, { Component } from 'react';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import './CaptureImage.css';

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
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    }); 
  }

  imageCallback = (imageScreenshot) => {
        this.setState({my_screenshot: imageScreenshot});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Your First Name:
          <input type="text" value={this.state.my_name} onChange={this.myFirstNameChange} />
          <br />
          Your Last Name
          <input type="text" value={this.state.my_last_name} onChange={this.myLastNameChange} />
          <br />
          Your Email Address
          <input type="text" value={this.state.my_email} onChange={this.myEmailChange} />
          <br />
          Your Phone Number
          <input type="text" value={this.state.my_number} onChange={this.myPhoneChange} />

          Missing Person Name:
          <input type="text" value={this.state.person_name} onChange={this.personNameChange} /> 

          <CaptureImage callbackFromParent={this.imageCallback}/> 
          {this.state.my_screenshot ? <img src={this.state.my_screenshot} /> : null}

          <br />
           Missing Person Descriptors: 
          Age<input type="text" value={this.state.person_age} onChange={this.personAgeChange} />
          Gender<input type="text" value={this.state.person_gender} onChange={this.personGenderChange} />
          Nationality<input type="text" value={this.state.person_hair} onChange={this.personNationalityChange} />
          Nickname<input type="text" value={this.state.person_nname} onChange={this.personNNameChange} />
          Place last seen<input type="text" value={this.state.person_location} onChange={this.personLastSeenChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LookingForm;