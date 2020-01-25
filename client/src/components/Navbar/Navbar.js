import React from "react";
import NavTab from "./NavTab/NavTab";
import "./navbar.css";
import logo from "../../assets/images/LetsPlayHockeyTransparent.png";
import { withGlobalState } from "react-globally";



<<<<<<< HEAD
=======

>>>>>>> a9b66599ce18a0765bcb943f5ffa67d2b13d8bff
const Navbar = props => {
  
// If user is not authenticated
  if (props.globalState.authToken === "") {
    return (
      <ul className="nav nav-tabs">
        <NavTab location="/" title="LetsPlayHockey" logo={logo} />
        <NavTab location="/Login" title="Login" />
        <NavTab location="/Register" title="Register" />
      </ul>
    );
  }
  // If user is authenticated
  else {
    return (
      <ul className="nav nav-tabs">
        <NavTab location="/" title="LetsPlayHockey" logo={logo} />
        <NavTab location="/Dashboard" title="Dashboard" />
        <NavTab location="/Games" title="Find Games" />
        
        {/* TODO: Have the logout clear the global authToken and redirect home */}
        <NavTab location="/" title="Logout" />
      </ul>
    );
  }
};

export default withGlobalState(Navbar);
