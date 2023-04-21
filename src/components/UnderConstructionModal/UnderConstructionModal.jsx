import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function UnderConstructionModal(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Feature Under Construction</Modal.Title>
      </Modal.Header>
      <Modal.Body>This feature is currently under construction. Please check back later.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UnderConstructionModal;
