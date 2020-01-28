import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from "axios";

const GameTable = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    if (!response) {
      axios.get("/api/findTeams").then(response => {
        // console.log(response.data);
        setResponse(response.data);
      });
    }
  });

  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>Team Name</th>
          <th>Rink</th>
          <th>Date</th>
          <th>Time</th>
          <th>Positions Avail.</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {response &&
          response.map(function(team) {
            return (
              <tr>
                <td>{team.name}</td>
                <td>{team.positions}</td>
              </tr>
            );
          })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GameTable;
