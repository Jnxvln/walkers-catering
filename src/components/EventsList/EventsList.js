import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import EventsListItem from './EventsListItem/EventsListItem'
import './EventsList.scss'

export default function EventsList() {
  return (
    <Container>
      <Row>
        <Col>
          <Accordion flush>
            <EventsListItem
              index={0}
              title="LIVE @ Arrow: Franklin Pearl & The Moon"
              imageSrc="beer.jpg"
              location="Arrow Bar"
              details="Sat 1/22 at 9:00pm $5 cover"
              address="110 E 36th St. Texarkana, AR 71854"
              content="Join me at the Arrow Bar THIS Saturday the 22nd at 9:00pm for some
          great local bands, including Vela Nora, Franklin Pearl & The Moon, and
          RxEvil!<br/><br/>The night will jam-packed full of Americana, Indie Rock, and EDM, both
          cover songs and originals alike. The afterparty location is TBD upon
          the end of the evening. So don't miss out!"
            />

            <EventsListItem
              index={1}
              title="Wine Tasting at Texas A&M Texarkana"
              imageSrc="nuts.jpg"
              location="Pecan Point Brewery"
              details="Fri 2/22 at 6:30pm"
              address="241 Emory Ln. Texarkana, AR 71854"
              content="Dine with us and enjoy sampling Des Moines' best wines, plus we're going LIVE on TikTok to build exposure"
            />
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}
