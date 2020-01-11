<<<<<<< HEAD
// import RegisterForm from '../forms/RegisterForm/RegisterForm';
import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';


function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("username is " + email);
        console.log("password is " + password);
    };

    return (
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
                  label="Your email"
                  group
                  type="email"
                  name="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={e => setEmail(e.target.value)}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  name="password"
                  validate
                  containerClass="mb-0"
                  onChange={e => setPassword(e.target.value)}
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
  
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
  
                  or Sign in with:
                </p>
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
}
=======
import React, { useState } from "react";
import RegisterForm from '../forms/RegisterForm/RegisterForm';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [messageFromServer, setMessageFromServer] = useState();

  const handleSubmit = async (event) => {
    console.log("test");
    event.preventDefault();

    const response = await axios.post(
      'http://localhost:3000/registerUserTest',
      {
        email,
        username,
        password
      }
    );
    console.log(response.data.message)
  };

  return (
    <RegisterForm
      setEmail={setEmail}
      setUsername={setUsername}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
      submitForm={handleSubmit}
    >
    </RegisterForm>
  );
};
>>>>>>> 4622f89ec1759b5de4efb053746f8a5c7787a179

export default Register;
