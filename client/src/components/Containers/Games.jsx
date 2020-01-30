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

  const handleClick = async (event, i) => {
    event.preventDefault();
    const userId = props.globalState.userId;
    const teamId = null;
    const gameId = event.target.getAttribute("data-index");

    const resp = await axios.post("/saveGame", {
      userId,
      // teamId,
      gameId: parseInt(gameId)
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
                  <td>
                    <MDBBtn
                      data-index={game.id}
                      onClick={handleClick}
                      size="lg"
                      gradient="morpheus-den"
                    >
                      <MDBIcon icon="bolt" />
                    </MDBBtn>
                  </td>
                </tr>
              );
            })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default withGlobalState(FindGames);
