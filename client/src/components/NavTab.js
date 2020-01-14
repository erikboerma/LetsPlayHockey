import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Login"
          className={window.location.pathname === "/Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Register"
          className={window.location.pathname === "/Register" ? "nav-link active" : "nav-link"}
        >
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/CreateProfile"
          className={window.location.pathname === "/CreateProfile" ? "nav-link active" : "nav-link"}
        >
          CreateProfile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Dashboard"
          className={window.location.pathname === "/Dashboard" ? "nav-link active" : "nav-link"}
        >
          Dashboard
        </Link>
      </li>
    </ul>
  );
};

export default NavTabs;
