import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import RegisterForm from "components/Forms/RegisterForm";
import CreateProfile from "components/Forms/CreateProfileForm/";
import HorizontalLinearStepper from "components/Stepper/Stepper";
import axios from "axios";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [user, setUser] = useState({});

  let history = useHistory();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

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

  // TODO: Look for a cleaner handleInputChange function
  return (
    <div className="wrapper container">
      <HorizontalLinearStepper currentStep={currentStep} />
      <form onSubmit={handleSubmit}>
        <RegisterForm
          user={user}
          currentStep={currentStep}
          nextStep={nextStep}
          handleInputChange={handleInputChange}
        />
        <CreateProfile
          user={user}
          setUser={setUser}
          currentStep={currentStep}
          prevStep={prevStep}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
};

export default withGlobalState(Register);
