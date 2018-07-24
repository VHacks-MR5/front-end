import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import logo from './img/logos/vinculum_logo.png';
import logoWhite from './img/logos/vinculum_logo_white.png';
import logoNB from './img/vlogo.png';
import './styles/App.css';
import './styles/header.css';

export class HeaderHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	return (
    <div>
  		<header className="header header-home">
        <div className="header-logo-container">
          <img src={logoWhite} className="header-logo" alt="logo" />
        </div>
        <h1 className="header-title">Vinculum</h1>
        <div className="nav">
          <Link to="/" className="nav-item nav-item-home">Home</Link>
          <Link to="/about" className="nav-item nav-item-home">About</Link>
          <Link to="/form" className="nav-item nav-item-home">Search People</Link>
          <Link to="/upload" className="nav-item nav-item-home">Add People</Link>
        </div>
      </header>
    </div>
	 )
  }
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div>
    <header className="header">
      <div className="header-logo-container">
        <img src={logoWhite} className="header-logo" alt="logo" />
      </div>
      <h1 className="header-title">Vinculum</h1>
      <div className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/form" className="nav-item nav-item-home">Search People</Link>
        <Link to="/upload" className="nav-item nav-item-home">Add People</Link>
      </div>
    </header>
    </div>
  )
  }
}