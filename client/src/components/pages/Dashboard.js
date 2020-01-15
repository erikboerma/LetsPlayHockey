import React from "react";
import Calendar from "./Calendar";
import CreateProfile from "../forms/CreateProfile/CreateProfile";

import './style.css'

function Dashboard() {
    return (
        <div class="container">
            <div class="row">
                <div class="column">
                    <h1><u>Player profile</u></h1>
                    <ul>
                        <li>Name:</li>
                        <li>Position:</li>
                        <li>Skill Level:</li>
                        <li>Availability:</li>
                        <li>Notice needed:</li>
                    </ul>
                    <br />
                    <button id="editProfile">Edit my profile</button>
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <CreateProfile />
                        </div>

                    </div>

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
