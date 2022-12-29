import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalWindow.css";
import React, { useState } from "react";
import { Modal, Button, CloseButton } from "react-bootstrap";

function ModalWIndow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleConfirm = () => {
    setShow(false);
    props.callback();
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <i class="fas fa-sync"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          {/* <CloseButton variant="white" /> */}
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          This will reset the scores and all unsaved progress will be lost!
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWIndow;
