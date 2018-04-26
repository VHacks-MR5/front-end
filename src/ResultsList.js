import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import loading from './img/loading.gif';
import Footer from './Footer';
import { Header } from './Headers';

class ResultsList extends React.Component {
  constructor(props) {
    super(props); 
    console.log(this.props.url);
    this.state = {
      loading: true,
      texts:[], 
      image: '', 
      uploaded_image: this.props.url
    };
  }

componentWillMount() {

}

//https://pbs.twimg.com/profile_images/699011281118851072/JwU6pzeT_400x400.jpg"

componentDidMount(){ 
        console.log('tryna get');
        axios.get("https://cors-anywhere.herokuapp.com/" + "http://52.170.250.135:5000/match/app?url="+this.state.uploaded_image,
          'headers':{
        'Access-Control-Allow-Origin':'*'})
        .then( response => {
          this.setState({loading: false});
          const photo = response.data.messages.splice(-1,1)[0].attachment.payload.url; 
          const data = response.data.messages.splice(0,response.data.messages.length-1);  
          const score = data[0].text.substring(data[0].text.length-3,data[0].text.length);
          this.setState({ texts: score, image: photo });
       }) 
    }

//More rendering stuff
 // {this.state.texts.map(function(object,i) {
 //            return ( 
 //              <div>
 //                </div>
 //            );
 //          })}
  render() { 
    if (this.state.loading) {
      return ( 
        <div>
          <div className="loading">
            <img src={loading} className="loading-gif"/>
            <div className="loading-text"> Searching...</div>
          </div>
          <Footer/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Results</h1> 
          <img src={this.state.image} className="image-styling" />
          <div className="text-styling">
          <h5>The similiarity score between this photo and the photo you submitted is {this.state.texts}</h5>
          <h5>This photo was entered into the Interpol database on April 25th, 2018.</h5>
          <h5>Think this is your missing relative? Contact us and we can give you more information</h5>
          </div> 
          <Footer/>
        </div>
      );
    }
  }
}

export default ResultsList;