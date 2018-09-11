import React from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import './styles/about.css';
import journey from './img/User_Journey.png';
import {Footer} from './Footer';
import { Header } from './Headers';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
//SCSS
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

//CSS
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class UserJourney extends React.Component {
  constructor(props) {
    super(props); 
    
    };

render() {
    var hashHistory = Router.hashHistory; 
    return (
      <div className="App">
      <Header/> 
      <h1 className="about-headers">User Journey for using Vinculum</h1>  
      <p className="story">Below is a visualization of a user interaction with Vinculum.</p>
      <img src={journey} className="journey"/>
     
      <Footer /> 
      </div>
    );
  }
}

export default UserJourney;