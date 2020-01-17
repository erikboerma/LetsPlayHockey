import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
import axios from "axios";

const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    const token = props.globalState.jwt;
    console.log(token);

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(
      `/findUser`,
       config
    ).then(resp => {
      console.log(resp);
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
        </div>
      </div>
    </div>
  );
}


export default withGlobalState(Dashboard);
