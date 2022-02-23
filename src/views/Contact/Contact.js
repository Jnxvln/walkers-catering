import './Contact.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About() {
  return (
    <Container id="contact-container">
      <Row>
        <Col>
          <section className="contact-section">
            <h2>Contact Me</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet. Ut atque beatae qui ullam quod ut
              ullam eaque est deserunt obcaecati ut explicabo internos est
              exercitationem doloribus. Aut ipsa doloribus est eaque deleniti
              qui porro unde eos architecto reprehenderit sed odio molestiae.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  )
}
