import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
import "./dashboard.css";
import axios from "axios";
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import UpdateProfileModal from "../Modals/UpdateProfileModal";
import AddTeamModal from "../Modals/AddTeamModal";
import CreateTeamModal from '../Modals/CreateTeamModal';
import Tab from '../Tab/Tab';
import { useHistory } from "react-router-dom";
import TeamTable from "../Tables/TeamTable"

const Dashboard = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [position, setPosition] = useState();
  const [skill, setSkill] = useState();
  const [shot, setShot] = useState();
  const [notice, setNotice] = useState();

  const [teamName, setTeamName] = useState();
  const [offense, setOffense] = useState();
  const [defense, setDefense] = useState();
  const [goalies, setGoalies] = useState();
  const [totalPlayers, setTotalPlayers] = useState();


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

    axios.get('/findUser', config).then(resp => {
      // Potential bug here? Console is logging 7 times.
      setFirstName(resp.data.firstName);
      setLastName(resp.data.lastName);
      setPosition(resp.data.position);
      setSkill(resp.data.skillLevel);
      setShot(resp.data.shot);
      setNotice(resp.data.notice);
    });

    axios.get('/findTeam', {id: 1}).then(resp => {
      console.log(resp)
      setTeamName(resp.data.name)
      setOffense(resp.data.offense)
      setDefense(resp.data.defense)
      setGoalies(resp.data.goalies)
      setTotalPlayers(resp.data.totalPlayers)
    })
  });

  const createTeamSubmit = async event => {
    event.preventDefault();

    await axios.post('/createTeam', {
      teamName,
      offense,
      defense,
      goalies, 
      totalPlayers
    })
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
            <li>
              Skill Level:
              <span className="secondary dashboard-text"> {skill}</span>
            </li>
            <li>
              Notice Needed:
              <span className="secondary dashboard-text"> {notice}</span>
            </li>
          </ul>
          <UpdateProfileModal
            position={position}
            skill={skill}
            shot={shot}
            notice={notice}
          />
          <AddTeamModal position={position} />
          <CreateTeamModal 
            setTeamName={setTeamName}
            setOffense={setOffense}
            setDefense={setDefense}
            setGoalies={setGoalies}
            setTotalPlayers={setTotalPlayers}
            handleSubmit={createTeamSubmit}
          />
        </div>

        <br />
        <div className="col-8">
          <Tab></Tab>
          <TeamTable
            teamName={teamName}
            offense={offense}
            defense={defense}
            goalies={goalies}
            totalPlayers={totalPlayers}
          />
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
