
import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const GameTable = props => {
  if (props.currentStep !== 1) {
    return null;
  };

  return (
    <MDBTable hover className='dashboard-table'>
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
        {props.games.map((game, i) => (
          <tr key={i}>
            <td>{game.name}</td>
            <td>{game.offense}</td>
            <td>{game.defense}</td>
            <td>{game.goalies}</td>
            <td>{game.totalPlayers}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GameTable;
