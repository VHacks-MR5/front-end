import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts:[], 
      image:''
    };
  }

componentDidMount(){
        axios.get("http://13.95.154.58:5000/match/app?url=https://pbs.twimg.com/profile_images/699011281118851072/JwU6pzeT_400x400.jpg")
        .then( response => {
          const photo = response.data.messages.splice(-1,1)[0].attachment.payload.url; 
          const data = response.data.messages.splice(0,response.data.messages.length); 
          console.log(photo);
          this.setState({ texts: data, image: photo }
          );
        });
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

export default Results;