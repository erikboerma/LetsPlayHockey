import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import LoginForm from "components/Forms/LoginForm";
import axios from "axios";

const Login = props => {
  const [user, setUser] = useState({});

  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const resp = await axios.post("/loginUser", user);
    console.log(resp);

    const userLoggedIn = resp.data.auth === true;
    if (userLoggedIn) {
      localStorage.setItem("authToken", resp.data.token);
      props.setGlobalState({
        userId: resp.data.userId,
        authToken: resp.data.token
      });
      history.push("/Dashboard");
    }
  };

  return (
    <div className="wrapper container">
      <LoginForm
        user={user}
        setUser={setUser}
        submitForm={handleSubmit}
      ></LoginForm>
    </div>
  );
};

export default withGlobalState(Login);
