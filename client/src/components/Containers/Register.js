import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withGlobalState } from "react-globally";
import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import CreateProfile from "../Forms/CreateProfileForm/CreateProfileForm";
import HorizontalLinearStepper from "../Stepper";
import axios from "axios";

const MasterForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [position, setPosition] = useState(null);
  const [shot, setShot] = useState(null);
  const [skillLevel, setSkillLevel] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [notice, setNotice] = useState();

  let history = useHistory();

  // Adjust this function to account for the state of the register
  // form as well. Will clean up and refactor.
  const handleChange = selectedOption => {
    // These conditions will check for single options
    if (selectedOption.state) {
      if (selectedOption.state === "position") {
        setPosition(selectedOption.label);
      } else if (selectedOption.state === "shot") {
        setShot(selectedOption.label);
      } else if (selectedOption.state === "skillLevel") {
        setSkillLevel(selectedOption.label);
      } else if (selectedOption.state === "notice") {
        setNotice(selectedOption.label);
      }
    }
    // These conditions will check for multi options
    else {
      selectedOption.forEach(data => {
        setAvailability([...availability, data]);
      });
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios
      .post("/registerUser", {
        firstName,
        lastName,
        email,
        username,
        password,
        position,
        shot,
        skillLevel,
        notice
      })
      .then(async resp => {
        console.log(resp);
        const userCreated = resp.data.message === "user created";
        const userId = resp.data.userId;

        await axios
          .post("/test", {
            userId,
            availability
          })
          .then(resp => {
            console.log(resp);

            if (userCreated) {
              history.push("/Login");
            }
          });
      });
  };

  const nextStep = () => {
    let _currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setCurrentStep(_currentStep);
  };

  const prevStep = () => {
    // Fill in the information that is still in state at this point
    // if the back button is clicked
    let _currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(_currentStep);
  };

  return (
    <div className="container">
      <HorizontalLinearStepper
        currentStep={currentStep}
      />
      <form onSubmit={handleSubmit}>
        <RegisterForm
          currentStep={currentStep}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
          setPasswordConfirm={setPasswordConfirm}
          nextStep={nextStep}
        />
        <CreateProfile
          currentStep={currentStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
        />
      </form>
    </div>
  );
};

export default withGlobalState(MasterForm);
