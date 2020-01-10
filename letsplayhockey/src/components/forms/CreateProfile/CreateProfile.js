import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './style.css'

const CreateProfile = () => {
  return (
    <MDBContainer>
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
              <MDBInput
                label="Position"
                group
                type
                validate
                error
                success
              />
              <MDBInput
                label="Right or Left Handed"
                group
                type
                validate
                containerClass
              />
              <div className="text-center">
              <h4>Availablity</h4>
              </div>
              <div className="row">
              <MDBInput
                label="Sun"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
                label="Mon"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
                label="Tues"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
              label="Wed"
              group
              type="checkbox"
              validate
              containerClass
            />
            <MDBInput
                label="Thurs"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
                label="Fri"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
                label="Sat"
                group
                type="checkbox"
                validate
                containerClass
              />
              </div>
              <div className="text-center">
              <h4>Skill Level</h4>
              </div>
              <div className="row">
              <MDBInput
                label="A"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
                label="B"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
                label="C"
                group
                type="checkbox"
                validate
                containerClass
              />
              <MDBInput
              label="Novice"
              group
              type="checkbox"
              validate
              containerClass
            />
            
              </div>
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
};

export default CreateProfile;