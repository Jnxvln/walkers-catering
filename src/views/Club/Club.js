import './Club.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'

export default function Club() {
  const currentMember = useSelector((state) => state.auth.currentMember)

  return (
    <Container id="club-container">
      <Row>
        <Col>
          <header>
            <h1 className="headerTitle">Club Membership Benefits</h1>
          </header>
          <br />
          <Container className="club-paragraphs">
            <p>
              You may have already discovered the fair amount of free content
              available on this website. If you're interested in learning and
              gaining even more value, consider joining the club!
            </p>
            <p>
              Club members have unrestricted access to additional recipes,
              cooking courses, admission to special events (and potential
              special guests), access to our newsletter allowing you to stay in
              the know, opportunities to join me in some of my cook-along videos
              and other course content. Plus, we're adding new content for
              members all the time!
            </p>
            {!currentMember && (
              <LinkContainer to="/club/join">
                <Button>Join Today</Button>
              </LinkContainer>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
