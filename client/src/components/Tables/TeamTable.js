import React, { useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from 'axios';

const TeamTable = props => {
  // useEffect(() => {
  //     axios.get('/findTeams').then(resp => {
  //       console.log(resp.data);
  //       props.setTeams([
  //           ...props.teams,
  //           {
  //             teamName: resp.data.name,
  //             offense: resp.data.offense,
  //             defense: resp.data.defense,
  //             goalies: resp.data.goalies,
  //             totalPlayers: resp.data.totalPlayers
  //           }
  //         ]);
  //     })
  // })

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
