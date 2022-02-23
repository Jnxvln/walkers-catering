import React, { useState } from 'react'
import { Toast } from 'react-bootstrap'
import './SiteToast.scss'

function SiteToast({ title, message, type, delay }) {
  const [show, setShow] = useState(true)

  if (delay) {
    return (
      <Toast
        className="site-toast"
        onClose={() => setShow(false)}
        show={show}
        delay={delay}
        autohide
      >
        <Toast.Header className={`toast-header-${type}`}>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body className="toast-message">{message}</Toast.Body>
      </Toast>
    )
  } else {
    return (
      <Toast
        className="site-toast"
        onClose={() => setShow(false)}
        show={show}
        autohide
      >
        <Toast.Header className={`toast-header-${type}`}>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body className="toast-message">{message}</Toast.Body>
      </Toast>
    )
  }
}

export default SiteToast
