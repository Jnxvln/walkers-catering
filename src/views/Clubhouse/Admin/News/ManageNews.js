import './ManageNews.scss'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchNews,
  deleteArticleById,
  updateArticleById,
} from '@features/news/newsSlice'
import SimpleModal from '@components/ui/SimpleModal/SimpleModal'
import EditNewsModal from '@views/Clubhouse/Admin/News/EditNews'
import { createToast, clearToastsAsync } from '@features/toasts/toastSlice'
import dayjs from 'dayjs'
import { FaArrowLeft } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'

function ManageNews() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token)

  const news = useSelector((state) => state.news.articles)
  const [idToDelete, setIdToDelete] = useState('')
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false)
  const [idToEdit, setIdToEdit] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)

  const handleDeleteArticle = () => {
    setShowConfirmDeleteModal(false)
    dispatch(deleteArticleById({ id: idToDelete, token }))
  }

  const handleSaveEditArticle = async (article) => {
    setShowEditModal(false)
    const result = await dispatch(updateArticleById(article))
    console.log('RESULT: ', result)
    if (result && result.payload) {
      dispatch(
        createToast({
          title: 'Success',
          type: 'SUCCESS',
          message: 'Article updated!',
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
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <Container id="admin-manageNews-container">
      <SimpleModal
        show={showConfirmDeleteModal}
        title="Delete Article?"
        message="Are you sure you want to delete this article?"
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
        handleCancelModal={() => setShowConfirmDeleteModal(false)}
        handleConfirmModal={() => handleDeleteArticle()}
      />

      <EditNewsModal
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
            <h3>Manage News</h3>
          </header>
          <Button
            className="mb-4"
            title="Create new article"
            onClick={() => navigate('/clubhouse/admin/news/create')}
          >
            <FaPlus className="me-2" />
            New Article
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
              {news &&
                news.map((article) => (
                  <tr key={article._id}>
                    <td>{dayjs(article.published).format('M/DD/YY')}</td>
                    <td>{article.title}</td>
                    <td>{article.link}</td>
                    <td>{article.linkText}</td>
                    <td>
                      <Button
                        variant="secondary"
                        className="me-2"
                        title="Edit Article"
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
                        title="Delete Article"
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

export default ManageNews
