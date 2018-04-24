import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/results.css';
import loading from './img/loading.gif';

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
          const data = response.data.messages.splice(0,response.data.messages.length); 
          this.setState({ texts: data, image: photo }
          );
        });
        console.log('got it');
    }

  render() { 
    if (this.state.loading) {
      return (
        <div className="loading">
          <img src={loading} className="loading-gif"/>
          <div className="loading-text"> Searching...</div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Results</h1> 
          <img src={this.state.image} className="image-styling" />
          <div>
          {this.state.texts.map(function(object,i) {
          return (
            <p key={i}>{object.text}</p>
          );
        })}
          </div> 
          
        </div>
      );
    }
  }
}

export default ResultsList;