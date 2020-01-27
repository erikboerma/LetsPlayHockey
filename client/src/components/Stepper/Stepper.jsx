import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const getSteps = () => {
  return ["User Information", "User Profile"];
}

const HorizontalLinearStepper = props => {
  const steps = getSteps();

  return (
    <>
      <Stepper activeStep={props.currentStep - 1}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
}

export default HorizontalLinearStepper;