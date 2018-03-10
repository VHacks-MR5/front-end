import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import { Container, Row, Col } from 'reactstrap';
import child from './img/child.jpeg';
import './styles/App.css';
import './styles/home.css';
import { HeaderHome } from './Headers.js';


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
            <h3 className="welcome-title">To the Rescue.</h3>
            <p className="welcome-description">Using Microsoft's Face API, we are able to search the global refugee database for the face of a missing person. Just provide a headshot of an individual and we'll tell you where you can find them.</p>
          </div> 
          </Col> 
          </Row>
          </Container>
        </div>

        <div className="mission">
        </div>
      </div>
    );
  }
}

export default Home;
