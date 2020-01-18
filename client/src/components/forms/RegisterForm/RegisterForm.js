import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";
import "./registerForm.css";

const RegisterForm = props => (
  <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody className="mx-4">
            <div className="text-center">
              <h3 className="dark-grey-text mb-5">
                <strong>Register</strong>
              </h3>
            </div>
            <form onSubmit={props.submitForm}>
              <MDBInput
                label="First Name"
                error="wrong"
                success="right"
                onChange={e => props.setFirstName(e.target.value)}
              />
              <MDBInput
                label="Last Name"
                error="wrong"
                success="right"
                onChange={e => props.setLastName(e.target.value)}
              />
              <MDBInput
                label="Email Address"
                type="email"
                error="wrong"
                success="right"
                onChange={e => props.setEmail(e.target.value)}
              />
              <MDBInput
                label="Username"
                error="wrong"
                success="right"
                onChange={e => props.setUsername(e.target.value)}
              />
              <MDBInput
                label="Password"
                type="password"
                containerClass="mb-0"
                onChange={e => props.setPassword(e.target.value)}
              />
              <MDBInput
                label="Confirm Password"
                type="password"
                containerClass="mb-0"
                onChange={e => props.setPasswordConfirm(e.target.value)}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default RegisterForm;
