import './Admin.scss'
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Admin() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <DropdownButton id="btn-manage" title="Manage">
              <LinkContainer to="/clubhouse/admin/news">
                <Dropdown.Item>News Articles</Dropdown.Item>
              </LinkContainer>
              <Dropdown.Item>Events</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Admin
