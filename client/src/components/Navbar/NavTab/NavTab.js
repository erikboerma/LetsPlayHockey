import React from "react";
import { Link } from "react-router-dom";

const NavTab = props => {
  const navItem = (
    <li className="nav-item">
      <Link
        to={props.location ? props.location : null}
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

  const navItemHome = (
    <div className="home-link row">
    <Link
      to={props.location ? props.location : null}
      className={
        window.location.pathname === props.location
          ? "nav-link active"
          : "nav-link"
      }
    >
        <img src={props.logo} id="nav-logo" alt="" />
        <li className="nav-item">{props.title}</li>
    </Link>
      </div>
  );

  return props.logo ? (
    <>{navItemHome}</>
  ) : (
    <>{navItem}</>
  );
};

export default NavTab;
