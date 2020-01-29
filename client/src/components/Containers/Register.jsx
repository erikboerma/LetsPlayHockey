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
  const [backendErrors, setBackendErrors] = useState();
  const { register, handleSubmit, errors, watch } = useForm();

  let history = useHistory();

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      [name]: value
    });
  };

  // TODO: Use one function on registerUser route
  // TODO: And createprofile submit on updateUser route
  const submitForm = async (data, step) => {
    console.log(data);

    const resp = await axios.post("/registerUser", {
      username: user,
      data
    }
    );
    console.log(resp);

    
    const userCreated = resp.data.message === "user created";
    const usernameTaken = resp.data === "username already taken";

    if (usernameTaken) {
      setBackendErrors("Username Already Taken")
    } else if (userCreated) {
      let _currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      setCurrentStep(_currentStep);
      if (_currentStep === 3) {
        history.push("/Login");
      };
    };
  };

  // TODO: Move the steps into the submitform function and
  // add checks in there. Therefore all front end validation will
  // be handled within that function.
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
          submitForm={submitForm}
          backendErrors={backendErrors}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          watch={watch}
          handleChange={handleChange}
        />
        <CreateProfile
          currentStep={currentStep}
          submitForm={submitForm}
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
