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
  const [backendErrors, setBackendErrors] = useState();
  const { register, handleSubmit, errors, setErrors, watch } = useForm();

  let history = useHistory();

  const submitForm = async data => {
    console.log(data);

    const resp = await axios.post("/registerUser", data);

    console.log(resp);
    const userCreated = resp.data.message === "user created";
    const usernameTaken = resp.data === "username already taken";
    
    if (usernameTaken) {
      setBackendErrors("Username Already Taken")
    } else if (userCreated) {
      history.push("/Login");
    };
  };

  const nextStep = () => {
    if (!errors) {
      let _currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      setCurrentStep(_currentStep);
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
          nextStep={nextStep}
          register={register}
          errors={errors}
          watch={watch}
          backendErrors={backendErrors}
        />
        <CreateProfile
          currentStep={currentStep}
          prevStep={prevStep}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default withGlobalState(Register);
