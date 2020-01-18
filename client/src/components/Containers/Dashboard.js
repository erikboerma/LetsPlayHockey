import React, { useState, useEffect } from "react";
import Calendar from "../Calendar";
import './style.css';
import axios from 'axios';

const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    const token = props.globalState.jwt;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      `/findUser`,
      config
    ).then(resp => {
      setFirstName(resp.data.firstName)
      setLastName(resp.data.lastName)
    });
  });

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
        <div className="column">
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
            </div>

          </div>

        </div>
        <div className="column">
          <h1><u>Available games</u></h1>
          <Calendar />

          <br />
          <h1><u>Selected games</u></h1>
          <Calendar />

        </div>
      </div>
    </div>
  );
}


export default Dashboard;
