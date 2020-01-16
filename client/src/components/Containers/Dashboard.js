import React, { Component, useState } from "react";
import Calendar from "../Containers/Calendar";
import { withGlobalState } from "react-globally";

import "./style.css";
import axios from "axios";

const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  const jwt = props.globalState.jwt;
  console.log(jwt)
  // CompononentDidMount = () => {
  //   axios.get(
  //     'findUser',
  //     {
  //       // props.globalState.jwt
  //     }
  //     ).then(resp => {
  //       console.log(resp);
  //     });
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <h1>
            <u>Player Profile</u>
          </h1>

          <ul>
            <li>
              Name: {firstName} {lastName}
            </li>
            <li>Position:</li>
            <li>Skill Level:</li>
            <li>Availability:</li>
            <li>Notice Needed:</li>
          </ul>

          <br />
          <button>Edit My Profile</button>
        </div>
        <div className="col">
          <h1>
            <u>Available Games</u>
          </h1>

          <br />
          <button id="editProfile">Edit my profile</button>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
            </div>
          </div>
        </div>
        <div className="col">
          <h1>
            <u>Available games</u>
          </h1>
          {/* <Calendar />
          <br />
          <h1>
            <u>Selected games</u>
          </h1>
          <Calendar /> */}
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
