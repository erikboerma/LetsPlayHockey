import React, { useState } from "react";
// import { Button, Modal } from 'react-bootstrap';

// function showModal() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);




//     return (

<div class="modal fade" id="centralModalSm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">

  <!-- Change class .modal-sm to change the size of the modal -->
  <div class="modal-dialog modal-sm" role="document">


    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title w-100" id="myModalLabel">Modal title</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-sm">Save changes</button>
      </div>
    </div>
  </div>
</div>

//         <>
//             <Button variant="primary" onClick={handleShow}>
//                 Launch demo modal
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                 </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//                 </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// };

export default showModal;