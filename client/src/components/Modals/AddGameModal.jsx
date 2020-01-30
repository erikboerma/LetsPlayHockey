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
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Time from "components/Pickers/Time";

const AddGameModal = props => {
  const [modal, setModal] = useState(false);
  const [game, setGame] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setGame({
      [name]: value
    });
  };

  const submitGame = async event => {
    event.preventDefault();

    const TeamId = props.teamId;
    const resp = await axios.post("/createGame", {
      TeamId,
      game
    });
    console.log(resp);
  };

  return (
    <form onSubmit={submitGame}>
      <MDBContainer className="modalButtonMargin">
        <IconButton variant="extended" className="icon-button" onClick={toggle}>
          <AddIcon />
          <span className="icon-text">Create Game</span>
        </IconButton>
        <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
          <MDBModalHeader toggle={toggle}>Add a game</MDBModalHeader>
          <MDBModalBody>
            <Time />
            {/* <MDBInput label="Location" name="location" onChange={handleChange}>
              {props.location}
            </MDBInput>
            <MDBInput label="Date" name="date" onChange={handleChange}>
              {props.date}
            </MDBInput>
            <MDBInput label="Time" name="time" onChange={handleChange}>
              {props.time}
            </MDBInput> */}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn color="primary" size="sm" type="submit">
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(AddGameModal);
