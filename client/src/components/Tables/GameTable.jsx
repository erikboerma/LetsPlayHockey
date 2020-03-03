import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Moment from "react-moment";
import moment from 'moment';
import "./Table.css";

const GameTable = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <MDBTable hover className="dashboard-table">
      <MDBTableHead>
        <tr>
          <th className="dashboard-table-head">Team Name</th>
          <th className="dashboard-table-head">Date</th>
          <th className="dashboard-table-head">Time</th>
          <th className="dashboard-table-head">Location</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.teams.map((team, i) =>
          team.Games.map((game, i) => (
            moment(game.datetime.toString()).isBefore(moment()) === false && (
            <tr key={i}>
              <td className="dashboard-table-body">{team.name}</td>
              <td className="dashboard-table-body">
                <Moment local format="MM/DD/YYYY">
                  {game.datetime}
                </Moment>
              </td>
              <td className="dashboard-table-body">
                <Moment local format="hh:mm A">
                  {game.datetime}
                </Moment>
              </td>
              <td className="dashboard-table-body">{game.location}</td>
            </tr>
            )
          ))
        )}
      </MDBTableBody>
    </MDBTable>
  );
};

export default GameTable;
