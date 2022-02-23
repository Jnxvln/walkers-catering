import './ClubLanding.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ClubhouseMenu from '@components/ClubhouseMenu/ClubhouseMenu'
import { useSelector } from 'react-redux'

export default function ClubLanding() {
  const currentMember = useSelector((state) => state.auth.currentMember)

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
