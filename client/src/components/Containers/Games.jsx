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

    console.log(userId, teamId, gameId)

    const resp = await axios.post("/saveGame", {
      userId,
      teamId,
      gameId,
    });
  };

  return (
    <div className="wrapper container">
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th>Team Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            {props.globalState.username && (
              <th></th>
            )}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {games &&
            games.map((game, i) => {
              return (
                <tr key={i}>
                  <td>{game.Team.name}</td>
                  <td>{game.location}</td>
                  <td>
                    <Moment local format="MM/DD/YYYY">
                      {game.datetime}
                    </Moment>
                  </td>
                  <td>
                    <Moment local format="hh:mm A">
                      {game.datetime}
                    </Moment>
                  </td>
                  {props.globalState.username && (
                    <td>
                      <MDBBtn
                        data-game-index={game.id}
                        data-team-index={game.Team.id}
                        onClick={handleClick}
                        size="lg"
                        gradient="morpheus-den"
                      >
                        <MDBIcon icon="bolt" />
                      </MDBBtn>
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
