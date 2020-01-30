import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import { useForm } from "react-hook-form";
import axios from "axios";
import LoginForm from "components/Forms/LoginForm";

const Login = props => {
  const [backendErrors, setBackendErrors] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  let history = useHistory();

  const submitForm = async data => {
    console.log(data)

    const resp = await axios.post("/loginUser", data)
    console.log(resp);

    const userLoggedIn = resp.data.auth === true;
    const wrongUsername = resp.data === "bad username"
    const wrongPassword = resp.data === "passwords do not match"

    if (wrongUsername) {
      setBackendErrors("Username does not exist")
    } else if (wrongPassword) {
      setBackendErrors("Incorrect Password")
    } else if (userLoggedIn) {
      localStorage.setItem("authToken", resp.data.token);
      props.setGlobalState({
        username: resp.data.username,
        userId: resp.data.userId,
        authToken: resp.data.token
      });
      history.push("/Dashboard");
    };
  };

  return (
    <div className="wrapper container">
      <form onSubmit={handleSubmit(submitForm)}>
        <LoginForm
          backendErrors={backendErrors}
          register={register}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default withGlobalState(Login);
