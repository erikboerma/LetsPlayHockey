import React from "react";
import { withGlobalState } from 'react-globally';
import logo from "../../assets/images/letsPlayHockeyNew.png";

const Home = () => (
  <div className="container">
    <img id="logo" src={logo} alt="Logo" />;
         <h3 id="homeText">
      Welcome to Lets Play Hockey!<br />
      A resource designed for hockey players to be able to find players or games when they want!  <br />
      Have a free night and trying to find a team who needs subs?  You can do that here! <br />
      Short on players and need to see if you can get additional players for your game?  You can do that too!<br />

      Register and create a profile and look for games!  Otherwise, create a team, add a game.. thats it!<br />

    </h3>
  </div>
);

export default withGlobalState(Home);
