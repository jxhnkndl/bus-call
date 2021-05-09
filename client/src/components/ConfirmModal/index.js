// Import dependencies
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Create and export Modal component
export default function ConfirmModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Hey! Virtual tour manager here!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant={props.confirm.color} onClick={props.handleConfirm}>
          {props.confirm.message}
        </Button>
        <Button variant={props.cancel.color} onClick={props.handleCancel}>
          {props.cancel.message}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
