import React, { Component } from 'react';
import ResumeItem from './resumeItem.component';
import ResumeDescription from './resumeDescription.component';
import ResumeEntries from './resumeEntries';
import breakpoints from './breakpoints';


export default class Resume extends Component {

  constructor (props) {
    super(props);
    this.state = { activeItem: null, itemsPerRow: 3};
    this.updateRows = this.updateRows.bind(this);
  }

  componentDidMount () {
    this.updateRows();
    window.addEventListener("resize", this.updateRows);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateRows);
  }

  selectItem (itemId) {
    if (itemId === this.state.activeItem) {
      this.setState({activeItem: null});
    } else {
      this.setState({activeItem: itemId});
    }
  }

  formatResumeItems() {
    const items = [];
    const rows = [];

    // loop through ResumeEntries and create a new Item element for each.
    for(let i = 0, l = ResumeEntries.length; i < l; i++) {
      items.push(
        <ResumeItem
          key={i}
          id={i}
          info={ResumeEntries[i]}
          itemsPerRow={this.state.itemsPerRow}
          selectItem={(itemId) => this.selectItem(itemId)}
        />
      );
    }

    // Place each item in an appropriate row
    let rowNumber = 0;
    while(items.length) {
      rows.push(
        <div key={rowNumber} className="static-row">
          {items.splice(0, this.state.itemsPerRow)}
        </div>
      );
      rowNumber++;
    }

    // Insert the active item's description is applicable
    if (this.state.activeItem || this.state.activeItem === 0) {
      const index = Math.floor(this.state.activeItem/this.state.itemsPerRow) + 1;
      const arrowOffset = (100/this.state.itemsPerRow) * (this.state.activeItem % this.state.itemsPerRow);
      rows.splice(index, 0,
        <ResumeDescription
          key="description"
          itemsPerRow={this.state.itemsPerRow}
          info={ResumeEntries[this.state.activeItem]}
          arrowOffset={arrowOffset}
        />
      );
    }

    return rows;
  }

  // Determines how many items can be in each row.
  // Uses the breakpoints array to decide.
  getItemsPerRow () {
    // Check to see if the current window width is less than any of the
    // breakpoints defined.
    for( let i = 0, l = breakpoints.length - 1; i < l; i++ ) {
      if (window.innerWidth <= breakpoints[i].width)
        return breakpoints[i].itemsPerRow;
    }

    // If the width isn't less than or equal to any defined breakpoints,
    // default to the settings in the last array item
    return breakpoints[breakpoints.length - 1].itemsPerRow;
  }

  // Updates number of rows if the number has changed.
  updateRows() {
    const itemsPerRow = this.getItemsPerRow();
    if( this.state.itemsPerRow === itemsPerRow ) {
      return;
    }
    this.setState({ itemsPerRow });
  }

  render() {
    return (
      <div id="resume">
        <div className="container" >
          {this.formatResumeItems.call(this)}
        </div>
      </div>
    );
  }
}
