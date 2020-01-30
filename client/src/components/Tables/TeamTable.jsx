import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import AddGameModal from "components/Modals/AddGameModal";
import "./Table.css";

const TeamTable = props => {
  if (props.currentStep !== 0) {
    return null;
  }

  return (
    <MDBTable hover className="dashboard-table">
      <MDBTableHead>
        <tr>
          <th className="dashboard-table-head">Team Name</th>
          <th className="dashboard-table-head">Offense</th>
          <th className="dashboard-table-head">Defense</th>
          <th className="dashboard-table-head">Goalies</th>
          <th className="dashboard-table-head" id="create-team-col"></th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.teams.map((team, i) => (
          <tr key={i}>
            <td className="dashboard-table-body">{team.name}</td>
            <td className="dashboard-table-body">0/{team.offense}</td>
            <td className="dashboard-table-body">0/{team.defense}</td>
            <td className="dashboard-table-body">0/{team.goalies}</td>
            {team.userTeams.captain && (
              <td className="dashboard-table-body">
                <AddGameModal
                  teamId={team.id}
                />
              </td>
            )}
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TeamTable;
