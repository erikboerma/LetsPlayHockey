import React from "react";
import logo from "../../assets/images/letsplayhockey.jpg";
import rink from "../../assets/images/icehockeyrink.jpg"


function Home() {
  return (
      <div class="container">
        <img src={rink} alt="bg" class="homeBg" />
        <img id="logo" src={logo} alt="Logo" />;
         <p id="homeText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        </p>
      </div>

  );
}

export default Home;
