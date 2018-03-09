import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './index.css';

class UploadImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null
    };
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }
 
  capture = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot });
  };

  render() {
    return(
     <div>
     <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350} />
     <button className="capimage"  onClick={this.capture} >Capture photo</button>
     {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
     </div>
     );
  }
}


export default UploadImage;