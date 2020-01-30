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
import Fab from "@material-ui/core/Fab";
import CameraIcon from "@material-ui/icons/CameraAlt";

const AddGameModal = props => {
  const [modal, setModal] = useState(false);
  const [avatar, setAvatar] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setAvatar({
      [name]: value
    });
  };

  const submitForm = async event => {
    event.preventDefault();

    const username = { username: props.globalState.username };
    const params = {
      user: username,
      data: avatar
    };
    const resp = await axios.post("/updateUser", params);
    console.log(resp);
    props.setRender(true);
  };

  return (
    <form onSubmit={submitForm}>
      <MDBContainer className="modalButtonMargin">
        <Fab variant="extended" id="update-avatar" onClick={toggle}>
          <CameraIcon />
          Update Photo
        </Fab>
        <MDBModal isOpen={modal} toggle={toggle} position="right">
          <MDBModalHeader toggle={toggle}>Enter Image URL</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="URL to Image Source"
              name="avatar"
              onChange={handleChange}
            ></MDBInput>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggle} size="sm">
              Close
            </MDBBtn>
            <MDBBtn color="primary" size="sm" type="submit" onClick={toggle}>
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(AddGameModal);
