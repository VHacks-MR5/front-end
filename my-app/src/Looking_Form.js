import React, { Component } from 'react';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import ResultsList from './ResultsList';
import './styles/captureImage.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
var base64Img = require('base64-img');
var base64 = require('file-base64');

class LookingForm extends React.Component {
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
    fetch('http://13.95.154.58:5000/upload', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: this.my_image,
        first_name: this.my_name,
        last_name: this.my_last_name
      })
    }).then((res) => {
      console.log("this is res", res)
    }).catch((err) => {
      console.log(err)
    });
    this.setState({'submitted': true });
  }

  imageMeCallback = (imageScreenshot) => {
        this.setState({my_screenshot: imageScreenshot, my_image: imageScreenshot.split(/,(.+)/)[1]});
  }

  imagePersonCallback = (imageScreenshot) => {
      this.setState({person_image: imageScreenshot[0].preview});
  }
/**my_email: this.my_email,
        my_phone: this.my_phone,
        person_image: this.person_image,
        person_name: this.person_name,
        person_age: this.person_age, 
        person_gender: this.person_gender, 
        person_nationality:this.person_nationality, 
        person_nname:this.person_nname, 
        person_location: this.person_location**/
  render() { 
    if (this.state.submitted){
      return <ResultsList />
    } else {
    return (
      <form onSubmit={this.handleSubmit} className=""> 
        <Container> 
        <Row>
          <Col sm="6" className="stripe">
            <h4>Your information:</h4>
            <div className="credentials-input">
              <input className="mdl-textfield__input answer" type="text" name="firstName" placeholder="First Name" onChange={this.myFirstNameChange}/>
              <input className="mdl-textfield__input answer" type="text" name="lastName" placeholder="Last Name" onChange={this.myLastNameChange}/>
              <input className="mdl-textfield__input answer" type="text" name="email" placeholder="Email" onChange={this.myEmailChange}/>
              <input className="mdl-textfield__input answer" type="text" name="phone" placeholder="Phone #" onChange={this.myPhoneChange}/>
            </div>
            <CaptureImage callbackFromParent={this.imageMeCallback}/> 
            {this.state.my_screenshot ? <div><p> This is the image that will be submitted. If you would like to retake the photo, simply re-capture the photo</p><img src={this.state.my_screenshot} /></div> : null}
            <br />
            </Col>
          <Col sm="6">
            <h4>Missing Person Identification: </h4>
            <div className="credentials-input">
              <input className="mdl-textfield__input answer" type="text" name="name" placeholder="Name" onChange={this.personNameChange}/>
              <input className="mdl-textfield__input answer" type="text" name="lastName" placeholder="Nickname" onChange={this.personNNameChange}/>
              <input className="mdl-textfield__input answer" type="text" name="lastName" placeholder="Gender" onChange={this.personGenderChange}/>
              <input className="mdl-textfield__input answer" type="text" name="email" placeholder="Age" onChange={this.personAgeChange}/>
              <input className="mdl-textfield__input answer" type="text" name="phone" placeholder="Nationality" onChange={this.personNationalityChange}/>
              <input className="mdl-textfield__input answer" type="text" name="phone" placeholder="Country last seen in" onChange={this.personLastSeenChange}/>
              <UploadImage callbackFromParent={this.imagePersonCallback}/> 
              {this.state.person_image ? <div><p> This is the image that will be submitted</p><img src={this.state.person_image} /></div> : null}
            </div>
            </Col>
          </Row>
        </Container>
        <input className="btn submit" type="submit" value="Submit" />
        
   
      </form>
    );}
  }
}

export default LookingForm;