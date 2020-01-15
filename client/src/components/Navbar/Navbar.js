import React from "react";
import NavTab from './NavTab/NavTab';

const Navbar = () => (
  <ul className="nav nav-tabs">
    <NavTab
      location="/"
      title="Home">
    </NavTab>
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
