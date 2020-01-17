import React from "react";
import { Link } from "react-router-dom";

const NavTab = props => {
  const navItem = (
    <li className="nav-item">
      <Link
        to={props.location}
        className={
          window.location.pathname === props.location
            ? "nav-link active"
            : "nav-link"
        }
      >
        {props.title}
      </Link>
    </li>
  );

  return props.logo ? (
    <div className="row">
      <img src={props.logo} id="nav-logo" />
      {navItem}
    </div>
  ) : (
    <>{navItem}</>
  );
};

export default NavTab;
