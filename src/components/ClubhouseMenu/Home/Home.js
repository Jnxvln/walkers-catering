import './Home.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector } from 'react-redux'

function Home() {
  const member = useSelector((state) => state.auth.currentMember)

  return (
    <Container id="clubhouse-home-container">
      <Row>
        <Col>{member && <strong>Welcome back, {member.firstName}</strong>}</Col>
      </Row>
    </Container>
  )
}

export default Home
