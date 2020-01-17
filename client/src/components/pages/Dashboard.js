import React from "react";
import Calendar from "./Calendar";


import './style.css'

function Dashboard() {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <h1><u>Player Profile</u></h1>

                    <ul>
                        <li>Name:</li>
                        <li>Position:</li>
                        <li>Skill Level:</li>
                        <li>Availability:</li>
                        <li>Notice Needed:</li>
                    </ul>

                    <br/>
                    <button>Edit My Profile
                    </button>
                </div>
                
                <div class="column">
                    <h1><u>Available games</u></h1>
                    <Calendar />
                    <br />
                    <h1><u>Selected games</u></h1>
                    <Calendar />

                </div>

            </div>

        </div>

    );
}

export default Dashboard;
