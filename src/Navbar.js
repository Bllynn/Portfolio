import React, { Component } from "react";

class Navbar extends Component {
  state = {
    toggleNav: false
  };
  toggleNav = () => {
    this.setState({
      toggleNav: !this.state.toggleNav
    });
  };
  render() {
    return (
      <div className="navbar">
        <div className="mobile-nav" onClick={this.toggleNav}>
          <div />
          <div />
          <div />
        </div>
        <ul
          className={
            this.state.toggleNav ? "mobile-show mobile-hide" : "mobile-hide"
          }
        >
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
