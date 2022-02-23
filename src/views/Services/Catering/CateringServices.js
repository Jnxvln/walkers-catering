import './CateringServices.scss'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

// TODO: Clean up & relocate CSS into style file

export default function CateringServices() {
  return (
    <Container id="cateringservice-container">
      <Row>
        <Col>
          <h1>Catering Services</h1>
        </Col>
      </Row>

      <div style={{ marginBottom: '1.5em' }}></div>

      <Row>
        <Col>
          <section>
            <p className="cateringservice-paragraph">
              I provide professional catering services for a wide variety of
              events. My culinary services include a custom menu, food
              preparation, cooking and plating, providing beverages, and
              clean-up, all while adhering to the budget and any nutritional
              requirements.
            </p>
            <p className="cateringservice-paragraph">
              My goal is full bellies and happy smiles, and to that end I work
              closely with you to learn about your goals and expectations for
              the event. We will design a custom menu, go over specifics
              regarding food preparation, event planning, cleanup, and more.
            </p>
          </section>
        </Col>
      </Row>

      <div style={{ marginBottom: '2em' }}></div>

      <Row>
        <Col>
          <section>
            <Row>
              <Col>
                <Image
                  style={{ maxWidth: '600px' }}
                  src={require(`@assets/images/generic/chef_menu.jpg`)}
                />
              </Col>
              <Col>
                <header>
                  <h3>Develop A Menu</h3>
                </header>
                <article>
                  <p className="cateringservice-paragraph">
                    Food is the bread and butter of all social engagements.
                    Apart from providing nurishment to our bodies, food is also
                    a conduit for connecting people, opening doors and enabling
                    opportunities.
                  </p>
                  <p className="cateringservice-paragraph">
                    Determining the right food for your event is crucial to its
                    success. We will create a menu that is both functional and
                    nutritious, and put it into action.
                  </p>
                </article>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>

      <div style={{ marginBottom: '5em' }}></div>

      <Row>
        <Col>
          <section>
            <Row>
              <Col>
                <header style={{ marginTop: '1.5em' }}>
                  <h3>Food Preparation & Plating</h3>
                </header>
                <article>
                  <p className="cateringservice-paragraph">
                    Food preparation is basically two things: preparing
                    ingredients for a recipe, such as chopping up vegetables,
                    peeling potatoes, or marinating a chicken. It is also an
                    understanding of what needs to be cooked when, so that
                    everything comes out fresh, ready to be enjoyed by guests.
                  </p>
                  <p className="cateringservice-paragraph">
                    Presentation is also a key part of catering; food should
                    look appealing and inviting. However good a meal tastes is
                    irrelevant if it's never eaten. With careful planning and
                    attention to detail, food will be more appealing and more
                    likely to be enjoyed.
                  </p>
                </article>
              </Col>
              <Col>
                <Image
                  style={{ maxWidth: '600px' }}
                  src={require(`@assets/images/generic/foodprep.jpg`)}
                />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </Container>
  )
}
