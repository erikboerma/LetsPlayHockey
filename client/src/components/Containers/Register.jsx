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
  const { register, handleSubmit, errors, watch } = useForm();

  let history = useHistory();

  const submitForm = async (data, step) => {
    console.log(data);

    const resp = await axios.post("/registerUser", data);
    console.log(resp);

    const userCreated = resp.data.message === "user created";
    const usernameTaken = resp.data === "username already taken";

    if (usernameTaken) {
      setBackendErrors("Username Already Taken")
    } else if (userCreated) {
      let _currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      setCurrentStep(_currentStep);
      // history.push("/Login");
    };
  };

  // TODO: Move the steps into the submitform function and 
  // add checks in there. Therefore all front end validation will
  // be handled within that function.
  const nextStep = () => {
    history.push("/Login");
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
          handleSubmit={handleSubmit}
          backendErrors={backendErrors}
          submitForm={submitForm}
        />
        <CreateProfile
          currentStep={currentStep}
          prevStep={prevStep}
          register={register}
          handleSubmit={handleSubmit}
          nextStep={nextStep}
          errors={errors}
        />
      </form>
    </div>
  );
};

export default withGlobalState(Register);
