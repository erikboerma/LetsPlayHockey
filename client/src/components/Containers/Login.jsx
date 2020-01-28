import React from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import axios from "axios";
import LoginForm from "components/Forms/LoginForm";

const Login = props => {
  let history = useHistory();

  const handleSubmit = async data => {
    console.log(data)

    const resp = await axios.post("/loginUser", data);
    console.log(resp);

    const userLoggedIn = resp.data.auth === true;
    if (userLoggedIn) {
      localStorage.setItem("authToken", resp.data.token);
      props.setGlobalState({
        userId: resp.data.userId,
        authToken: resp.data.token
      });
      history.push("/Dashboard");
    };
  };

  return (
    <div className="wrapper container">
      <LoginForm
        submitForm={handleSubmit}
      />
    </div>
  );
};

export default withGlobalState(Login);
