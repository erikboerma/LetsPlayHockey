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

const CreateTeamModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <MDBContainer>
        <MDBBtn gradient="blue" onClick={toggle}>
          Create a Team
        </MDBBtn>
        <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
          <MDBModalHeader toggle={toggle}>Create a Team</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Team Name"
              onChange={e => props.setTeamName(e.target.value)}
            >
              {props.teamName}
            </MDBInput>
            <MDBInput
              label="Offense Needed"
              onChange={e => props.setOffense(e.target.value)}
            >
              {props.offense}
            </MDBInput>
            <MDBInput
              label="Defense Needed"
              onChange={e => props.setDefense(e.target.value)}
            >
              {props.defense}
            </MDBInput>
            <MDBInput
              label="Goalies Needed"
              onChange={e => props.setGoalies(e.target.value)}
            >
              {props.goalies}
            </MDBInput>
            <MDBInput
              label="Total Players Needed"
              onChange={e => props.setTotalPlayers(e.target.value)}
            >
              {props.totalPlayers}
            </MDBInput>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn color="primary" size="sm" type="submit">
              Save Team
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default CreateTeamModal;
