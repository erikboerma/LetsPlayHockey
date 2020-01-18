import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

const ModalPage = props => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    return (
        <MDBContainer>
            <MDBBtn onClick={toggle}>Edit Profile</MDBBtn>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Update Profile</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput label="position">
                    {props.position}
                    </MDBInput>
                    <MDBInput label="shot">
                    {props.shot}
                    </MDBInput>
                    <MDBInput label="skill">
                    {props.skill}
                    </MDBInput>
                    <MDBInput label="notice">
                    {props.notice}
                    </MDBInput>
        </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );

}

export default ModalPage;