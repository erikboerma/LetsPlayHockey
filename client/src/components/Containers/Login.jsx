import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import LoginForm from "components/Forms/LoginForm";
import axios from "axios";
import validate from "validation/validateLogin";

const Login = props => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setErrors] = useState({});

  let history = useHistory();

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setErrors(validate(user));
    const resp = await axios.post("/loginUser", user);
    console.log(resp);

    const userLoggedIn = resp.data.auth === true;
    const invalidUsername = resp.data === "bad username";
    if (userLoggedIn) {
      localStorage.setItem("authToken", resp.data.token);
      props.setGlobalState({
        userId: resp.data.userId,
        authToken: resp.data.token
      });
      history.push("/Dashboard");
    } else if (invalidUsername) {
      setErrors({username: "Invalid Username"})
    }
  };

  return (
    <div className="wrapper container">
      <LoginForm
        submitForm={handleSubmit}
        handleChange={handleChange}
      ></LoginForm>
    </div>
  );
};

export default withGlobalState(Login);
