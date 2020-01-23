import React, { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';


const GameTable = () => {
    const [response, setResponse] = useState();

    useEffect(() => {
        if (!response) {
            axios.get('/api/findTeams').then(response => {
                console.log(response.data);
                setResponse(response.data);
            })
        }
    })

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
                {response && response.map(function (team) {
                    return (
                        <tr>
                            <td>{team.name}</td>
                            <td>{team.positions}</td>
                        </tr>
                    )
                })}
            </MDBTableBody>
        </MDBTable>
    );
}

{/* <tr>
                        <td>Spaceballs</td>
                        <td>UPenn</td>
                        <td>January 29</td>
                        <td>8PM</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Buzz</td>
                        <td>Aston Ice Works</td>
                        <td>January 30</td>
                        <td>11PM</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>The Rams</td>
                        <td>Aston Ice Works</td>
                        <td>February 2</td>
                        <td>9PM</td>
                        <td>4</td>
                    </tr>  */}

export default GameTable;