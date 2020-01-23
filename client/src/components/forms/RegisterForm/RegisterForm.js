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

const RegisterForm = props => {
  if (props.currentStep !== 1) {
    return null;
  }

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
                label="First Name"
                error="wrong"
                success="right"
                value={props.user.firstName ? props.user.firstName : null}
                onChange={e =>
                  props.setUser({ ...props.user, firstName: e.target.value })
                }
              />
              <MDBInput
                label="Last Name"
                error="wrong"
                success="right"
                value={props.user.lastName ? props.user.lastName : null}
                onChange={e =>
                  props.setUser({ ...props.user, lastName: e.target.value })
                }
              />
              <MDBInput
                label="Email Address"
                type="email"
                error="wrong"
                success="right"
                value={props.user.email ? props.user.email : null}
                onChange={e =>
                  props.setUser({ ...props.user, email: e.target.value })
                }
              />
              <MDBInput
                label="Username"
                error="wrong"
                success="right"
                value={props.user.username ? props.user.username : null}
                onChange={e =>
                  props.setUser({ ...props.user, username: e.target.value })
                }
              />
              <MDBInput
                label="Password"
                type="password"
                containerClass="mb-0"
                value={props.user.password ? props.user.password : null}
                onChange={e =>
                  props.setUser({ ...props.user, password: e.target.value })
                }
              />
              <MDBInput
                label="Confirm Password"
                type="password"
                containerClass="mb-0"
                value={props.user.passwordConfirm ? props.user.passwordConfirm : null}
                onChange={e =>
                  props.setUser({ ...props.user, passwordConfirm: e.target.value })
                }
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  id="next-submit"
                  onClick={props.nextStep}
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
