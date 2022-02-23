import './ClubLanding.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ClubhouseMenu from '@components/ClubhouseMenu/ClubhouseMenu'

export default function ClubLanding() {
  return (
    <Container id="clublanding-container">
      <Row>
        <Col>
          <header>
            <h1>Club House</h1>
          </header>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <ClubhouseMenu />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
