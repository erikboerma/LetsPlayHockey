import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from "mdbreact";
import Select from "react-select";
import { shot, skillLevel, notice } from "../../../constants";
import "./createProfileForm.css";
import mapSelectArray from '../../../utils';

const CreateProfileForm = props => {
  if (props.currentStep !== 2) {
    return null
  }

  return (
    <MDBContainer>
      <img src={props.rinkImg} alt="bg" className="homeBg" />
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

              <div className="row drop-down">
                <div className="text-center">
                  <h4>Shot</h4>
                </div>
                <div className="position-select">
                  <Select
                    placeholder="Shot"
                    options={mapSelectArray(shot)}
                    // value={props.user.shot ? props.user.shot : null}
                    onChange={e =>
                      props.setUser({ ...props.user, shot: e.label })
                    }
                  />
                </div>
              </div>
              <hr />

              <div className="row drop-down">
                <div className="text-center">
                  <h4>Skill Level</h4>
                </div>
                <div className="position-select">
                  <Select
                    placeholder="Skill Level"
                    options={mapSelectArray(skillLevel)}
                    // value={props.user.skillLevel ? props.user.skillLevel : null}
                    onChange={e =>
                      props.setUser({ ...props.user, skillLevel: e.label })
                    }
                  />
                </div>
              </div>
              <hr />

              <div className="row drop-down">
                <div className="text-center">
                  <h4>Notice Needed</h4>
                </div>
                <div className="position-select">
                  <Select
                    placeholder="Notice Needed"
                    options={mapSelectArray(notice)}
                    // value={props.user.notice ? props.user.notice : null}
                    onChange={e =>
                      props.setUser({ ...props.user, notice: e.label })
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
                    onClick={props.prevStep}
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
                    onClick={props.handleSubmit}
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
