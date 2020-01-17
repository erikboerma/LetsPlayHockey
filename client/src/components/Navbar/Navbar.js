import React from "react";
import NavTab from './NavTab/NavTab';
import './navbar.css';
import logo from '../../assets/images/letsplayhockey.png';

const Navbar = () => (
  <ul className="nav nav-tabs">
    <div className="row">
      <img src={logo} id="nav-logo"></img>
      <NavTab
        location="/"
        title="LetsPlayHockey">
      </NavTab>
    </div>
    <NavTab
      location="/Login"
      title="Login">
    </NavTab>
    <NavTab
      location="/Register"
      title="Register">
    </NavTab>
    <NavTab
      location="/CreateProfile"
      title="Create Profile">
    </NavTab>
    <NavTab
      location="/Dashboard"
      title="Dashboard">
    </NavTab>
  </ul>
);

export default Navbar;
