import React from "react";
import { withGlobalState } from 'react-globally';
import logo from "../../assets/images/LetsPlayHockeyTransparent.png";

const Home = () => (
  <div className="container">
    <img id="logo" src={logo} alt="Logo" />
         <h3 id="homeText">
      <strong>A resource designed for hockey players to be able to find players or games when they want!  <br />
      Have a free night and trying to find a team who needs subs? <i>You can do that here!</i> <br />
      Short on players and need to see if you can get additional players for your game?  <i>You can do that too!</i><br />

      Register and create a profile and look for games!  Otherwise, create a team, add a game.. thats it!</strong>

    </h3>
  </div>
);

export default withGlobalState(Home);
