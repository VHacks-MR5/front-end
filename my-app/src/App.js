import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import logo from './img/vatican.png';
import './styles/App.css';
import CaptureImage from './CaptureImage';
import UploadImage from './UploadImage';
import LookingForm from './Looking_Form';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//form, input pictures, info whatever 
//post to same page
//flask: if post: return template (page), gives context


class App extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      looking: null
    };
  }

  lookingClick = () => {
  // some action...
  // then redirect
    this.setState({looking: true}); 

    console.log(this.state);
  }

   foundClick = () => {
    // some action...
    // then redirect
    this.setState({looking: false});
    console.log(this.state);
  }

render() {
    var hashHistory = Router.hashHistory;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vinculum</h1>
        </header> 

      <LookingForm />

        
      </div>
    );
  }
}

export default App;
