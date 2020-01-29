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
          <th className="tableText">Team Name</th>
          <th className="tableText">Offense</th>
          <th className="tableText">Defense</th>
          <th className="tableText">Goalies</th>
          <th className="tableText">Total Players</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {teams.map((team, i) => (
          <tr key={i}>
            <td className="teamText">{team.name}</td>
            <td className="teamText">{team.offense}</td>
            <td className="teamText">{team.defense}</td>
            <td className="teamText">{team.goalies}</td>
            <td className="teamText">{team.totalPlayers}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TeamTable;
