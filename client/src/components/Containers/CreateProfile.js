import React, { useState, useEffect } from "react";
import CreateProfileForm from "../Forms/CreateProfileForm/CreateProfileForm";
import { withGlobalState } from "react-globally";
import rinkLine from "../../assets/images/icerink.png";
import Checkbox from "../Checkbox/Checkbox";

const CreateProfile = () => {
  const [position, setPosition] = useState(null);
  const [shot, setShot] = useState(null);
  const [skillLevel, setSkillLevel] = useState(null);
  // const [availability, setAvailability] = useState([]);
  // const [notice, setNotice] = useState();

  const handleChange = selectedOption => {
    switch (selectedOption.state) {
      case "position":
        setPosition(selectedOption.label);
        break;
      case "shot":
        setShot(selectedOption.label);
        break;
      case "skillLevel":
        setSkillLevel(selectedOption.label);
        break;
    }
  };

  return <CreateProfileForm rinkImg={rinkLine} handleChange={handleChange} />;
};

export default withGlobalState(CreateProfile);
