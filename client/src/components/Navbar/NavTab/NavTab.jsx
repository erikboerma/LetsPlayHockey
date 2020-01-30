import React from "react";
import { withGlobalState } from "react-globally";
import { Link } from "react-router-dom";

const NavTab = props => {
  const navItem = (
    <li className="nav-item">
      <Link
        to={props.location ? props.location : null}
        onClick={props.onClick}
        className={
          window.location.pathname === props.location &&
          props.title !== "Logout"
            ? "nav-link active"
            : "nav-link"
        }
      >
        {props.title}
      </Link>
    </li>
  );

  const navItemHome = (
    <div className="nav-item-home">
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

  return props.logo ? <>{navItemHome}</> : <>{navItem}</>;
};

export default withGlobalState(NavTab);
