import './ClubhouseMenu.scss'
import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import { getMemberAsync } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'

function ClubhouseMenu() {
  const dispatch = useDispatch()

  const refreshMember = () => {
    dispatch(getMemberAsync())
  }

  const member = useSelector((state) => state.auth.currentMember)

  return (
    <Tabs
      defaultActiveKey="clubhouse"
      id="clubhouse-menu"
      className="mb-3"
      onSelect={(key) => {
        if (key === 'profile') {
          refreshMember()
        }
      }}
    >
      <Tab className="clubhouse-menu-tab" eventKey="clubhouse" title="Home">
        <Home />
      </Tab>
      <Tab className="clubhouse-menu-tab" eventKey="profile" title="Profile">
        <Profile />
      </Tab>
      <Tab
        className="clubhouse-menu-tab"
        eventKey="myitems"
        title="My Items"
      ></Tab>
    </Tabs>
  )
}

export default ClubhouseMenu
