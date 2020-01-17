import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withGlobalState } from 'react-globally'
import LoginForm from '../forms/LoginForm/LoginForm';
import axios from 'axios';

const Login = props => {
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
      console.log(resp);
      const userLoggedIn = "user found & logged in"
      if (userLoggedIn) {
        props.setGlobalState({ jwt: resp.data.token });
        history.push('/Dashboard');
      }
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

export default withGlobalState(Login);
