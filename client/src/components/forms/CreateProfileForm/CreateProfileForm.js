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
import Checkbox from "../../Checkbox/Checkbox";
import "./createProfileForm.css";

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
            <div className="text-center">
              <h4>Position</h4>
            </div>
            <div className="row">
              <Checkbox
                label="Offense"
                name="Offense"
                onChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Defense"
                name="Defense"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Goalie"
                name="Goalie"
                handleCheckboxChange={props.handleCheckboxChange}
              />
            </div>
            <hr />
            <div className="text-center">
              <h4>Shot</h4>
            </div>
            <div className="row">
              <Checkbox
                label="Right Hand"
                name="Right Hand"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Left Hand"
                name="Left Hand"
                handleCheckboxChange={props.handleCheckboxChange}
              />
            </div>
            <hr />
            <div className="text-center">
              <h4>Skill Level</h4>
            </div>
            <div className="row">
              <Checkbox
                label="A"
                name="A"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="B"
                name="B"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="C"
                name="C"
                handleCheckboxChange={props.handleCheckboxChange}
              />
              <Checkbox
                label="Novice"
                name="Novice"
                handleCheckboxChange={props.handleCheckboxChange}
              />
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
