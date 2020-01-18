import React, { useState, useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { withGlobalState } from "react-globally";
import "./dashboard.css";
import axios from "axios";
import Calendar from "../Calendar/Calendar";
import defaultAvatar from "../../assets/images/default-avatar.jpg";

const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  const [skill, setSkill] = useState();
  const [availability, setAvailability] = useState();

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(`/findUser`, config).then(resp => {
      setFirstName(resp.data.firstName);
      setLastName(resp.data.lastName);
      setPosition(resp.data.position);
      setSkill(resp.data.skill);
      setAvailability(resp.data.availability);
    });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img className="avatar" src={defaultAvatar} />
        </div>
        <div className="col-8">
          <ul>
            <li>
              <div className="dashboard-name row">
                <h2 className="dashboard-text">
                  <span>{firstName} {lastName}</span>
                  {/* <span>Valon Rama</span> */}
                </h2>
                <div>
                <MDBBtn tag="a" size="med" gradient="blue">
                  <MDBIcon icon="edit" />
                </MDBBtn>
                </div>
              </div>
            </li>
            <li className="secondary dashboard-text">{position}</li>
            <li>Skill Level - A</li>
            <li>Availability:</li>
            <li>Notice Needed:</li>
          </ul>

          <br />
          <h1>
            <u>Available Games</u>
          </h1>
          <Calendar />
          <br />
          <h1>
            <u>Selected Games</u>
          </h1>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
