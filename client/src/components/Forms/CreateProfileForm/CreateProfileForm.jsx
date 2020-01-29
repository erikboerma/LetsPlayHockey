import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import Select from "react-select";
import { shot, skillLevel, notice } from "../../../constants";
import "../Form.css";
import mapSelectArray from "utils";

const CreateProfileForm = ({
  user,
  setUser,
  currentStep,
  prevStep,
  handleSubmit
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
                  <Select
                    name="shot"
                    placeholder="Shot"
                    options={mapSelectArray(shot)}
                    // value={user.shot ? user.shot : null}
                    onChange={e =>
                      setUser({ ...user, shot: e.label })
                    }
                  />
                </div>
              </div>

              <hr />

              <div className="drop-down">
                <h5>Skill Level</h5>
                <div className="position-select">
                  <Select
                    placeholder="Skill Level"
                    options={mapSelectArray(skillLevel)}
                    // value={user.skillLevel ? user.skillLevel : null}
                    onChange={e =>
                      setUser({ ...user, skillLevel: e.label })
                    }
                  />
                </div>
              </div>
              <hr />

              <div className="drop-down">
                <h5>Notice Needed</h5>
                <div className="position-select">
                  <Select
                    placeholder="Notice Needed"
                    options={mapSelectArray(notice)}
                    // value={user.notice ? user.notice : null}
                    onChange={e =>
                      setUser({ ...user, notice: e.label })
                    }
                  />
                </div>
              </div>
              <hr />

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
                    onClick={handleSubmit}
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
