import './ManageEvents.scss'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchEvents,
  deleteArticleById,
  updateArticleById,
} from '@features/events/eventsSlice'
import SimpleModal from '@components/ui/SimpleModal/SimpleModal'
import EditEventsModal from '@views/Clubhouse/Admin/Events/EditEvents'
import { createToast, clearToastsAsync } from '@features/toasts/toastSlice'
import dayjs from 'dayjs'
import { FaArrowLeft } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'

function ManageEvents() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  const events = useSelector((state) => state.events.articles)
  const [idToDelete, setIdToDelete] = useState('')
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
  const [idToEdit, setIdToEdit] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)

  const handleDeleteArticle = () => {
    setShowConfirmDeleteModal(false)
    const result = dispatch(deleteArticleById({ id: idToDelete, token }))
    if (result && result.payload) {
      dispatch(
        createToast({
          title: 'Success',
          type: 'SUCCESS',
          message: 'Event deleted!',
          delay: 1500,
        })
      )
      dispatch(clearToastsAsync())
    } else {
      dispatch(
        createToast({
          title: 'Error',
          type: 'ERROR',
          message: 'An error occurred, event may not have deleted!',
          delay: 8000,
        })
      )
      dispatch(clearToastsAsync())
    }
  }

  const handleSaveEditArticle = async (article) => {
    setShowEditModal(false)
    const result = await dispatch(updateArticleById(article))
    if (result && result.payload) {
      dispatch(
        createToast({
          title: 'Success',
          type: 'SUCCESS',
          message: 'Event updated!',
          delay: 1500,
        })
      )
      dispatch(clearToastsAsync())
    } else {
      dispatch(
        createToast({
          title: 'Error',
          type: 'ERROR',
          message: 'An error occurred, changes may not have saved!',
          delay: 8000,
        })
      )
      dispatch(clearToastsAsync())
    }
  }

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  return (
    <Container id="admin-manageEvents-container">
      <SimpleModal
        show={showConfirmDeleteModal}
        title="Delete Event?"
        message="Are you sure you want to delete this event?"
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
        handleCancelModal={() => setShowConfirmDeleteModal(false)}
        handleConfirmModal={() => handleDeleteArticle()}
      />

      <EditEventsModal
        articleId={idToEdit}
        show={showEditModal}
        confirmText="Save"
        cancelText="Cancel"
        confirmAction={(article) => handleSaveEditArticle(article)}
        cancelAction={() => setShowEditModal(false)}
      />

      <Row>
        <Col>
          <Button
            variant="dark"
            className="mb-3"
            title="Go back"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-2" />
            Back
          </Button>
          <header>
            <h3>Manage Events</h3>
          </header>
          <Button
            className="mb-4"
            title="Create new event"
            onClick={() => navigate('/clubhouse/admin/events/create')}
          >
            <FaPlus className="me-2" />
            New Event
          </Button>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Published</th>
                <th>Title</th>
                <th>Link</th>
                <th>Link Text</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events &&
                events.map((article) => (
                  <tr key={article._id}>
                    <td>{dayjs(article.published).format('M/DD/YY')}</td>
                    <td>{article.title}</td>
                    <td>{article.link}</td>
                    <td>{article.linkText}</td>
                    <td>
                      <Button
                        variant="secondary"
                        className="me-2"
                        title="Edit Event"
                        size="sm"
                        onClick={() => {
                          setIdToEdit(article._id)
                          setShowEditModal(true)
                        }}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="danger"
                        title="Delete Event"
                        size="sm"
                        onClick={() => {
                          setIdToDelete(article._id)
                          setShowConfirmDeleteModal(true)
                        }}
                      >
                        <FaTrashAlt />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default ManageEvents
