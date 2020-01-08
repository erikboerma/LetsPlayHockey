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
              <MDBInput
                label="Email Address"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Username"
                group
                type
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Confirm Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Register
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;