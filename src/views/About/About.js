import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './About.scss'

export default function About() {
  return (
    <Container style={{ marginTop: '3em' }}>
      <Row>
        <Col lg={5}>
          <section className="about-section">
            <h2>Justin Walker</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet. Ut atque beatae qui ullam quod ut
              ullam eaque est deserunt obcaecati ut explicabo internos est
              exercitationem doloribus. Aut ipsa doloribus est eaque deleniti
              qui porro unde eos architecto reprehenderit sed odio molestiae.
            </p>

            <p>
              Eum dolore laboriosam qui dolorum itaque est temporibus sequi ut
              sequi officiis est pariatur voluptatibus ut suscipit impedit qui
              distinctio modi. Aut commodi beatae ut ducimus voluptatem id
              ducimus fuga a nostrum autem ex internos neque et quod aliquid!
            </p>
          </section>
        </Col>
        <Col lg={7}>
          <section>
            <Image
              src={require(`@assets/images/generic/chefimage.jpg`)}
              alt="Chef"
              id="about-image"
            />
          </section>
        </Col>
      </Row>
    </Container>
  )
}
