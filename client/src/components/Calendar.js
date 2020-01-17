import React, { useState, useEffect } from "react";
// import './style.css'
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

const Calendar = () => {
    // const [teamName, setTeamName] = useState();
    // const [location, setLocation] = useState();
    // const [date, setDate] = useState();
    // const [time, setTime] = useState();
    // const [positionsAvailable, setpositionsAvailable] = useState();
    const [response, setResponse] = useState();



    useEffect(() => {
        if (!response) {
            axios.get('/api/findTeams').then(response => {
                console.log(response.data);
                // setTeamName(response.data.teamName);
                // setLocation(response.data.location);
                // setDate(response.data.date);
                // setTime(response.data.time);
                // setpositionsAvailable(response.data.positionsAvailable);
                setResponse(response.data);
            })
        }
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Rink</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Positions Avail.</th>
                </tr>
            </thead>
            <tbody>
                {response && response.map(function (team) {
                    return (
                        <tr>
                            <td>{team.teamName}</td>
                            <td>{team.location}</td>
                            <Moment tz="America/New_York">{team.date}</Moment>
                            <td>{team.time}</td>
                            <td>{team.positionsAvailable}</td>
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Calendar;
