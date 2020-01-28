import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBNavLink,
  MDBModalFooter
} from "mdbreact";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

const LoginForm = ({ submitForm }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
    >
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
                <label>Username:</label>
                <input
                  className="form-control"
                  name="username"
                  ref={register({ required: true })}
                />
                {errors.username && (
                  <span className="invalid">Username is Required</span>
                )}
                <label>Password:</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  ref={register({ required: true })}
                />
                {errors.password && (
                  <span className="invalid">Password is Required</span>
                )}
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
