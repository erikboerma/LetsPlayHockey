import React from "react";
import NavTab from "./NavTab/NavTab";
import "./navbar.css";
import logo from "../../assets/images/letsplayhockey.png";

const Navbar = () => (
  <ul className="nav nav-tabs">
    <NavTab location="/" title="LetsPlayHockey" logo={logo} />
    <NavTab location="/Login" title="Login" />
    <NavTab location="/Register" title="Register" />
    <NavTab location="/CreateProfile" title="Create Profile" />
    <NavTab location="/Dashboard" title="Dashboard" />
  </ul>
);

export default Navbar;
