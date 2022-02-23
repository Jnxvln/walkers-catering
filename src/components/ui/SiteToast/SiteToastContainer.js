import './SiteToastContainer.scss'
import React from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer'
import SiteToast from './SiteToast'
import { useSelector } from 'react-redux'

function SiteToastContainer() {
  const toasts = useSelector((state) => state.toasts.messages)

  /* TODO: Currently, added toasts are never removed (only hidden if they have delay)
  consider implementing setTimeout to remove from state after some time */

  return (
    <ToastContainer id="site-toast-container" position="top-center">
      {toasts &&
        toasts.length > 0 &&
        toasts.map((msg, index) => (
          <SiteToast
            key={index}
            title={msg.title}
            type={msg.type}
            message={msg.message}
            delay={msg.delay}
          />
        ))}
    </ToastContainer>
  )
}

export default SiteToastContainer
