import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import CreateProfileForm from "../Forms/CreateProfileForm/CreateProfileForm";
import { withGlobalState } from "react-globally";
import axios from "axios";

const CreateProfile = props => {
  const [position, setPosition] = useState(null);
  const [shot, setShot] = useState(null);
  const [skillLevel, setSkillLevel] = useState(null);
  const [notice, setNotice] = useState();

  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const token = localStorage.getItem("authToken");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const user = await axios.get('/findUser', config).then(resp => {
      return resp.data.username;
    });

    await axios.put('/updateUserTest', {
      username: user,
      position,
      shot: shot,
      skillLevel,
      notice
    }).then(resp => {
      console.log(resp)
      history.push('/Login')
    })
  };

  return (
    <CreateProfileForm
      handleSubmit={handleSubmit}
    />
  );
};

export default withGlobalState(CreateProfile);
