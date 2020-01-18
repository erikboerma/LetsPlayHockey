import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import "./loginForm.css";

const LoginForm = props => (
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
            <form onSubmit={props.handleSubmit}>
              <MDBInput
                label="Your username"
                error="wrong"
                success="right"
                onChange={e => props.setUsername(e.target.value)}
              />
              <MDBInput
                label="Your password"
                type="password"
                containerClass="mb-0"
                onChange={e => props.setPassword(e.target.value)}
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={props.submitForm}
                >
                  Sign in
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
          <MDBModalFooter className="mx-5 pt-3 mb-1">
            <p className="font-small grey-text d-flex justify-content-end">
              Not a member?
              <a href="#!" className="blue-text ml-1">
                Sign Up
              </a>
            </p>
          </MDBModalFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default LoginForm;
