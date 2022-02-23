import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import './Join.scss'

export default function Join() {
  const navigate = useNavigate()
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    discovery: '',
    interests: '',
  })

  const clearForm = () => {
    setState((prevState) => ({
      ...prevState,
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      discovery: '',
      interests: '',
    }))
  }

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('MEMBER DATA TO SUBMIT TO SERVER:')
    console.log(state)
    const member = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      username: state.username,
      password: state.password,
      discovery: state.discovery,
      interests: state.interests,
      isMemberActive: true,
      isSubscriptionActive: false,
      subscriptionSince: '',
      dateAccountCreated: new Date(),
      memberSince: new Date(),
    }

    try {
      axios
        .post('http://localhost:3001/api/club/members', member)
        .then((res) => {
          if (!res) {
            throw new Error(
              'ERROR! [Join.js - handleSubmit()]: Falsey response from server.'
            )
          }

          if (!res.data) {
            throw new Error(
              'ERROR! [Join.js - handleSubmmit()]: Response good, but data property is falsey'
            )
          }

          // POST was successful
          // console.log(res.data)

          navigate('/login')
          clearForm()
        })
    } catch (error) {
      console.error('ERROR! [Join.js - handleSubmit() CATCH error: ')
      console.error(error)
    }
  }

  return (
    <div id="joinclub-container">
      <Row>
        <Col>
          <Form id="joinclub-form" onSubmit={handleSubmit}>
            <header>
              <h1>Join The Club</h1>
            </header>
            <p>
              Fields marked <span className="required">*</span> are required
            </p>
            {/* FIRST & LAST NAME */}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label className="label-bold">
                    First Name <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={state.firstName}
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label className="label-bold">
                    Last Name <span className="required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={state.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* EMAIL */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="label-bold">
                E-mail <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="E-mail"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Text className="text-muted">
                We will never share your e-mail address.
              </Form.Text>
            </Form.Group>

            {/* USERNAME */}
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="label-bold">
                Username <span className="required">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                value={state.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Label className="label-bold">
                  Password <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Label className="label-bold">
                  Confirm Password <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={state.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <div style={{ marginTop: '1em' }}></div>

            <Row>
              <Col>
                {/* DISCOVERY */}
                <Form.Group>
                  <Form.Label className="label-bold">Discovery</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="discovery"
                    rows="3"
                    placeholder="How did you find out about Walker's Catering?"
                    value={state.discovery}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div style={{ marginTop: '1em' }}></div>

            <Row>
              <Col>
                {/* INTERESTS */}
                <Form.Group>
                  <Form.Label className="label-bold">
                    What are you most interested in?
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="interests"
                    rows="3"
                    placeholder="What are you most interested in gaining from The Club?"
                    value={state.interests}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <br />

            <Button type="submit">Join</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
