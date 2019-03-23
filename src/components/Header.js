import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import avatar from "../image/avatar.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img
            src={avatar}
            alt="avatar"
            className="navbar-brand"
            width="30"
            height="30"
          />
          
          <div className="form-inline my-2 my-lg-0">
            
          </div>
        </nav>
        <br />
      </div>
    );
  }
}
