import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn
} from "mdbreact";
import Checkbox from "../../Checkbox/Checkbox";
import Select from "react-select";
import { position, shot, skillLevel, days, notice } from "../../../constants";
import "./createProfileForm.css";

const mapArray = (arr, state) => {
  let newArr = [];
  arr.map((key, i) => {
    newArr.push({
      state: state,
      label: key,
      value: i
    });
  });
  return newArr;
};

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
                  <h4>Position</h4>
                </div>
                <div className="position-select">
                  <Select
                    placeholder="Position"
                    options={mapArray(position, "position")}
                    onChange={props.handleChange}
                  />
                </div>
              </div>
              <hr />

              <div className="row drop-down">
                <div className="text-center">
                  <h4>Shot</h4>
                </div>
                <div className="position-select">
                  <Select
                    placeholder="Shot"
                    options={mapArray(shot, "shot")}
                    onChange={props.handleChange}
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
                    options={mapArray(skillLevel, "skillLevel")}
                    onChange={props.handleChange}
                  />
                </div>
              </div>
              <hr />

              <div className="row drop-down">
                <div className="text-center">
                  <h4>Availability</h4>
                </div>
                <div className="position-select">
                  <Select
                    placeholder="Availability"
                    options={mapArray(days, "availability")}
                    onChange={props.handleChange}
                    isMulti
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
                    options={mapArray(notice, "notice")}
                    onChange={props.handleChange}
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
