import './Login.scss'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Form, FloatingLabel } from 'react-bootstrap'
import { createToast } from '../../../features/toasts/toastSlice'
// import axios from 'axios'

import { useDispatch } from 'react-redux'
import { loginAsync } from '../../../features/auth/authSlice'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginAsync({ email: state.email, password: state.password }))
      .then((action) => {
        if (!action.payload)
          // TODO: Handle network error as well
          dispatch(
            createToast({
              title: 'Login Error',
              message: 'Incorrect email or password',
              type: 'ERROR',
              delay: 4000,
            })
          )

        const currentMember = action.payload
        if (!currentMember.token) {
          dispatch(
            createToast({
              title: 'Invalid Token',
              message:
                'Invalid token, please try logging in again or contact site administrator if error persists',
              type: 'ERROR',
            })
          )
        }

        if (!currentMember.member) {
          dispatch(
            createToast({
              title: 'Server Error',
              message:
                'Member data error, please try logging in again or contact site administrator if error persists',
              type: 'ERROR',
            })
          )
        }

        if (currentMember.token && currentMember.member) {
          navigate('/clubhouse')
        }
      })
      .catch((err) => {
        console.log('\n\nSPECIAL ERROR: ')
        console.log(err)
      })
  }

  return (
    <div id="login-container">
      <Row>
        <Col>
          <Form id="login-form" onSubmit={handleSubmit}>
            <header>
              <h1>Login</h1>
            </header>
            <br />
            <FloatingLabel controlId="flEmail" label="E-mail" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                autoFocus
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="flPassword" label="Password">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </FloatingLabel>

            <div id="login-controls" className="mt-3">
              <Button id="btnLogin" type="submit">
                Login
              </Button>
              <a id="linkForgotPassword" href="/">
                Forgot Password
              </a>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
