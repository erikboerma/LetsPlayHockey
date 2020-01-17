import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../forms/LoginForm/LoginForm';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  let history = useHistory();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      '/loginUser',
      {
        username,
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
      setUsername={setUsername}
      setPassword={setPassword}
      submitForm={handleSubmit}
    >
    </LoginForm>
  );
}

export default Login;
