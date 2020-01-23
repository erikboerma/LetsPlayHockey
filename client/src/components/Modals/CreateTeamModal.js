import React, { useState } from "react";
import { withGlobalState } from "react-globally";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import axios from "axios";

const CreateTeamModal = props => {
  const [modal, setModal] = useState(false);
  const [team, setTeam] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/createTeam", {
      userId: props.globalState.userId,
      team});
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer>
        <MDBBtn gradient="blue" onClick={toggle}>
          Create a Team
        </MDBBtn>
        <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
          <MDBModalHeader toggle={toggle}>Create a Team</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Team Name"
              onChange={e =>
                setTeam({
                  ...team,
                  teamName: e.target.value
                })
              }
            >
            </MDBInput>
            <MDBInput
              label="Offense Needed"
              onChange={e =>
                setTeam({
                  ...team,
                  offense: e.target.value
                })
              }
            >
            </MDBInput>
            <MDBInput
              label="Defense Needed"
              onChange={e =>
                setTeam({
                  ...team,
                  defense: e.target.value
                })
              }
            >
            </MDBInput>
            <MDBInput
              label="Goalies Needed"
              onChange={e =>
                setTeam({
                  ...team,
                  goalies: e.target.value
                })
              }
            >
            </MDBInput>
            <MDBInput
              label="Total Players Needed"
              onChange={e =>
                setTeam({
                  ...team,
                  totalPlayers: e.target.value
                })
              }
            >
            </MDBInput>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn color="primary" size="sm" type="submit" onClick={toggle}>
              Save Team
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(CreateTeamModal);
