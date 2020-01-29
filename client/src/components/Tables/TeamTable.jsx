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
            <td className="teamText">0/{team.offense}</td>
            <td className="teamText">0/{team.defense}</td>
            <td className="teamText">0/{team.goalies}</td>
            {team.userTeams.captain ? (
              <td className="teamText">
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
