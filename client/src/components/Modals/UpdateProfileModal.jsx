import React, { useState } from "react";
import { withGlobalState } from "react-globally";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import select from "react-select";
import axios from "axios";

const UpdateProfileModal = props => {
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState({});

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const userId = props.user.id;
    const params = {
      userId,
      profile
    }
    const resp = await axios.post("/updateUser", params);
    console.log(resp);
    props.setRender(true)
  };

  return (
    <form onSubmit={handleSubmit}>
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

            <div className="drop-down">
              <h4>Shot:</h4>
              <div className="position-select"></div>
              <select
                className="custom-select"
                placeholder="Shot"
                name="shot"
                value={props.user.shot}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="Left Hand">Left Hand</option>
                <option value="Right Hand">Right Hand</option>
              </select>
            </div>

            <div className="drop-down">
              <h4>Skill Level: </h4>
              <div className="position-select">
                <select
                  className="custom-select"
                  placeholder="Skill Level"
                  name="skillLevel"
                  value={props.user.skillLevel}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="Novice">Novice</option>
                </select>
              </div>
            </div>

            <div className="drop-down">
              <h4>Notice Needed: </h4>
              <div className="position-select">
                <select
                  className="custom-select"
                  placeholder="Notice Needed"
                  onChange={handleChange}
                  value={props.user.notice}
                  name="notice"
                >
                  <option value="">Choose...</option>
                  <option value="1 Day">1 Day</option>
                  <option value="2 Days">2 Days</option>
                  <option value="3 Days">3 Days</option>
                  <option value="4+ Days">4+ Days</option>
                </select>
              </div>
            </div>

            <div className="row"></div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={toggle} size="sm">
              Cancel
            </MDBBtn>
            <MDBBtn color="primary" type="submit" size="sm">
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </form>
  );
};

export default withGlobalState(UpdateProfileModal);
