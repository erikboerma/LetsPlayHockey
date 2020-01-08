import React, { useState } from "react";
import RegisterForm from '../forms/RegisterForm/RegisterForm'

function Register() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <RegisterForm
      setEmail={setEmail}
      setUsername={setUsername}
      setPassword={setPassword}
    >
    </RegisterForm>
  );
}

export default Register;
