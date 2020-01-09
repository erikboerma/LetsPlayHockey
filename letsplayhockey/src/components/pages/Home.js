import React from "react";
import logo from "../../assets/images/letsplayhockey.jpg";
import rink from "../../assets/images/icehockeyrink.jpg"


function Home() {
  return (
    <div id="imgContainer" style={{ backgroundImage: `url(${rink})` }}>
      <div class="container">
        <img id="logo" src={logo} alt="Logo" />;
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
          varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
          Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
  
      </p>
      </div>
    </div>
  );
}

export default Home;
