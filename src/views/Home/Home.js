import React from 'react'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import Card from 'react-bootstrap/card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/form'
import FeatureCard from '@components/ui/FeatureCard/FeatureCard'
import SiteHeader from '@components/ui/SiteHeader/siteheader.js'
import './Home.scss'
import { Tooltip } from 'bootstrap'

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <div id="app-headerDivisor"></div>

      <Container>
        <Row>
          <Col>
            <section className="home-leadWrapper">
              <header id="home-titleHeader">
                <h1 id="home-titleText">Welcome</h1>
              </header>
              <article>
                <p className="home-leadText">
                  Professional catering, exceptional food, and happy guests are
                  the main ingredients for any successful event. I provide
                  top-notch culinary services including catering, videos to
                  learn how to cook, recipes for sale, and more.
                </p>
                <br />
              </article>
            </section>
          </Col>
        </Row>

        <Row className="home-rowFeatCards">
          <Col sm={6} md={6} lg={4}>
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

          <Col sm={6} md={6} lg={4}>
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

          <Col sm={6} md={6} lg={4}>
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

      {/* SIGN UP ROW */}
      <div>
        <Row id="home-signupRow">
          <Col md={6}>
            <Container class="site-signupSection">
              <h3 id="site-signupTitle">Sign Up Today</h3>
              <p className="signupText">
                Get access to so much more content when you sign up
              </p>
              <ul>
                <li className="signupText">Additional recipes</li>
                <li className="signupText">More courses</li>
                <li className="signupText">Newsletter (optional)</li>
                <li className="signupText">
                  Stay updated on new events, recipes, and more (optional)
                </li>
              </ul>
            </Container>
          </Col>
          <Col md={6}>
            <Container className="home-signup">
              <Form>
                <Form.Group className="home-formGroup">
                  <Form.Label className="home-formLabel">First Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="home-formGroup">
                  <Form.Label className="home-formLabel">Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="home-formGroup">
                  <Form.Label className="home-formLabel">E-mail</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <br />
                <Button type="button" className="site-btn btn-filled-primary">
                  Sign Up
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>

      {/* NEWS & EVENTS - SUMMARY */}
      <Container id="home-newsRowContainer">
        <Row id="home-newsRow">
          <Col md={6}>
            <h1>News</h1>
            <ul id="home-newsList">
              <li>
                <div>
                  <p className="home-newsItemTitle">Thur, January 13th</p>
                  <div>
                    Et cupidatat tempor qui cupidatat sit. Deserunt aliqua duis
                    magna cupidatat sunt exercitation dolore.{' '}
                    <a href="/">Read more...</a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p className="home-newsItemTitle">Thur, January 13th</p>
                  <div>
                    Et cupidatat tempor qui cupidatat sit. Deserunt aliqua duis
                    magna cupidatat sunt exercitation dolore.{' '}
                    <a href="/">Read more...</a>
                  </div>
                </div>
              </li>
            </ul>
            <br />
          </Col>

          <Col md={6}>
            <h1>Upcoming Events</h1>
            <ul id="home-eventsList">
              <li>
                <div>
                  <p className="home-eventsItemTitle">Thur, January 13th</p>
                  <div>
                    Et cupidatat tempor qui cupidatat sit. Deserunt aliqua duis
                    magna cupidatat sunt exercitation dolore.{' '}
                    <a href="/">Read more...</a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p className="home-eventsItemTitle">Thur, January 13th</p>
                  <div>
                    Et cupidatat tempor qui cupidatat sit. Deserunt aliqua duis
                    magna cupidatat sunt exercitation dolore.{' '}
                    <a href="/">Read more...</a>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <Row>
        <Col>
          <footer id="home-footer">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="secondary"
                size="sm"
                style={{ marginBottom: '4pt' }}
                onClick={() => {
                  document.body.scrollTop = 0 // For Safari
                  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
                }}
              >
                To Top
              </Button>
            </div>
            <p id="home-copyright">
              &copy; Copyright 2022 Walker's Catering
              <br />
              All Rights Reserved
            </p>
          </footer>
        </Col>
      </Row>
    </div>
  )
}
