import React from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import './styles/about.css';
import team from './img/team.jpg';
import pranav from './img/pranav.png';
import mustafa from './img/mustafa.jpg';
import shiri from './img/shiri.jpg';
import john from './img/john.jpg';
import ethan from './img/ethan.jpg';
import rachana from './img/rachana.jpg';
import loading from './img/loading.gif';
import {Footer} from './Footer';
import { Header } from './Headers';
import ImageGallery from 'react-image-gallery';
import { Carousel } from 'react-responsive-carousel';
//SCSS
import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";

//CSS
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class About extends React.Component {
  constructor(props) {
    super(props); 
    
    };

render() {
    var hashHistory = Router.hashHistory; 
    return (
      <div className="App">
      <Header/> 
      <h1 className="about-headers">Our Story</h1>  
      <p className="story">Vinculum was formed during VHacks, the first hackathon to take place in Vatican City in March 2018. 
      Our team consists of 6 people from 3 countries and very unique backgrounds. We quickly bonded over our drive to develop technology for humanitarian purposes and as a result, Vinculum was created.
      Although many projects remain untouched after a hackathon, our team decided to stick together because we want to expand the technology and reach of this application. 
      As we continue to develop and build, we hope that Vinculum can be successfully used by families to find their missing loved ones and reunite people, one photo at a time.
      </p>
      <img src={team} className="team"/>
      <p>Team Vinculum during VHacks-2018 demos </p>
      <h1 className="about-headers">Our Team</h1>  
      <div align="center">
      <div className="display">
       <div align="center" className="float-left"><p><img src={john} className="person"/></p><p className="name">John Franklin</p><p align="center">Northwestern Univeristy - BS'18</p></div>
       <div align="center" className="float-left"><p><img src={pranav} className="person"/></p><p className="name">Pranav Gokhale</p><p align="center">UChicago - PhD '22</p></div>
       <div align="center" className="float-left"><p><img src={shiri} className="person"/></p><p className="name">Shiri Heffetz</p><p align="center">Oxford University - MS '18</p></div>
      </div>
      <br />
      <div className="display">
       <div align="center" className="float-left"><p><img src={mustafa} className="person"/></p><p className="name">Mustafa Jamal</p><p align="center">Benha University - BS '18</p></div>
       <div align="center" className="float-left"><p><img src={rachana} className="person"/></p><p className="name">Rachana Lingutla</p><p align="center">UMass Amherst - BS '18</p></div>
       <div align="center" className="float-left"><p><img src={ethan} className="person"/></p><p className="name">Ethan Wright</p><p align="center">RPI - BS '20</p></div>
      </div>
      </div>
      <h1 className="about-headers">Recognitions</h1> 
      <ul>
        <li>Semi-Finalists - World Finals, Microsoft Imagine Cup 2018</li>
        <li>5th place - US Finals, Microsoft Imagine Cup 2018</li>
        <li>Audience Choice Award - VHacks 2018</li> 
        <li>Third Place: Migrants and Refugees category - VHacks 2018</li>
      </ul>
      <h1 className="about-headers">In The Media</h1>
      <ul>
          <li><a href="https://topick.hket.com/article/2136815/%E3%80%90Imagine%20Cup%E3%80%91AI%E8%BE%A8%E8%AD%98%E7%85%A7%E7%89%87%E7%9B%B8%E4%BC%BC%E5%BA%A6%E3%80%80%E5%8A%A9%E9%9B%A3%E6%B0%91%E5%B0%8B%E8%A6%93%E5%A4%B1%E6%95%A3%E8%A6%AA%E4%BA%BA"> AI recognizes the similarity of photos to help refugees find lost relatives - Hong Kong Economic Times</a> </li>
          <li><a href="https://www.exeter.ox.ac.uk/exeter-student-shiri-heffetz-competes-in-hackathon-at-the-vatican/">Exeter College article about Vinculum</a> </li>
          <li><a href="https://blogs.msdn.microsoft.com/microsoftimagine/2018/05/06/2018-u-s-imagine-cup-winners-announced/"> Imagine Cup US Winners Announcement - Microsoft Blog</a> </li>
          <li><a href="https://blogs.msdn.microsoft.com/microsoftimagine/2018/04/16/here-are-the-2018-us-imagine-cup-finalists-competing-for-10000/"> Imagine Cup US Finalists Announcement - Microsoft Blog</a> </li>
          <li><a href="https://blogs.msdn.microsoft.com/microsoftimagine/2018/04/05/students-hack-for-social-good-first-ever-vatican-hacks/"> Students hack for social good - Microsoft Blog </a> </li>      
      </ul>
      <h1 className="about-headers">Contact</h1> 
      <p align="center" className="contact">Reach us at lrachana [at] gmail [dot] com </p>
      <Footer /> 
      </div>
    );
  }
}

export default About;