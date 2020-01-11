import React, { useState } from "react";
import LoginForm from '../forms/LoginForm/LoginForm';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      '/loginUser',
      {
        username,
        password
      }
    ).then(resp => {
      console.log(resp);

    })
  };

  return (
    <LoginForm
      setUsername={setUsername}
      setPassword={setPassword}
      submitForm={handleSubmit}
    >
    </LoginForm>
  );
}

export default Login;
