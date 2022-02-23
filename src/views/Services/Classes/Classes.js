import './Classes.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

export default function Classes() {
  return (
    <Container id="classes-container">
      <Row>
        <Col>
          <header>
            <h1>Classes</h1>
          </header>

          <Container className="service-paragraphs">
            <p>
              Interested in learning how to cook? Or maybe you already know how
              to cook and you're looking for new ways to spice things up? Walker
              Catering provides a multitude of cooking courses to help you reach
              your goals, whatever they may be.
            </p>

            <p>
              There are already a number of <strong>free courses</strong>{' '}
              available on this website once you sign up. Club members gain
              access to a plethora of additional recipes, courses, special
              events, and more! Club access is a paid membership, but you can
              pause or cancel your subscription at any time, no obligations,
              allowing you to learn on your dime, in your time!
            </p>
            <LinkContainer to="/club">
              <Button>Learn More About The Club</Button>
            </LinkContainer>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
