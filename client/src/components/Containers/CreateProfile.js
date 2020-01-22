import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import CreateProfileForm from "../Forms/CreateProfileForm/CreateProfileForm";
import { withGlobalState } from "react-globally";
import axios from "axios";

const CreateProfile = props => {
  const [position, setPosition] = useState(null);
  const [shot, setShot] = useState(null);
  const [skillLevel, setSkillLevel] = useState(null);
  // const [availability, setAvailability] = useState([]);
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

  const handleChange = selectedOption => {
    // These conditions will check for single options
    if (selectedOption.state) {
      if (selectedOption.state === "position") {
        setPosition(selectedOption.label);
      } else if (selectedOption.state === "shot") {
        setShot(selectedOption.label);
      } else if (selectedOption.state === "skillLevel") {
        setSkillLevel(selectedOption.label);
      } else if (selectedOption.state === "notice") {
        setNotice(selectedOption.label);
      }
    }
    // These conditions will check for multi options
    // else {
    //   selectedOption.forEach(data => {
    //     setAvailability([...availability, data]);
    //   });
    // }
  };

  return (
    <CreateProfileForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default withGlobalState(CreateProfile);
