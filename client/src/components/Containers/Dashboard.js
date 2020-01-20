import React, { useState, useEffect, Component } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { withGlobalState } from "react-globally";
import "./dashboard.css";
import axios from "axios";
import Calendar from "../Calendar/Calendar";
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import ModalPage from "../modal"
import ModalPage2 from "../addTeamModal"
import { MDBModalFooter } from "mdbreact";


const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  const [skill, setSkill] = useState();
  const [shot, setShot] = useState();
  const [availability, setAvailability] = useState();
  const [notice, setNotice] = useState();

  useEffect(() => {
    const token = localStorage.getItem("authToken");


    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(`/findUser`, config).then(resp => {
      console.log(resp.data)
      setFirstName(resp.data.firstName);
      setLastName(resp.data.lastName);
      setPosition(resp.data.position);
      setSkill(resp.data.skillLevel);
      setShot(resp.data.shot);
      setAvailability(resp.data.availability);
      setNotice(resp.data.notice);
    });
  });

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img className="avatar" alt="Your photo" src={defaultAvatar} />
          <ul>
            <li>
              <div className="dashboard-name row">
                <h2 className="dashboard-text">
                  <span>
                    {firstName} {lastName}
                  </span>
                  
                </h2>

              </div>
            </li>
            <li>Position: <span className="secondary dashboard-text">{position}</span></li>
            <li>
              Skill Level: 
              <span className="secondary dashboard-text"> {skill}</span>
            </li>
            <li>Availability:</li>
            <li>
              Notice Needed: 
              <span className="secondary dashboard-text"> {notice}</span>
            </li>
          </ul>
          <MDBModalFooter>
          < ModalPage position={position} skill={skill} shot={shot} notice={notice} />
          < ModalPage2 />
          </MDBModalFooter>
        </div>

        <br />
        <div className="col-1"></div>
        <div className="col-7">
          <h1>
            <u>Available Games</u>
          </h1>
          <br />
          <h1>
            <u>Selected Games</u>
          </h1>
          
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
