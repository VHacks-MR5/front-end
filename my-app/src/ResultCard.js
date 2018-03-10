import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ResultCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts:[], 
      image:''
    };
  }


  render() { 
    
    return (
      <div>
        <h1>Results</h1> 
        <img src={this.state.image} />
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

export default ResultCard;