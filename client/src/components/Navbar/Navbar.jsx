import React from "react";
import NavTab from "components/Navbar/NavTab";
import "./Navbar.css";
import logo from "assets/images/LetsPlayHockeyTransparent.png";
import { withGlobalState } from "react-globally";
import defaultAvatar from "assets/images/default-avatar.jpg";


const Navbar = props => {
  const logout = () => {
    props.setGlobalState({
      authToken: "",
      userId: null
    });
  };

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
              <NavTab location="/" title="Logout" onClick={logout} />
              <div className="nav-avatar-container">
                <img 
                  className="nav-avatar" 
                  src={props.globalState.avatar ? props.globalState.avatar : defaultAvatar} 
                  alt="" 
                />
                <span>{props.globalState.username}</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
};

export default withGlobalState(Navbar);
