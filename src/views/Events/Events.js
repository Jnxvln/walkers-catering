import './Events.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EventsList from '@components/EventsList/EventsList'

export default function Events() {
  return (
    <Container id="events-container">
      <Row>
        <Col>
          <section>
            <h1>Events</h1>
            <EventsList />
          </section>
        </Col>
      </Row>
    </Container>
  )
}
