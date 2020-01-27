import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";
import AddGameModal from "components/Modals/AddGameModal";
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
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {teams.map((team, i) => (
          <tr key={i}>
            <td>{team.name}</td>
            <td>0/{team.offense}</td>
            <td>0/{team.defense}</td>
            <td>0/{team.goalies}</td>
            {team.userTeams.captain ? (
              <td>
                <AddGameModal />
              </td>
            ) : null}
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default TeamTable;
