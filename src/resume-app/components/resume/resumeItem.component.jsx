import React, { Component } from 'react';

export default class ResumeItem extends Component {

  render() {
    const { info, id, selectItem, itemsPerRow, ...rest} = this.props;

    return (
      <div className={`col-${12/itemsPerRow} resume-item`}>
        <div className="resume-item-box" onClick={() => selectItem(id)}>
          <h3>{info.title}</h3>
          <div className="resume-item-thumbnail" style={{backgroundImage: `url(${info.image})`}}></div>
        </div>
      </div>
    );
  }
}
//<button className="btn">View<i className="icon material-icons">keyboard_arrow_right</i></button>
