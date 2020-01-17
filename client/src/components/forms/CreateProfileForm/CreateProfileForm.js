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
import "./style.css";

<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js

const CreateProfile = () => {
  return (
    <MDBContainer>
      <img src={rinkLine} alt="bg" className="rinkLine" />
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Create Profile</strong>
                </h3>
              </div>
              <MDBInput
                label="Phone Number"
                group
                type
                validate
                error
                success
              />
              <div className="text-center">
=======
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
            <MDBInput label="Phone Number" group validate />
            <div className="text-center">
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
              <h4>Position</h4>
            </div>
            <div className="row">
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Offence"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Defense"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Goalie"
                group
                type="checkbox"
                validate
              />
            </div>
            <hr />
            <div className="text-center">
              <h4>Shot</h4>
            </div>
            <div className="row">
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Right Hand"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Left Hand"
                group
                type="checkbox"
                validate
              />
            </div>
            <hr />
            <div className="text-center">
              <h4>Skill Level</h4>
            </div>
            <div className="row">
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="A"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="B"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="C"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
              label="Novice"
              group
              type="checkbox"
              validate
              containerClass
            />
            
              </div><hr/>
              <div className="text-center">
=======
                className="checkbox"
                label="Novice"
                group
                type="checkbox"
                validate
              />
            </div>
            <hr />
            <div className="text-center">
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
              <h4>Availability</h4>
            </div>
            <div className="row">
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Sun"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Mon"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Tues"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
              label="Wed"
              group
              type="checkbox"
              validate
              containerClass
            />
            <MDBInput
            className="checkbox"
=======
                className="checkbox"
                label="Wed"
                group
                type="checkbox"
                validate
              />
              <MDBInput
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Thurs"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Fri"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Sat"
                group
                type="checkbox"
                validate
              />
            </div>
            <hr />
            <div className="text-center">
              <h4>Amount of Notice Needed to Play</h4>
            </div>
            <div className="row">
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="Less than 24 hours"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="24-48 hours"
                group
                type="checkbox"
                validate
              />
              <MDBInput
<<<<<<< HEAD:client/src/components/forms/CreateProfile/CreateProfile.js
              className="checkbox"
=======
                className="checkbox"
>>>>>>> 7781a099035e28e9b3a0672308882e46c9696e7e:client/src/components/forms/CreateProfileForm/CreateProfileForm.js
                label="48+ hours"
                group
                type="checkbox"
                validate
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
                Confirm
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default CreateProfileForm;
