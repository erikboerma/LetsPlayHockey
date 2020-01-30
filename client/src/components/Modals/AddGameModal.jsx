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
import Date from "../Pickers/Date";
import Time from "../Pickers/Time";

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

  const handleSubmit = async event => {
    event.preventDefault();

    const team = { teamId: props.teamId };
    const resp = await axios.post("/createGame", {
      team,
      game
    });
    console.log(resp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer className="modalButtonMargin">
        <IconButton variant="extended" className="icon-button" onClick={toggle}>
          <AddIcon />
          <span className="icon-text">Create Game</span>
        </IconButton>
        <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
          <MDBModalHeader toggle={toggle}>Add a game</MDBModalHeader>
          <MDBModalBody>
            <MDBInput label="Location" name="location" onChange={handleChange} />
            <Date game={game} />
            <Time game={game} />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={handleSubmit}
              size="sm"
              type="submit"
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(AddGameModal);
