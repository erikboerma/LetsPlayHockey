import React, { useState, useEffect } from "react";
import LoginForm from '../forms/LoginForm/LoginForm'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <LoginForm
      setEmail={setEmail}
      setPassword={setPassword}
    >
    </LoginForm>
  );
}

export default Login;
