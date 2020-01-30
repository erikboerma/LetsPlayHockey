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
import "./modalForms.css";
import Date from "../Pickers/Date";
import Time from "../Pickers/Time";
import "./Modal.css";

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
    props.setRender(true);
  };

  return (

    <form onSubmit={handleSubmit}>
      <MDBContainer className="modalButtonMargin" id="createGameContainer">
        <IconButton variant="extended" className="icon-button" onClick={toggle}>
          <AddIcon />
          <span className="icon-text">Create Game</span>
        </IconButton>
        <MDBModal isOpen={modal} toggle={toggle} fullHeight position="right">
          <MDBModalHeader toggle={toggle}>Add a game</MDBModalHeader>
          <MDBModalBody>
            <label>
              Enter Location:
              <MDBInput name="location" onChange={handleChange} />
            </label>
            <Date game={game} onChange={handleChange} />
            <Time game={game} onChange={handleChange} />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={toggle} size="sm" type="submit">
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(AddGameModal);
