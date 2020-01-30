import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from "axios";
import "./TeamTable.css";


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
          <th className="tableText">Team Name</th>
          <th className="tableText">Rink</th>
          <th className="tableText">Date</th>
          <th className="tableText">Time</th>
          <th className="tableText">Positions Avail.</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {response &&
          response.map(function(team) {
            return (
              <tr>
                <td className="teamText">{team.name}</td>
                <td className="teamText">{team.positions}</td>
              </tr>
            );
          })}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GameTable;
