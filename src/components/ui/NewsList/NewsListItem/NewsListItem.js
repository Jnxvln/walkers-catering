import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Image from 'react-bootstrap/Image'
import './NewsListItem.scss'

export default function NewsListItem({
  index,
  title,
  imageSrc,
  location,
  details,
  address,
  content,
}) {
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <Row>
          <Col>
            <div>
              <Image
                src={require(`../../../../assets/images/generic/${imageSrc}`)}
                className="newslist-image"
              />
            </div>
          </Col>
          <Col>
            <div>
              <div style={{ fontWeight: 'bold' }}>{title}</div>
              <div style={{ fontSize: '10pt' }}>
                {location}
                <br />
                {details}
              </div>
            </div>
          </Col>
        </Row>
      </Accordion.Header>

      <Accordion.Body>
        <div>
          <strong>{title}</strong>
          <br />
          {details}
        </div>

        <div>
          <strong>{location}</strong>

          <address>{address}</address>
        </div>
        <p>{content}</p>
      </Accordion.Body>
    </Accordion.Item>
  )
}
