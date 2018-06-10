import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import child from './img/child.jpeg';
import flipphone from './img/flipphone.png';
import smartphone from './img/smartphone.png';
import screenshot from './img/screenshot.jpg';
import globe from './img/globe-white.png';
import lock from './img/lock-white.png';
import './styles/App.css';
import './styles/home.css';
import { HeaderHome } from './Headers.js';
import Footer from './Footer.js';



        

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

render() {
    return (
      <div className="home">
        <HeaderHome/>
        <div className="hugs">
          <div className="title-container">
            <h3 className="title">Together. Again.</h3>
            <p className="subtitle">Every year tens of thousands of migrants and refugeees lose one another. Vinculum reunites loved ones by using face-recognition. Upload a photo and find your lost one.</p> 
          </div>
          <Link to="/form" className="demo">Find Them</Link>
        </div>

        <div className="welcome"> 
         <Container> 
         <Row> 
          <Col className="noPadding">
          <img src={child} className="child"/> 
          </Col> 
          <Col className="noPadding">
          <div className="welcome-text">
            <h3 className="welcome-title">To the Rescue</h3>
            <p className="welcome-description">With the aid of Microsoft's Cognitive Vision API, we are able to search  for the face of a missing person. Just provide a headshot of an individual and we'll tell you where you can find them.</p>
          </div> 
          </Col> 
          </Row>
          </Container>
        </div> 

        <div className="platforms">  
          <h3 className="welcome-title">Platform</h3>
          <Container>
          <Row>
           <Col className="col-2">
            <img className="img-valign-globe" src={globe} />
            </Col> 
            <Col className="col-10">
              <p className="text2">Open Access</p>
              <p className="platform-description">Vinculum can be used by anyone (refugees, NGO workers, law enforcement, etc.) as long they have access to the Internet. Our application is free to use and does not require any additional setup.</p>
            </Col> 
          </Row>
          <Row>
           <Col className="col-2">
            <img className="img-valign-globe" src={lock} />
            </Col> 
            <Col className="col-10">
              <p className="text2">Safety</p>
              <p className="platform-description">
              Vinculum has taken several measures to ensure user privacy. Users are not required to submit personal details and the results display the best matching photo and minimal information about the source of the photo. If a user believes they have found their loved one, they will be required to fill out an 'Apply to Contact' form. Once their identification has been verified, 
              the user will be put in contact with their missing relative. </p>
            </Col> 
          </Row>
          </Container>
        </div>

        <div className="mobile">
            <div className="mobile-text">
              <h3 className="welcome-title">Device Diversity.</h3>
              <p className="welcome-description">Our platform works across all devices. Use our webpage on desktop or mobile to upload images. Or, use our ChatBot to walk you through the process and give you the results.</p> 
              <div className="phones">
                <img src={flipphone} className="flipphone"/>
                <img src={smartphone} className="smartphone"/>
              </div>
            </div>
            <div id="div1" className="div1">
              <div id="div2" className="div2">
                  <div id="div3" className="div3">
                    <div id="div4" className="div4"></div>
                  </div>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;