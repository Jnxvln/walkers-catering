import './Admin.scss'
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { VscSettingsGear } from 'react-icons/vsc'
import { BsNewspaper } from 'react-icons/bs'
import { BsCalendarDay } from 'react-icons/bs'

function Admin() {
  const manageButton = (
    <span>
      <VscSettingsGear className="me-1" /> <strong>Manage</strong>
    </span>
  )

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <DropdownButton id="btn-manage" title={manageButton}>
              <LinkContainer to="/clubhouse/admin/news">
                <Dropdown.Item>
                  <BsNewspaper className="me-2" />
                  News
                </Dropdown.Item>
              </LinkContainer>
              <LinkContainer to="/clubhouse/admin/events">
                <Dropdown.Item>
                  <BsCalendarDay className="me-2" />
                  Events
                </Dropdown.Item>
              </LinkContainer>
            </DropdownButton>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Admin
