import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./TeamTable.css";


const GameTable = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <MDBTable hover className="dashboard-table">
      <MDBTableHead>
        <tr>
          <th className="tableText">Team Name</th>
          <th className="tableText">Date</th>
          <th className="tableText">Time</th>
          <th className="tableText">Location</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.teams.map((team, i) =>
          team.Games.map((game, i) => (
            <tr key={i}>
              <td className="teamText">{team.name}</td>
              <td className="teamText">{game.date}</td>
              <td className="teamText">{game.time}</td>
              <td className="teamText">{game.location}</td>
            </tr>
          ))
        )}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GameTable;
