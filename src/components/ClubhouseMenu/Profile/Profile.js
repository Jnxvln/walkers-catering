import './Profile.scss'
import React from 'react'
import dayjs from 'dayjs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Profile() {
  const member = useSelector((state) => state.auth.currentMember)

  return (
    <Container id="clubhouse-profile-container">
      <Row>
        <Col>
          <header>
            <h2 className="title">My Profile</h2>
          </header>

          <ListGroup>
            <ListGroup.Item>
              <strong>Name:</strong>{' '}
              {member && (
                <span>
                  {member.firstName} {member.lastName}
                </span>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>E-mail:</strong> {member && <span>{member.email}</span>}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Interests:</strong>{' '}
              {member && <span>{member.interests}</span>}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Account Status:</strong>{' '}
              {member && (
                <span>
                  {member.isMemberActive ? (
                    <Badge pill bg="success">
                      Active
                    </Badge>
                  ) : (
                    <Badge pill bg="danger">
                      Inactive
                    </Badge>
                  )}
                </span>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Member Since:</strong>{' '}
              {member && (
                <span>{dayjs(member.memberSince).format('M/DD/YYYY')}</span>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Subscription: </strong>
              {member && (
                <span>
                  {member.isSubscriptionActive ? (
                    <Badge pill bg="success">
                      Active
                    </Badge>
                  ) : (
                    <Badge pill bg="danger">
                      Inactive
                    </Badge>
                  )}
                </span>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Subscription Since: </strong>
              {member && (
                <span>
                  {dayjs(member.subscriptionSince).format('M/DD/YYYY')}
                </span>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
