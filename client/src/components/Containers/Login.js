import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withGlobalState } from 'react-globally'
import LoginForm from '../Forms/LoginForm/LoginForm';
import axios from 'axios';

const Login = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  let history = useHistory();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(
      '/loginUser',
      {
        username,
        password
      }
    ).then(resp => {
      console.log(resp);
      const userLoggedIn = resp.data.auth === true;
      if (userLoggedIn) {
        localStorage.setItem('authToken', resp.data.token)
        props.setGlobalState({
          userId: resp.data.userId,
          authToken: resp.data.token
         });
        history.push('/Dashboard');
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

export default withGlobalState(Login);
