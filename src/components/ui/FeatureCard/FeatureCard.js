import React from 'react'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/Button'
import './FeatureCard.scss'

export default function FeatureCard({
  imageSrc,
  title,
  type,
  summary,
  buttonText,
  buttonHref,
}) {
  return (
    <Card className="home-card">
      <Card.Img
        variant="top"
        src={require(`@assets/images/generic/${imageSrc}`)}
      />
      <Card.Body>
        <Card.Title className={`home-cardTitle cardTitle-${type}`}>
          {title}
        </Card.Title>
        <Card.Text className="home-cardText">{summary}</Card.Text>
        <a href="/about" className={`site-btn-outlined btn-outlined-${type}`}>
          {buttonText}
        </a>
      </Card.Body>
    </Card>
  )
}
