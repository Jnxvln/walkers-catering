import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/container'
import { LinkContainer } from 'react-router-bootstrap'

export default function navbar() {
  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

              <LinkContainer to="/news">
                <Nav.Link>News</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/events">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <LinkContainer to="/services/catering">
                  <NavDropdown.Item>Catering</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/services/classes">
                  <NavDropdown.Item>Cooking Courses</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/services/blogging">
                  <NavDropdown.Item>Blogging</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/services/social-media">
                  <NavDropdown.Item>Social Media</NavDropdown.Item>
                </LinkContainer>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>

              <LinkContainer to="/blog">
                <Nav.Link>Blog</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/signup">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  )
}
