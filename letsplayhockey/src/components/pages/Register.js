import React, { useState } from "react";
import RegisterForm from '../forms/RegisterForm/RegisterForm';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [messageFromServer, setMessageFromServer] = useState();

  const registerUser = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      '/registerUser',
      {
        email,
        username,
        password
      }
    );
    const setMessageFromServer = response.data.message;
    console.log(setMessageFromServer)
  };

  return (
    <RegisterForm
      setEmail={setEmail}
      setUsername={setUsername}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
      submitForm={registerUser}
    >
    </RegisterForm>
  );
}

export default Register;
