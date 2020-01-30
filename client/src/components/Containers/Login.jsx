import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import axios from "axios";
import LoginForm from "components/Forms/LoginForm";
import { useForm } from "react-hook-form";

const Login = props => {
  const [backendErrors, setBackendErrors] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  let history = useHistory();

  const submitForm = async data => {
    // This line is necessary to display the front end errors
    console.log(data)

    const resp = await axios.post("/loginUser", data)
      
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
      <form
        onSubmit={handleSubmit(submitForm)}
      >
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
