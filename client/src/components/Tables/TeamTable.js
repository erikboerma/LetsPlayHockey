import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

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
                <tr>
                    <td>{props.teamName}</td>
                    <td>{props.offense}</td>
                    <td>{props.defense}</td>
                    <td>{props.goalies}</td>
                    <td>{props.totalPlayers}</td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

export default TeamTable;