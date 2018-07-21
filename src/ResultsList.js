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
      texts:[], 
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
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },
      body: JSON.stringify({
        image_string: this.state.uploaded_image
        })
    }).then((res) => {
      console.log(res);
      
    }).catch((err) => {
      console.log(err)
    });
    this.setState({loading: false});
   //  axios.get("https://cors-anywhere.herokuapp.com/" + "http://23.101.170.100:5000/match/app?url="+this.state.uploaded_image,
   //    'headers':{
   //  'Access-Control-Allow-Origin':'*'})
   //  .then( response => {
   //    this.setState({loading: false});
   //    const photo = response.data.messages.splice(-1,1)[0].attachment.payload.url; 
   //    const data = response.data.messages.splice(0,response.data.messages.length-1);  
   //    const score = data[0].text.substring(data[0].text.length-3,data[0].text.length);
   //    this.setState({ texts: score, image: photo });
   // }); 
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
      return (<ContactApp score={this.state.texts} person_image={this.state.image} submitted_photo={this.state.uploaded_image}/>)
    } else {
      return (
        <div>
          <h1>Results</h1> 
          <img src={this.state.image} className="image-styling" />
          <div className="text-styling">
          <h5>The similiarity score between this photo and the photo you submitted is {this.state.texts}</h5>
          <h5>This photo was entered into the Interpol database on May 5th, 2018.</h5>
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