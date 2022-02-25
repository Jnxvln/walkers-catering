import './Home.scss'
import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/form'
import FeatureCard from '@components/ui/FeatureCard/FeatureCard'
import SiteHeader from '@components/ui/SiteHeader/siteheader.js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '@features/news/newsSlice'
import { fetchEvents } from '@features/events/eventsSlice'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
    dispatch(fetchEvents())
  }, [dispatch])

  const news = useSelector((state) => state.news.articles)
  const events = useSelector((state) => state.events.articles)

  return (
    <div>
      <SiteHeader />

      <div id="app-headerDivisor"></div>

      {/* === WELCOME MESSAGE & FEATURED CARDS === */}
      <Container>
        {/* Header */}
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

        {/* === FEATURE CARDS === */}
        <Row className="home-rowFeatCards">
          {/* Left Card */}
          <Col sm={6} md={6} lg={4}>
            {/* LEFT CARD */}
            <FeatureCard
              imageSrc="two-cook.jpg"
              title="Professional Catering"
              type="primary"
              summary="If you’re looking for an excellent catering experience, with
                  delicious foods that are sure to please, then you’ve come to the
                  right place!"
              buttonText="Learn More"
              href="/services/catering"
            />
          </Col>

          {/* Center Card */}
          <Col sm={6} md={6} lg={4}>
            <FeatureCard
              imageSrc="bday-party.jpg"
              title="Special Occasions"
              type="secondary"
              summary="I cater to a wide variety of events, including weddings,
                  corporate luncheons, birthdays, graduation parties, retirement
                  parties, and more!"
              buttonText="Learn More"
              href="/"
            />
          </Col>

          {/* Right Card */}
          <Col sm={6} md={6} lg={4}>
            <FeatureCard
              imageSrc="teach-cook.jpg"
              title="Learn To Cook"
              type="tertiary"
              summary="For the aspiring chef, I offer dozens of recipes and cooking
                  techniques. Follow along, step by step, and create
                  mouth-watering dishes ready to impress."
              buttonText="Learn More"
              href="/"
            />
          </Col>
        </Row>
      </Container>

      {/* === NEWSLETTER ROW === */}
      <div>
        <Row id="home-signupRow">
          {/* Newsletter Signup Text */}
          <Col md={6}>
            <Container className="site-signupSection">
              <h3 id="site-signupTitle">Sign Up for our Newsletter</h3>
              <p className="signupText">
                Grow with me and stay in the know about what's going on
              </p>
              <ul>
                <li className="signupText">Learn about community events</li>
                <li className="signupText">
                  Receive e-mails when we add new content
                </li>
                <li className="signupText">Happenings within the Club</li>
                <li className="signupText">Occasional give-aways</li>
              </ul>
            </Container>
          </Col>

          {/* Newsletter Signup Form */}
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

      {/* === NEWS & EVENTS - SUMMARY === */}
      <Container id="home-newsRowContainer">
        <Row id="home-newsRow">
          {/* News List */}
          <Col md={6}>
            <h1>News</h1>
            {/* TODO: Extract NewsList to separate UI component */}
            <ul id="home-newsList">
              {news &&
                news.map((article) => (
                  <li key={article._id}>
                    <div>
                      <div className="home-newsItemTitle">{article.title}</div>
                      <p className="home-newsItemSubtitle">
                        {dayjs(article.published).format(
                          'dddd, MMM DD, YYYY @ h:mm a'
                        )}
                      </p>
                      <div>
                        {article.content}
                        <br />
                        {article.link.length > 0 &&
                          article.linkText.length > 0 && (
                            <a href={article.link}>{article.linkText}</a>
                          )}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <br />
          </Col>

          {/* Upcoming Events */}
          <Col md={6}>
            <h1>Upcoming Events</h1>
            {/* TODO: Extract EventsList to separate UI component */}
            <ul id="home-eventsList">
              {events &&
                events.map((ev) => (
                  <li key={ev._id}>
                    <div>
                      <div className="home-eventsItemTitle">{ev.title}</div>
                      <p className="home-eventsItemSubtitle">
                        {dayjs(ev.published).format('dddd, MMM DD, YYYY')}
                      </p>
                      <div>
                        {ev.content}
                        <br />
                        {ev.link.length > 0 && ev.linkText.length > 0 && (
                          <a href={ev.link}>{ev.linkText}</a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <Row>
        <Col>
          {/* TODO: Separate Footer into separate UI component */}
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
