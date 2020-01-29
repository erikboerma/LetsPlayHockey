import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from "mdbreact";
import "../Form.css";

const RegisterForm = ({
  currentStep,
  handleChange,
  response,
  register,
  errors,
  watch,
}) => {
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
                {response && (
                  <span className="invalid">{response}</span>
                )}
              </div>

              <label>Email Address:</label>
              <input
                className="form-control"
                name="email"
                onChange={handleChange}
                ref={register({
                  required: "This Field is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && errors.email.message && (
                <span className="invalid">
                  {errors.email && errors.email.message}
                </span>
              )}

              <label>Username:</label>
              <input
                className="form-control"
                name="username"
                onChange={handleChange}
                ref={register({
                  required: "This Field is Required",
                  minLength: {
                    value: 6,
                    message: "Username must be at least 6 characters in length"
                  }
                })}
              />
              {errors.username && errors.username.message && (
                <span className="invalid">
                  {errors.username && errors.username.message}
                </span>
              )}

              <label>Password:</label>
              <input
                className="form-control"
                name="password"
                onChange={handleChange}
                type="password"
                ref={register({
                  required: "This Field is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters in length"
                  }
                })}
              />
              {errors.password && errors.password.message && (
                <span className="invalid">
                  {errors.password && errors.password.message}
                </span>
              )}

              <label>Confirm Password:</label>
              <input
                className="form-control"
                name="confirmPassword"
                onChange={handleChange}
                type="password"
                ref={register({
                  required: "This Field is Required",
                  validate: value =>
                    value === watch("password") || "Passwords do not match"
                })}
              />
              {errors.confirmPassword && errors.confirmPassword.message && (
                <span className="invalid">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </span>
              )}

              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  id="next-submit"
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
