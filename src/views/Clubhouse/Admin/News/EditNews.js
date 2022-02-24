import './EditNews.scss'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Modal, Form, FloatingLabel } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function EditNews({
  articleId,
  show,
  confirmText,
  cancelText,
  cancelAction,
  confirmAction,
}) {
  // const dispatch = useDispatch()
  const [state, setState] = useState({
    title: '',
    content: '',
    link: '',
    linkText: '',
  })

  let article = useSelector((state) =>
    state.news.articles.find((a) => a._id === articleId)
  )

  useEffect(() => {
    if (article) {
      // console.log(article)
      setState((prevState) => ({
        ...prevState,
        title: article.title,
        content: article.content,
        link: article.link,
        linkText: article.linkText,
      }))
    }
  }, [article])

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSave = () => {
    confirmAction({ _id: articleId, ...state })
  }

  return (
    <Modal show={show} onHide={cancelAction} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit News Article: {articleId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cancelAction} tabIndex="-1">
          {cancelText}
        </Button>
        <Button variant="primary" onClick={() => handleSave()}>
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
