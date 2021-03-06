import React, { Component } from 'react';
import logoWhite from './img/logos/vinculum_logo_white.png';
import './styles/App.css';
import './styles/footer.css';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	return (
  		<footer className="footer footerposition1">
        <div className="footer-logo-container">
          <img src={logoWhite} className="footer-logo" alt="logo" />
        </div>
        <div>
        <h5 className="footer-title" align="center">@Vinculum 2018         <p className="margin-bottom" align="center">We use Google Analytics to gather info about traffic on this site!</p></h5>

        </div>
      </footer>
  	)
  }
}


export class FooterFixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <footer className="footer footerposition2">
        <div className="footer-logo-container">
          <img src={logoWhite} className="footer-logo" alt="logo" />
        </div>
        <div>
        <h5 className="footer-title" align="center">@Vinculum 2018         <p align="center">We use Google Analytics to gather info about traffic on this site!</p></h5>
        </div>
      </footer>
  )
  }
}