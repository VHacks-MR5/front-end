import React, { Component } from 'react';
import logoWhite from './img/logos/vinculum_logo_white.png';
import './styles/App.css';
import './styles/header.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	return (
  		<footer className="footer">
        <div className="footer-logo-container">
          <img src={logoWhite} className="footer-logo" alt="logo" />
          <h1 className="footer-title">Vinculum</h1>
        </div>
        <p>Vinculum</p>
        <p>@VHacks 2018</p>
      </footer>
  	)
  }
}

export default Footer;