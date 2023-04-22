import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SubmissionModal(props) {

    const navigate = useNavigate();


    const handleClose = () => {
        props.onClose();
        navigate('/');
    };

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Submission Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thank you for submitting! Click below to be redirected to the Home Page.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SubmissionModal;
