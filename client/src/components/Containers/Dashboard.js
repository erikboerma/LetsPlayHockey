import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
import "./dashboard.css";
import axios from "axios";
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import ModalPage from "../Modals/UpdateProfileModal";
import ModalPage2 from "../Modals/AddTeamModal";
import { useHistory } from "react-router-dom";
import { MDBModalFooter } from "mdbreact";
import GameTable from "../Games/Games"

const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  const [skill, setSkill] = useState();
  const [shot, setShot] = useState();
  const [availability, setAvailability] = useState();
  const [notice, setNotice] = useState();

  let history = useHistory();

  // TODO: This still needs work and can be refactored better
  useEffect(() => {
    const token = props.globalState.authToken;

    if (token === "") {
      history.push("/");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(`/findUser`, config).then(resp => {
      // Potential bug here? Console is logging 7 times.
      setFirstName(resp.data.firstName);
      setLastName(resp.data.lastName);
      setPosition(resp.data.position);
      setSkill(resp.data.skillLevel);
      setShot(resp.data.shot);
      setAvailability(resp.data.availability);
      setNotice(resp.data.notice);
    });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="bioBox" align="center">

            <img className="avatar" alt="Your photo" src={defaultAvatar} />
            <ul className>
              <li>
                <div className="dashboard-name row">
                  <h2 className="dashboard-text bioName">
                    <span>
                      {firstName} {lastName}
                    </span>
                  </h2>
                </div>
              </li>
              <li>
                Position:
              <span className="secondary dashboard-text"> {position}</span>
              </li>
              <li>
                Skill Level:
              <span className="secondary dashboard-text"> {skill}</span>
              </li>
              <li>
                Availability:
              <span className="secondary dashboard-text"> {availability}</span>
              </li>
              <li>
                Notice Needed:
              <span className="secondary dashboard-text"> {notice}</span>
              </li>
            </ul>

              <ModalPage
                position={position}
                skill={skill}
                shot={shot}
                notice={notice}
              />
              <ModalPage2 position={position} />
          </div>

        </div>
        <br />
        <div className="col-1"></div>
        <div className="col-7">
          <h1>
            <u>Available Games</u>
          </h1>
          <GameTable />
          <br />
          <h1>
            <u>Selected Games</u>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
