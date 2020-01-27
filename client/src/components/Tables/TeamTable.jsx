import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import "./TeamTable.css";

const TeamTable = ({ currentStep, teams }) => {
  if (currentStep !== 0) {
    return null;
  }

  return (
    <MDBTable hover className="dashboard-table">
      <MDBTableHead>
        <tr>
          <th>Team Name</th>
          <th>Offense</th>
          <th>Defense</th>
          <th>Goalies</th>
          <th>Total Players</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {teams.map((team, i) => (
          <tr key={i}>
            <td>{team.name}</td>
            <td>{team.offense}</td>
            <td>{team.defense}</td>
            <td>{team.goalies}</td>
            <td>{team.totalPlayers}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TeamTable;
