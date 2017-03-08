import React, { Component } from 'react';
import ImageViewer from './image-viewer/ImageViewer.component.jsx';

export default class Home extends Component {

  render () {
    return (
      <div id="home-image-panel">
          <div className="center-vertical">
            <h1>I build websites.</h1>
            <p className="lead">Let me build you an amazing website.</p>
            <p>Enter your email below, and I'll get in touch!</p>
            <input className="control-input" type="text" placeholder="Enter your email"/>
            <button className="control-btn">Submit</button>
          </div>
        </div>
    );
  }
}
