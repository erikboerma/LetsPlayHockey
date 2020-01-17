import React, { useState, useEffect } from 'react';
import CreateProfileForm from '../Forms/CreateProfileForm/CreateProfileForm';
import { withGlobalState } from 'react-globally';
import rinkLine from '../../assets/images/icerink.png';
import Checkbox from '../Checkbox/Checkbox';

const CreateProfile = () => {
  // const [position, setPosition] = useState();
  // const [shot, setShot] = useState();
  // const [skillLevel, setSkillLevel] = useState();
  // const [availability, setAvailability] = useState([]);
  // const [notice, setNotice] = useState();

  // const [checked, setChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState(new Map());

  const handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    setCheckedItems(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  return (

    <CreateProfileForm 
      rinkImg={rinkLine}
      handleCheckboxChange={handleChange}
    />
  );
};

export default withGlobalState(CreateProfile);
