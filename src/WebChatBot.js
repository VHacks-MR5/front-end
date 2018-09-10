import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import loading from './img/loading.gif';
import {FooterFixed} from './Footer';
import ContactApp from './ContactApp';
import { Header } from './Headers';
import {Router, Route, Link, RouteHandler} from 'react-router';
import './styles/CaptureImage.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class WebChatBot extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
    };
  }

  handleSubmit(event) {
    this.setState({'contact': true});
  }


  render() { 
      return (
        <div>
        <div className="App">
        <Header/>
      <Container>
      <h1 className="about-headers">Web Chat Bot</h1>
      <br />
      <Row>
          <h3>Type 'Hello Vinculum' to get started and test some of the features of Vinculum! </h3>
           <iframe classname="iframe-style" height="400" width="500" src='https://webchat.botframework.com/embed/VinculumBot?s=YHqZ1nfoblc.cwA.y2w.ECKLDjUcxmH_cQxfywKwvtKo-jElLYTeBcmrqa_dCwo'></iframe>
          <FooterFixed/>          
       </Row>
      </Container>
      <br /><br />
      <FooterFixed/>
      </div>
      </div>
      );
  }
}

export default WebChatBot;