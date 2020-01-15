import React, { useState } from "react";
import LoginForm from '../forms/LoginForm/LoginForm';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  let history = useHistory();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      '/loginUser',
      {
        email,
        password
      }
    ).then(resp => {
      const success = resp.data.message === "login success"
      if (success) {
        history.push('/CreateProfile')
      };
    });
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
