import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './style.css'

const FormPage = () => {
  return (
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
                  group
                  validate
                  error="wrong"
                  success="right"
                  onChange={e => props.setFirstName(e.target.value)}
                />
                <MDBInput
                  label="Last Name"
                  group
                  validate
                  error="wrong"
                  success="right"
                  onChange={e => props.setLastName(e.target.value)}
                />
                <MDBInput
                  label="Email Address"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={e => props.setEmail(e.target.value)}
                />
                <MDBInput
                  label="Username"
                  group
                  validate
                  error="wrong"
                  success="right"
                  onChange={e => props.setUsername(e.target.value)}
                />
                <MDBInput
                  label="Password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={e => props.setPassword(e.target.value)}
                />
                <MDBInput
                  label="Confirm Password"
                  group
                  type="password"
                  validate
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
};

export default FormPage;