import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBInput
} from "mdbreact";
import "./RegisterForm.css";

const RegisterForm = ({ user, currentStep, nextStep, handleInputChange }) => {
  if (currentStep !== 1) {
    return null;
  }

  return (
    <MDBContainer className="wrapper">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Register</strong>
                </h3>
              </div>

              <MDBInput
                className="register-input form-control"
                label="Email Address"
                type="email"
                name="email"
                value={user.email ? user.email : ""}
                onChange={handleInputChange}
              />
              <MDBInput
                className="register-input form-control"
                type="text"
                label="Username"
                name="username"
                value={user.username ? user.username : ""}
                onChange={handleInputChange}
              />
              <MDBInput
                className="register-input form-control"
                label="Password"
                type="password"
                name="password"
                value={user.password ? user.password : ""}
                onChange={handleInputChange}
              />
              <MDBInput
                className="register-input form-control"
                label="Confirm Password"
                type="password"
                name="passwordConfirm"
                value={user.passwordConfirm ? user.passwordConfirm : ""}
                onChange={handleInputChange}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  id="next-submit"
                  onClick={nextStep}
                >
                  Next
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterForm;
