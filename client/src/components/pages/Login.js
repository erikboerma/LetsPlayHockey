import React, { useState } from "react";
import LoginForm from '../forms/LoginForm/LoginForm';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      '/loginUser',
      {
        email,
        password
      }
    );
  };

  return (
    <LoginForm
      setEmail={setEmail}
      setPassword={setPassword}
      submitForm={handleSubmit}
    >
    </LoginForm>
  );
}

export default Login;
