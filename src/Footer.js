import React, { Component } from 'react';
import logoWhite from './img/logos/vinculum_logo_white.png';
import './styles/App.css';
import './styles/footer.css';

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
        </div>
        <div>
        <h5 className="footer-title" align="center">@Vinculum 2018</h5>
        </div>
      </footer>
  	)
  }
}

export default Footer;