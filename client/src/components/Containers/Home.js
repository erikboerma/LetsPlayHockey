import React from "react";
import logo from "../../assets/images/letsplayhockey.png";
import rink from "../../assets/images/icehockeyrink.jpg";

const Home = () => (
  <div className="container">
    <img src={rink} alt="bg" className="homeBg" />
    <img id="logo" src={logo} alt="Logo" />;
         <h3 id="homeText">
      Welcome to Lets Play Hockey!<br />
      A resource designed for hockey players to be able to find players or games when they want!  <br />
      Have a free night and trying to find a team who needs subs?  You can do that here! <br />
      Short on players and need to see if you can find subs for the game?  You can do that too!<br />

      Register and create a profile, indicated the days you're free and the amount of notice you need.. thats it!<br />
      If you're looking for subs, create a profile and you can search for players!<br />

    </h3>
  </div>
);

export default Home;
