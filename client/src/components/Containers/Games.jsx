import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
import Moment from "react-moment";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import axios from "axios";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const FindGames = props => {
  const [games, setGames] = useState([]);
  const [render, setRender] = useState(true);

  const fetchGames = async () => {
    const resp = await axios.get("/findAllGames");
    setGames(resp.data);
    setRender(false);
  };

  useEffect(() => {
    if (render) {
      fetchGames();
    }
  }, [render]);

  const handleClick = async event => {
    event.persist();
    const userId = props.globalState.userId;
    const teamId = parseInt(event.target.getAttribute("data-team-index"));
    const gameId = parseInt(event.target.getAttribute("data-game-index"));

    console.log(event.target);
    console.log(userId, teamId, gameId);

    const resp = await axios.post("/saveGame", {
      userId,
      teamId,
      gameId
    });
  };

  if (!games) {
    return null
  }

  return (
    <div className="wrapper container">
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th className="dashboard-table-head">Team Name</th>
            <th className="dashboard-table-head">Location</th>
            <th className="dashboard-table-head">Date</th>
            <th className="dashboard-table-head">Time</th>
            {props.globalState.username && <th></th>}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {games &&
            games.map((game, i) => {
              return (
                <tr key={i}>
                  <td className="dashboard-table-body">{game.Team.name}</td>
                  <td className="dashboard-table-body">{game.location}</td>
                  <td className="dashboard-table-body">
                    <Moment local format="MM/DD/YYYY">
                      {game.datetime}
                    </Moment>
                  </td>
                  <td className="dashboard-table-body">
                    <Moment local format="hh:mm A">
                      {game.datetime}
                    </Moment>
                  </td>
                  {props.globalState.username && (
                    <td>
                      <IconButton
                        data-game-index={game.id}
                        data-team-index={game.Team.id}
                        variant="extended"
                        className="icon-button"
                        onClick={handleClick}
                      >
                        <AddIcon
                          data-game-index={game.id}
                          data-team-index={game.Team.id}
                        />
                        <span
                          className="icon-text"
                          data-game-index={game.id}
                          data-team-index={game.Team.id}
                        >
                          Sign Up
                        </span>
                      </IconButton>
                      {/* <MDBBtn
                        data-game-index={game.id}
                        data-team-index={game.Team.id}
                        onClick={handleClick}
                        size="lg"
                        gradient="morpheus-den"
                      >
                        <MDBIcon icon="bolt" />
                      </MDBBtn> */}
                    </td>
                  )}
                </tr>
              );
            })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default withGlobalState(FindGames);
