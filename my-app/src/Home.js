import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import hugs from './img/hugs/hugs_background.png';
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
        <img src={hugs} className="hugs"/>
        <div className="welcome">
        </div>
        <div className="mission">
        </div>
      </div>
    );
  }
}

export default Home;
