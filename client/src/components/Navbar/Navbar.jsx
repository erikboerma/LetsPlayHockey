import React from "react";
import NavTab from "components/Navbar/NavTab";
import "./Navbar.css";
import logo from "assets/images/LetsPlayHockeyTransparent.png";
import { withGlobalState } from "react-globally";

const logout = props => {
  props.setGlobalState({
    authToken: "",
    userId: null
  });
};

const Navbar = props => {
  // If user is not authenticated
  if (props.globalState.authToken === "") {
    return (
      <div className="nav-wrapper">
        <ul className="nav nav-tabs">
          <NavTab location="/" title="LetsPlayHockey" logo={logo} />
          <div className="nav-item-container">
            <NavTab location="/Games" title="Find Games" />
            <NavTab location="/Login" title="Login" />
            <NavTab location="/Register" title="Register" />
          </div>
        </ul>
      </div>
    );
  }
  // If user is authenticated
  else {
    return (
      <div className="nav-wrapper">
        <div className="container">
          <ul className="nav nav-tabs">
            <NavTab location="/" title="LetsPlayHockey" logo={logo} />
            <div className="nav-item-container">
              <NavTab location="/Games" title="Find Games" />
              <NavTab location="/Dashboard" title="Dashboard" />

              {/* TODO: Have the logout clear the global authToken and redirect home */}
              <NavTab location="/" title="Logout" onClick={logout} />
            </div>
          </ul>
        </div>
      </div>
    );
  }
};

export default withGlobalState(Navbar);
