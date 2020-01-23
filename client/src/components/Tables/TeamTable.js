import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TeamTable = props => {
  return (
    <MDBTable hover>
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
        {props.teams.map((team, i) => (
            <tr key={i}>
              <td>{team.teamName}</td>
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
