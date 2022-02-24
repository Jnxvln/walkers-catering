import React from 'react'
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap'

export default function SimpleModal({
  show,
  title,
  message,
  confirmButtonText,
  cancelButtonText,
  handleCancelModal,
  handleConfirmModal,
}) {
  return (
    <Modal show={show} onHide={handleCancelModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancelModal}>
          {cancelButtonText}
        </Button>
        <Button variant="primary" onClick={handleConfirmModal}>
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
