import './News.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewsList from '@components/NewsList/NewsList'

export default function Events() {
  return (
    <Container id="news-container">
      <Row>
        <Col>
          <section>
            <h1>News</h1>
            <NewsList />
          </section>
        </Col>
      </Row>
    </Container>
  )
}
