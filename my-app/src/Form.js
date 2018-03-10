import React, { Component } from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import './styles/App.css';
import { Header } from './Headers';
import CaptureImage from './CaptureImage';
import LookingForm from './Looking_Form';
import UploadImage from './UploadImage';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//form, input pictures, info whatever 
//post to same page
//flask: if post: return template (page), gives context


class Form extends Component {
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
      <Header/>
      <LookingForm />
      </div>
    );
  }
}

export default Form;
