import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegisterForm from '../forms/RegisterForm/RegisterForm';
import axios from 'axios';

const Register = props => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      '/registerUser',
      {
        firstName,
        lastName,
        email,
        username,
        password
      }
    ).then(resp => {
      console.log(resp);
      const userCreated = resp.data.message === "user created";
      if (userCreated) {
        history.push('/CreateProfile');
      };
    });
  };

  return (
    <RegisterForm
      setFirstName={setFirstName}
      setLastName={setLastName}
      setEmail={setEmail}
      setUsername={setUsername}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
      submitForm={handleSubmit}
    >
    </RegisterForm>
  );
};

export default Register;
