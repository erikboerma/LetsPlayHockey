import React from "react";
import logo from "../../assets/images/letsplayhockey.jpg";

function Home() {
  return (
    <div class ="container homeBio">
         <img id="logo" src={logo} alt="Logo" />;      
         <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna

      </p>
    </div>
  );
}

export default Home;
