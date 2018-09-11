import React from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import './styles/about.css';
import roadmap from './img/Vinculum_Roadmap.png';
import {Footer} from './Footer';
import { Header } from './Headers';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
//SCSS
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

//CSS
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class RoadMap extends React.Component {
  constructor(props) {
    super(props); 
    
    };

render() {
    var hashHistory = Router.hashHistory; 
    return (
      <div className="App">
      <Header/> 
      <h1 className="about-headers">Roadmap</h1>  
      <p className="story">Below is the current timeline for development. Many of the team members have commitments outside Vinculum (university and full-time jobs) but are nonetheless devoting the time to ensure that Vinculum is well developed.  </p>

      <p className="story">Testing and formal deployment of the application will be planned at a later stage. It is important for us to first determine the groups that we will be working with, as they would need to be heavily involved in this stage.  As we bring on other organizations it is likely that the roadmap and timeline will change.</p>
      <img src={roadmap} className="roadmap"/>
     
      <Footer /> 
      </div>
    );
  }
}

export default RoadMap;