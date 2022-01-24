import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
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
              title="LIVE @ Arrow: Franklin Pearl & The Moon"
              location="Arrow Bar"
              details="Sat 01/22 at 9:00pm $5 cover"
              address="110 E 36th St. Texarkana, AR 71854"
              content="Join me at the Arrow Bar THIS Saturday the 22nd at 9:00pm for some
          great local bands, including Vela Nora, Franklin Pearl & The Moon, and
          RxEvil!<br/><br/>The night will jam-packed full of Americana, Indie Rock, and EDM, both
          cover songs and originals alike. The afterparty location is TBD upon
          the end of the evening. So don't miss out!"
              imageSrc="beer.jpg"
            />

            <NewsListItem />
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}
