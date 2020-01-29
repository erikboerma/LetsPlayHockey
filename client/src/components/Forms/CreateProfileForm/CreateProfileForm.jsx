import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import "../Form.css";

const CreateProfileForm = ({
  currentStep,
  prevStep,
  handleSubmit,
  register,
  errors,
  nextStep
}) => {
  if (currentStep !== 2) {
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
                  <strong>Create Profile</strong>
                </h3>
              </div>
              <hr />

              <div className="drop-down">
                <h5>Shot</h5>
                <div className="position-select">
                  <select
                    className="custom-select"
                    name="shot"
                    ref={register({
                      required: true
                    })}>
                    <option value="">Choose...</option>
                    <option value="Left Hand">Left Hand</option>
                    <option value="Right Hand">Right Hand</option>
                  </select>
                </div>
              </div>
              <hr />
              {errors.shot && (
                <span className="invalid">
                  Please Select an Option
                </span>
              )}

              <div className="drop-down">
                <h5>Skill Level</h5>
                <div className="position-select">
                  <select
                    className="custom-select"
                    name="skillLevel"
                    ref={register({
                      required: true
                    })}>
                    <option value="">Choose...</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="Novice">Novice</option>
                  </select>
                </div>
              </div>
              <hr />
              {errors.skillLevel && (
                <span className="invalid">
                  Please Select an Option
                </span>
              )}

              <div className="drop-down">
                <h5>Notice</h5>
                <div className="position-select">
                  <select
                    className="custom-select"
                    name="notice"
                    ref={register({
                      required: true
                    })}>
                    <option value="">Choose...</option>
                    <option value="1 Day">1 Day</option>
                    <option value="2 Days">2 Days</option>
                    <option value="3 Days">3 Days</option>
                    <option value="4+ Days">4+ Days</option>
                  </select>
                </div>
              </div>
              <hr />
              {errors.notice && (
                <span className="invalid">
                  Please Select an Option
                </span>
              )}

              <div className="row">
                <div className="text-left mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={prevStep}
                  >
                    Back
                  </MDBBtn>
                </div>

                <div className="text-right mb-3">
                  <MDBBtn
                    type="submit"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={handleSubmit(nextStep)}
                  >
                    Register
                  </MDBBtn>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateProfileForm;
