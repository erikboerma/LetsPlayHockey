import React from "react";
import './style.css'

function Dashboard() {
    return (
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Rink</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Positions Avail.</th>
                </tr>
                <tbody>
                    <td>The Rams</td>
                    <td>Aston Ice Works</td>
                    <td>January 10</td>
                    <td>9PM</td>
                    <td>Forward/Defense</td>
                </tbody>
            </table>
    );
}

export default Dashboard;
