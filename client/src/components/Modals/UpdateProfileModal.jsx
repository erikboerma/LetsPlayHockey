import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import Select from "react-select";

const UpdateProfileModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <MDBContainer className="modalButtonMargin">
      <MDBBtn id="modalButton" gradient="blue" onClick={toggle}>
        Edit Profile
      </MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>Update Profile</MDBModalHeader>
        <MDBModalBody className="mx-4">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Update Profile</strong>
            </h3>
          </div>
          <hr />

          <div className="row drop-down">
            <div className="text-center">
              <h4>Shot: </h4>
            </div>
            <div className="position-select">
              <Select
                placeholder="Shot"
                // options={mapSelectArray(shot, "shot")}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <hr />

          <div className="row drop-down">
            <div className="text-center">
              <h4>Skill Level: </h4>
            </div>
            <div className="position-select">
              <Select
                placeholder="Skill Level"
                // options={mapSelectArray(skillLevel, "skillLevel")}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <hr />

          <div className="row drop-down">
            <div className="text-center">
              <h4>Notice Needed: </h4>
            </div>
            <div className="position-select">
              <Select
                placeholder="Notice Needed"
                // options={mapSelectArray(notice, "notice")}
                onChange={props.handleChange}
              />
            </div>
          </div>
          <hr />

          <div className="row"></div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={toggle} size="sm">
            Cancel
          </MDBBtn>
          <MDBBtn color="primary" size="sm">
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default UpdateProfileModal;
