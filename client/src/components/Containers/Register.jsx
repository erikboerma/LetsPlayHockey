import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import RegisterForm from "components/Forms/RegisterForm";
import CreateProfile from "components/Forms/CreateProfileForm/";
import HorizontalLinearStepper from "components/Stepper/Stepper";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState();
  const [response, setResponse] = useState();
  const { register, handleSubmit, errors, watch } = useForm();

  let history = useHistory();

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const submitForm = async data => {
    console.log(data);

    const resp = await axios.post("/registerUser", data);
    console.log(resp);

    const userCreated = resp.data.message === "user created";
    const usernameTaken = resp.data === "username already taken";

    if (usernameTaken) {
      setResponse("Username Already Taken")
    } else if (userCreated) {
      let _currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      setCurrentStep(_currentStep);
    };
  };

  const updateForm = async data => {
    console.log(data);

    const resp = await axios.post("/updateUser", {
      user,
      data
    });
    console.log(resp)

    const userUpdated = resp.data.message === "user updated";
    if (userUpdated) {
      history.push("/Login");
    };
  };

  const prevStep = () => {
    let _currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(_currentStep);
  };

  return (
    <div className="wrapper container">
      <HorizontalLinearStepper currentStep={currentStep} />
      <form onSubmit={handleSubmit(submitForm)}>
        <RegisterForm
          currentStep={currentStep}
          handleChange={handleChange}
          response={response}
          register={register}
          errors={errors}
          watch={watch}
        />
      </form>
      <form onSubmit={handleSubmit(updateForm)}>
        <CreateProfile
          currentStep={currentStep}
          handleChange={handleChange}
          prevStep={prevStep}
          register={register}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default withGlobalState(Register);
