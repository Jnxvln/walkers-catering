import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewsList from '@components/ui/NewsList/NewsList'
import './News.scss'

export default function News() {
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
