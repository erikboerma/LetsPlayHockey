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

  const handleChange = selectedOption => {
    props.setUser({selectedOption}.value)
  }

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
                    onChange={handleChange}
                    // onChange={props.setUser({ ...props.user, selectedOption.value})}
                    // onChange={e =>
                    //   console.log(e.target.value)
                    //   // props.setUser({ ...props.user, shot: e.target.value })
                    // }
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
                    options={mapSelectArray(skillLevel, "skillLevel")}
                    onChange={e =>
                      props.setUser({ ...props.user, skillLevel: e.target.value.value })
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
                    options={mapSelectArray(notice, "notice")}
                    onChange={e =>
                      props.setUser({ ...props.user, notice: e.target.value.value })
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
