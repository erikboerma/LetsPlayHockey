import React, { useState, useEffect } from "react";
import { withGlobalState } from "react-globally";
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

  useEffect(() => {
    axios.get("/findAllGames").then(response => {
      console.log(response.data);
      setGames(response.data);
    });
  }, []);

  const handleClick = async (event, i) => {
    event.preventDefault();
    const userId = props.globalState.userId;
    const teamId = null;
    const gameId = event.target.getAttribute("data-index");

    const resp = await axios.post("/api/saveGame/", {
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
                  <td>{game.location}</td>
                  <td>{game.date}</td>
                  <td>{game.time}</td>
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
