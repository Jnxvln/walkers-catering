import React from 'react'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/Button'
import FeatureCard from '@components/ui/FeatureCard/FeatureCard'
import SiteHeader from '@components/ui/SiteHeader/siteheader.js'
import './Home.scss'

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <div id="app-headerDivisor"></div>

      <Container>
        <Row>
          <Col sm={4} md={4} lg={4}>
            <FeatureCard
              imageSrc="two-cook.jpg"
              title="Professional Catering"
              type="primary"
              summary="If you’re looking for an excellent catering experience, with
                  delicious foods that are sure to please, then you’ve come to the
                  right place!"
              buttonText="Learn More"
            />
          </Col>

          <Col sm={4} md={4} lg={4}>
            <FeatureCard
              imageSrc="bday-party.jpg"
              title="Special Occasions"
              type="secondary"
              summary="I cater to a wide variety of events, including weddings,
                  corporate luncheons, birthdays, graduation parties, retirement
                  parties, and more!"
              buttonText="Learn More"
            />
          </Col>

          <Col sm={4} md={4} lg={4}>
            <FeatureCard
              imageSrc="teach-cook.jpg"
              title="Learn To Cook"
              type="tertiary"
              summary="For the aspiring chef, I offer dozens of recipes and cooking
                  techniques. Follow along, step by step, and create
                  mouth-watering dishes ready to impress."
              buttonText="Learn More"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
