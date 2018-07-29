import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import loading from './img/loading.gif';
import {FooterFixed} from './Footer';
import ContactApp from './ContactApp';
import { Header } from './Headers';
import {Router, Route, Link, RouteHandler} from 'react-router';

class ResultsList extends React.Component {
  constructor(props) {
    super(props); 
    console.log(this.props.missing_person);
    this.state = {
      loading: true, 
      contact: false,
      message:[],
      score: '',
      image: '', 
      uploaded_image: this.props.missing_person
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({'contact': true});
  }

componentWillMount() {}

componentDidMount(){
  fetch("http://23.101.170.100:5000/upload", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({
        image_string: this.state.uploaded_image
        })
    }).then((res) => {
      return res.json();
    }).then((data) =>{ 
      console.log(data.messages[1].data);
       this.setState({ 
        message: data.messages[1].data, 
        image: data.messages[2].attachment.payload.url,
        score: data.messages[0].score
      });
    }).catch((err) => {
      console.log(err)
    });
    this.setState({loading: false});
}

  render() { 
    if (this.state.loading) {
      return ( 
        <div>
          <div className="loading">
            <img src={loading} className="loading-gif"/>
            <div className="loading-text"> Searching...</div>
          </div>
          <FooterFixed/>
        </div>
      )
    } else if (this.state.contact){
      return (<ContactApp information={this.state.message} score={this.state.score} person_image={this.state.image} submitted_photo={this.state.uploaded_image}/>)
    } else {
      return (
        <div>
          <h1>Results</h1> 
          <img src={this.state.image} className="image-styling" />
          <div className="text-styling">
          <h5>The similiarity score between this photo and the photo you submitted is {this.state.score}</h5>
          <h5>This photo was submitted by: {this.state.message[7]}</h5>
          <br/>
          <h5>Think this is your missing relative?</h5>
          <input className="btn submit" type="submit" onClick={this.handleSubmit} value="Apply to Contact your relative"/>
          </div> 
          <FooterFixed/>
        </div>
      );
    }
  }
}

export default ResultsList;