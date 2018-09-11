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
      <p className="story">
      </p>
      <img src={roadmap}/>
      <Footer /> 
      </div>
    );
  }
}

export default RoadMap;