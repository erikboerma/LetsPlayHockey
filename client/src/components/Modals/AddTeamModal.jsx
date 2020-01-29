import React, { useState } from "react";
import {withGlobalState} from "react-globally";
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

const AddTeamModal = props => {
  const [modal, setModal] = useState(false);
  const [game, setGame] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await axios.post("/createGame", {
      userId: props.globalState.userId,
      game
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer className="modalButtonMargin">
        <MDBBtn id="modalButton" gradient="blue" onClick={toggle}>
          Add a game
        </MDBBtn>
        <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
          <MDBModalHeader toggle={toggle}>Add a game</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Team Name"
              onChange={e =>
                setGame({
                  ...game,
                  teamName: e.target.value
                })
              }
            ></MDBInput>
            <MDBInput
              label="Rink"
              onChange={e =>
                setGame({
                  ...game,
                  location: e.target.value
                })
              }
            ></MDBInput>
            <MDBInput
              label="Date"
              onChange={e =>
                setGame({
                  ...game,
                  date: e.target.value
                })
              }
            ></MDBInput>
            <MDBInput
              label="Time"
              onChange={e =>
                setGame({
                  ...game,
                  time: e.target.value
                })
              }
            ></MDBInput>
            <MDBInput
              label="Players Needed"
              onChange={e =>
                setGame({
                  ...game,
                  playersNeeded: e.target.value
                })
              }
            ></MDBInput>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              size="sm"
              type="submit"
              onClick={handleSubmit}
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(AddTeamModal);
