import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBNavLink,
  MDBModalFooter
} from "mdbreact";
import "./LoginForm.css";

const LoginForm = ({ submitForm, handleChange }) => {
  return (
    <form className="needs-validation" onSubmit={submitForm} noValidate>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your username"
                  error="wrong"
                  success="right"
                  name="username"
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Invalid Username
                </div>
                <MDBInput
                  label="Your password"
                  type="password"
                  containerClass="mb-0"
                  name="password"
                  onChange={handleChange}
                />
                <div className="text-center mb-3">
                  <MDBBtn
                    type="submit"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1 font-small grey-text d-flex justify-content-end">
                Not a member?
                <MDBNavLink
                  className="font-small d-flex justify-content-end"
                  to="/Register"
                >
                  Register
                </MDBNavLink>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
};

export default LoginForm;
