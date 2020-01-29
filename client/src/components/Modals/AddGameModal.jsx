import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";

const AddGameModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <MDBContainer className="modalButtonMargin">
      <MDBBtn id="modalButton" gradient="blue" onClick={toggle}>
        Add a game
      </MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
        <MDBModalHeader toggle={toggle}>Add a game</MDBModalHeader>
        <MDBModalBody>
          <MDBInput label="Location">{props.location}</MDBInput>
          <MDBInput label="Date">{props.date}</MDBInput>
          <MDBInput label="Time">{props.time}</MDBInput>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle} size="sm">
            Close
          </MDBBtn>
          <MDBBtn color="primary" size="sm">
            Save changes
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default AddGameModal;
