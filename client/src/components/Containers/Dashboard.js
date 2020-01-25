import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
import "./dashboard.css";
import axios from "axios";
import defaultAvatar from "../../assets/images/default-avatar.jpg";
import UpdateProfileModal from "../Modals/UpdateProfileModal";
import AddTeamModal from "../Modals/AddTeamModal";
import CreateTeamModal from "../Modals/CreateTeamModal";
import Tab from "../Tab/Tab";
import { useHistory } from "react-router-dom";
import TeamTable from "../Tables/TeamTable";
import Fab from "@material-ui/core/Fab";
import CameraIcon from "@material-ui/icons/CameraAlt";
import GameTable from "../Tables/GameTable";

const Dashboard = props => {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState({});
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const userId = props.globalState.userId;
    const token = props.globalState.authToken;

    // if (token === "") {
    //   history.push("/");
    // }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const fetchData = async () => {
      const userResp = await axios.get("/findUser", config);
      setUser(userResp.data);
      console.log(userResp);

      const teamResp = await axios.post("/findTeams", { userId });
      const teamRespTeams = teamResp.data[0].Teams;
      const teamRespGames = teamResp.data[0].Teams[0].Games;
      setTeams(teamRespTeams);
      setGames(teamRespGames);
      console.log(teamResp);
      console.log(teamRespTeams);

    };
    fetchData();
  }, [history, props.globalState]);

  return (
    <div className="container">
      <div className="row">
        <div className="user-container col-4">
          <div className="avatar-container">
            <img
              id="avatar"
              alt=""
              src={user.avatar ? user.avatar : defaultAvatar}
            />
            <Fab variant="extended" id="update-avatar">
              <CameraIcon />
              Update Photo
            </Fab>
          </div>
          <div className="user-info">
            <ul>
              <li>
                <h2 className="dashboard-text">
                  {user.firstName} {user.lastName}
                </h2>
              </li>
              <li>
                Shot:
                <span className="secondary dashboard-text"> {user.shot}</span>
              </li>
              <li>
                Skill Level:
                <span className="secondary dashboard-text">
                  {" "}
                  {user.skillLevel}
                </span>
              </li>
              <li>
                Notice Needed:
                <span className="secondary dashboard-text"> {user.notice}</span>
              </li>
            </ul>
          </div>
          <UpdateProfileModal user={user} />
          <AddTeamModal position={user.position} />
          <CreateTeamModal />
        </div>

        <br />
        <div className="col-8">
          <Tab currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <TeamTable currentStep={currentStep} teams={teams} />
          <GameTable
            currentStep={currentStep}
            games={games}
          />
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
