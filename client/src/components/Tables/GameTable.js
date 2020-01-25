import React, { useState } from "react";
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
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.games.map((game, i) => (
          <tr key={i}>
            <td>{game.name}</td>
            <td>{game.date}</td>
            <td>{game.time}</td>
            <td>{game.location}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GameTable;
