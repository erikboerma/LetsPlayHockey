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

const positions = ["Offense", "Defense", "Goalie"];
const shot = ["Left Hand", "Right Hand"];
const skillLevel = ["A", "B", "C", "Novice"];

const CreateProfileForm = props => (
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
                  options={mapArray(positions, "position")}
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
                  options={mapArray(skillLevel, "skillLevel")}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <hr />

            <div className="text-center">
              <h4>Availability</h4>
            </div>
            <div className="row">
              <Checkbox
                label="Mon"
                name="Mon"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Tues"
                name="Tues"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Wed"
                name="Wed"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Thurs"
                name="Thurs"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Fri"
                name="Fri"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Sat"
                name="Sat"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Sun"
                name="Sun"
                handleCheckboxChange={props.handleCheckboxChange}
              />
            </div>
            <hr />
            <div className="text-center">
              <h4>Amount of Notice Needed to Play</h4>
            </div>
            <div className="row">
              <Checkbox
                label="Less than 24 hours"
                name="Less than 24 hours"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="24-48 hours"
                name="24-48 hours"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="48+ hours"
                name="48+ hours"
                handleCheckboxChange={props.handleCheckboxChange}
              />
            </div>
            <hr />

            <div className="text-center mb-3">
              <MDBBtn
                type="button"
                gradient="blue"
                rounded
                className="btn-block z-depth-1a"
              >
                Save
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default CreateProfileForm;
