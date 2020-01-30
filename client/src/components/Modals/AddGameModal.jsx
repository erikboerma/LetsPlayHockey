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
import Picker from "components/Pickers/Picker";
import "./Modal.css";

import "date-fns";

const AddGameModal = props => {
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState();
  const [selectedDate, setSelectedDate] = useState(Date("2014-08-18T21:11:54"));

  const toggle = () => {
    setModal(!modal);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const userId = props.globalState.userId;
    const teamId = props.teamId;
    const params = {
      userId,
      teamId,
      location,
      datetime: selectedDate,
    };
    const resp = await axios.post("/createGame", params);
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
              <MDBInput name="location" onChange={e => setLocation(e.target.value)} />
            </label>
            <Picker date={selectedDate} handleDateChange={handleDateChange} />
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
