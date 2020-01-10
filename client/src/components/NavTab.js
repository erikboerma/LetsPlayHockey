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
    </ul>
  );
};

export default NavTabs;
