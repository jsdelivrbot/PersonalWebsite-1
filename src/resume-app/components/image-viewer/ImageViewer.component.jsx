import React, { Component } from 'react';

export default class ImageViewer extends Component {
  imageUrls = [
    "/images/landing-page-example-hero.jpeg",
    "/images/sample1-thumbnail-large.jpg",
    "/images/weather-thumbnail-large.jpeg"
  ]
  render () {
    let backgroundImageStyle = `background-image: url(${imageUrls[0]})`

    return (
      <div className="image-viewer">

      </div>
    )
  }
}
