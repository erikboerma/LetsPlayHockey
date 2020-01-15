import React from "react";
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
                    <br/>
                    <button>Edit my profile</button>
                </div>
                <div class="column">
                    <h1><u>Available games</u></h1>
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
