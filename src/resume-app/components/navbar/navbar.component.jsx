import React, { Component } from 'react';
import NavLi from './navbarItem.component';

export default class Navbar extends Component {
  render() {
    return (

      <nav className="navbar fixed">
      <div className="container">
        <div className="navbar-logo">JF</div>
        <ul className="navbar-list">
          <NavLi to="/home" className="navbar-item" index={true}>Home</NavLi>
          <NavLi to="/resume" className="navbar-item">Resume</NavLi>
        </ul>
      </div>
      </nav>
    );
  }
}
