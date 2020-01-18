import React, { useState, useEffect } from "react";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

const Calendar = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    if (!response) {
      axios.get('/api/findTeams').then(response => {
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
