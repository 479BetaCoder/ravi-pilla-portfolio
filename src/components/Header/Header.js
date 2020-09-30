import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default class Header extends React.Component {
  
  render() {
    return (
      <div className="headerContainer">
        <nav className="nav-container">
          <div className="initialHolder">
          <label>{`RK`}</label> 
          </div>
          <ul className="nav-right">
            <li className="list-item">
              <NavLink exact activeClassName="active-list-item" className="transition-link" to="/">
                About
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink activeClassName="active-list-item" className="transition-link" to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
