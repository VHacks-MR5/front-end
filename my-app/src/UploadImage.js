import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

import './styles/index.css';

class UploadImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null
    };
    this.onImageDrop = this.onImageDrop.bind(this);
  }


  onImageDrop = (file) => {
    const screenshot = file;
    var split = file[0].preview.split('/'); 
    var size  = split.length;
    this.props.callbackFromParent(file[0]);
  }


  render() {
    return(
     <Dropzone
      multiple={false}
      accept="image/*"
      onDrop={this.onImageDrop.bind(this)}>
      <p>Drop an image or click to select a file to upload.</p>
    </Dropzone>
     );
  }
}


export default UploadImage;