import React, { useState } from "react";
import CreateProfileForm from '../forms/CreateProfileForm/CreateProfileForm';
import { withGlobalState } from 'react-globally'
import rinkLine from "../../assets/images/icerink.png"

const CreateProfile = () => {
  const [position, setPosition] = useState();
  const [shot, setShot] = useState();
  const [skillLevel, setSkillLevel] = useState();
  const [availability, setAvailability] = useState([]);
  const [notice, setNotice] = useState();



  return (
    <CreateProfileForm rinkImg={rinkLine} />
  );
};

export default withGlobalState(CreateProfile);
