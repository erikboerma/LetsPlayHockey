import React, { useState } from "react";
import RegisterForm from '../forms/RegisterForm/RegisterForm';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [messageFromServer, setMessageFromServer] = useState();

  const handleSubmit = async (event) => {
    console.log("test");
    event.preventDefault();

    const response = await axios.post(
      'http://localhost:3000/registerUserTest',
      {
        email,
        username,
        password
      }
    );
    console.log(response.data.message)
  };

  return (
    <RegisterForm
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
