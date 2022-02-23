import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import './NewsListItem.scss'

export default function NewsListItem({
  index,
  title,
  location,
  details,
  address,
  content,
  link,
  linkText,
  linkIsExternal,
}) {
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>
        <Row>
          <Col>
            <div>
              <div style={{ fontWeight: 'bold' }}>{title}</div>
              <div
                style={{
                  fontSize: '10pt',
                  marginTop: '0.5em',
                }}
              >
                {details}
              </div>
            </div>
          </Col>
        </Row>
      </Accordion.Header>

      <Accordion.Body>
        <p style={{ marginTop: '0.8em' }}>{content}</p>

        {linkIsExternal && (
          <a href={link} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        )}
        {!linkIsExternal && <a href={link}>{linkText}</a>}
      </Accordion.Body>
    </Accordion.Item>
  )
}
