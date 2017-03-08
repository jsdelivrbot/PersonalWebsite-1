import React, { Component } from 'react';

export default class ResumeDescription extends Component {
  render () {
    const { itemsPerRow, arrowOffset, info, ...rest } = this.props;
    return (
      <div>
        <div className={`col-${12/itemsPerRow}`} style={{marginLeft: `${arrowOffset}%`}}>
          <div className="resume-description-arrow"></div>
        </div>
        <div className="resume-description">
          <div className="row">
            <h1 className="col-12">{info.title}</h1>
          </div>
          <div className="row">
          <div className="col-6 resume-description-image-container">
            <a href={info.href}>
            <img className="resume-description-image" src={info.image} />
            </a>
          </div>
          <div className="resume-description-text col-6">
            {info.description}
          </div>
          </div>
          <a href={info.href} className="btn-link" target="_blank">
            <button className="control-btn resume-description-btn">
              View<i className="icon material-icons">keyboard_arrow_right</i>
            </button>
          </a>
        </div>
      </div>
    );
  }
}
