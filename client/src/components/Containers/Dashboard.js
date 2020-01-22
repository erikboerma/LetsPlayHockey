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

const Dashboard = props => {
  const [user, setUser] = useState({});
  const [teams, setTeams] = useState([]);

  let history = useHistory();

  // TODO: This still needs work and can be refactored better
  useEffect(() => {
    const userId = props.globalState.userId;
    const token = props.globalState.authToken;

    if (token === "") {
      history.push("/");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    async function fetchData() {
      await axios.get("/findUser", config).then(resp => {
        console.log(resp);
        setUser({
          ...user,
          id: resp.data.id,
          firstName: resp.data.firstName,
          lastName: resp.data.lastName,
          skillLevel: resp.data.skillLevel,
          shot: resp.data.shot,
          notice: resp.data.notice
        });
      });

      await axios
        .post("/findTeams", {
          userId
        })
        .then(resp => {
          console.log(resp);
          setTeams([
            ...teams,
            {
              teamName: resp.data.name,
              offense: resp.data.offense,
              defense: resp.data.defense,
              goalies: resp.data.goalies,
              totalPlayers: resp.data.totalPlayers
            }
          ]);
        });
    };

    fetchData();
  }, []);

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
                    {user.firstName} {user.lastName}
                  </span>
                </h2>
              </div>
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
          <UpdateProfileModal user={user} />
          <AddTeamModal position={user.position} />
          <CreateTeamModal />
        </div>

        <br />
        <div className="col-8">
          <Tab></Tab>
          <TeamTable teams={teams} />
        </div>
      </div>
    </div>
  );
};

export default withGlobalState(Dashboard);
