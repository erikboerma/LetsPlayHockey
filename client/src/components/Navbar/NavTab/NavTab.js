import React from "react";
import { Link } from "react-router-dom";

const NavTab = props => (
  <li className="nav-item">
    <Link
      to={props.location}
      className={window.location.pathname === props.location ? "nav-link active" : "nav-link"}
    >
      {props.title}
    </Link>
  </li>
);

export default NavTab;
