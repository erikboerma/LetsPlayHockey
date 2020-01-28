import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import CreateProfile from "../Forms/CreateProfileForm/CreateProfileForm";
import HorizontalLinearStepper from "../Stepper/Stepper";
import axios from "axios";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState({});

  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const resp = await axios.post("/registerUser", user);
    console.log(resp);
    const userCreated = resp.data.message === "user created";
    if (userCreated) {
      history.push("/Login");
    };
  };

  const nextStep = () => {
    let _currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setCurrentStep(_currentStep);
  };

  const prevStep = () => {
    let _currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(_currentStep);
  };

  // TODO: Look for a cleaner handleChange function
  return (
    <div className="container">
      <HorizontalLinearStepper currentStep={currentStep} />
      <form onSubmit={handleSubmit}>
        <RegisterForm
          currentStep={currentStep}
          user={user}
          setUser={setUser}
          nextStep={nextStep}
        />
        <CreateProfile
          currentStep={currentStep}
          handleSubmit={handleSubmit}
          user={user}
          setUser={setUser}
          prevStep={prevStep}
        />
      </form>
    </div>
  );
};

export default withGlobalState(Register);
