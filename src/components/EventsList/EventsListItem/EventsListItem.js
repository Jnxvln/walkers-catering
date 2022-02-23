import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import './EventsListItem.scss'

export default function EventsListItem({
  index,
  title,
  imageSrc,
  location,
  details,
  address,
  content,
}) {
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <Row>
          <Col>
            <div>
              <Image
                src={require(`../../../assets/images/generic/${imageSrc}`)}
                className="eventslist-image"
              />
            </div>
          </Col>
          <Col>
            <div>
              <div style={{ fontWeight: 'bold' }}>{title}</div>
              <div style={{ fontSize: '10pt', marginTop: '0.5em' }}>
                {location}
                <br />
                {details}
              </div>
            </div>
          </Col>
        </Row>
      </Accordion.Header>

      <Accordion.Body>
        <Row>
          <Col>
            <div>
              <strong style={{ display: 'block' }}>{title}</strong>
              {details}
            </div>
          </Col>
          <Col>
            <div>
              <strong>{location}</strong>

              <address>{address}</address>
            </div>
          </Col>
        </Row>
        <p>{content}</p>
      </Accordion.Body>
    </Accordion.Item>
  )
}
