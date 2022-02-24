import './CreateNews.scss'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Form, FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { createToast, clearToastsAsync } from '@features/toasts/toastSlice'
import { createNews } from '@features/news/newsSlice'

function CreateNews() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((state) => state.auth.token)
  const member = useSelector((state) => state.auth.currentMember)
  const [state, setState] = useState({
    title: '',
    content: '',
    link: '',
    linkText: '',
  })

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const clearForm = () => {
    setState((prevState) => ({
      ...prevState,
      title: '',
      content: '',
      link: '',
      linkText: '',
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!member) {
      return alert('CreateNews: No current member')
    }

    if (member && member.isAdmin.toString() === 'false') {
      // return alert('You do not have the correct privileges')
      dispatch(
        createToast({
          title: 'Cannot Post',
          type: 'ERROR',
          message:
            'Your account does not include privileges for creating new articles',
          delay: 5000,
        })
      )
      dispatch(clearToastsAsync())
    }

    const result = await dispatch(createNews({ news: state, token }))
    console.log('RESULT: ', result)
    if (result && result.payload) {
      clearForm()
      dispatch(
        createToast({
          title: 'Success',
          type: 'SUCCESS',
          message: 'Article posted!',
          delay: 3000,
        })
      )
      navigate('/clubhouse/admin/news')
    } else {
      dispatch(
        createToast({
          title: 'Error',
          type: 'ERROR',
          message: 'An error occured, your article may not have posted!',
          delay: 8000,
        })
      )
    }
  }

  return (
    <Container id="clubhouse-admin-createNews-container">
      <Row>
        <Col>
          <Button variant="dark" className="mb-3" onClick={() => navigate(-1)}>
            Back
          </Button>
          <header>
            <h3>Create News Article</h3>
          </header>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="flTitle" label="Title" className="mb-3">
              <Form.Control
                type="text"
                name="title"
                placeholder="Title"
                value={state.title}
                onChange={handleChange}
                autoFocus
                required
              />
            </FloatingLabel>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="content"
                value={state.content}
                required
                onChange={handleChange}
              />
            </Form.Group>

            <FloatingLabel controlId="flLink" label="Link" className="mb-3">
              <Form.Control
                type="text"
                name="link"
                placeholder="Link"
                value={state.link}
                onChange={handleChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="flLinkText"
              label="Link Text"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="linkText"
                placeholder="Link Text"
                value={state.linkText}
                onChange={handleChange}
              />
            </FloatingLabel>

            <Button id="btn-save" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateNews
