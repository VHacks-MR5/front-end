import React, { Component } from 'react';
import Webcam from 'react-webcam';
import './CaptureImage.css';

class CaptureImage extends React.Component {

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
    this.props.callbackFromParent(screenshot);
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
     </div>
     );
  }
}


export default CaptureImage;