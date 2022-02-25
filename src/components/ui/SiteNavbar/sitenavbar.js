import './Sitenavbar.scss'
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/container'
import { LinkContainer } from 'react-router-bootstrap'
import SimpleModal from '@components/ui/SimpleModal/SimpleModal'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAsync } from '../../../features/auth/authSlice'
import { createToast } from '../../../features/toasts/toastSlice'
import { useNavigate } from 'react-router-dom'
import { BsFillHouseFill } from 'react-icons/bs'
import { CgLogOff } from 'react-icons/cg'

export default function Sitenavbar() {
  const currentMember = useSelector((state) => state.auth.currentMember)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showLogoutModal, setShowLogoutModal] = useState(false)

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false)
  }

  const handleLogout = async () => {
    setShowLogoutModal(false)
    await dispatch(logoutAsync())
    navigate('/login')
    dispatch(
      createToast({
        title: 'Logout Success',
        type: 'SUCCESS',
        message: 'You logged out',
        delay: 1200,
      })
    )
  }

  return (
    <div>
      <SimpleModal
        show={showLogoutModal}
        title="Logout?"
        message="Are you sure you want to logout?"
        confirmButtonText="Logout"
        cancelButtonText="Cancel"
        handleCancelModal={handleCloseLogoutModal}
        handleConfirmModal={handleLogout}
      />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span
                style={{
                  color: '#e22c2c',
                  fontFamily: 'Carattere',
                  fontSize: '20pt',
                  letterSpacing: '2px',
                }}
              >
                WC
              </span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <LinkContainer to="/services/catering">
                  <NavDropdown.Item>Catering</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/services/classes">
                  <NavDropdown.Item>Classes</NavDropdown.Item>
                </LinkContainer>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>

              <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/events">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/club">
                <Nav.Link>Club Membership</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/blog">
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              {!currentMember && (
                <LinkContainer id="navlink-login" to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}

              {currentMember && (
                <LinkContainer id="navlink-clubhouse" to="/clubhouse">
                  <Nav.Link>
                    <BsFillHouseFill className="me-2" />
                    Club
                  </Nav.Link>
                </LinkContainer>
              )}

              {currentMember && (
                <div
                  id="navlink-logout"
                  onClick={async () => setShowLogoutModal(true)}
                >
                  <Nav.Link className="subNavLink">
                    <CgLogOff className="me-2" />
                    Logout
                  </Nav.Link>
                </div>
              )}

              {!currentMember && (
                <LinkContainer to="/club/join">
                  <Nav.Link id="navlink-signup">Join The Club</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
