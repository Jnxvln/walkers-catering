import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import NewsListItem from './NewsListItem/NewsListItem'
import './NewsList.scss'

export default function NewsList() {
  return (
    <Container>
      <Row>
        <Col>
          <Accordion flush>
            <NewsListItem
              index={0}
              title="Welcome to Walker's Catering"
              details="Tue 2/17 at 3:30pm"
              content="Welcome to our home on the web! We have worked very hard to produce a website capable of delivering what our viewers want and expect. There is so much to learn out there"
              link="http://localhost:3000/about"
              linkText="Want to know more?"
              linkIsExternal={false}
            />

            <NewsListItem
              index={1}
              title="Now Offering Courses"
              details="Fri 2/22 at 6:30pm"
              content="Cooking courses are now available to members, so please make sure to subscribe to get all the latest and greatest content"
              link="http://www.google.com"
              linkText="Visit Google"
              linkIsExternal={true}
            />
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}
