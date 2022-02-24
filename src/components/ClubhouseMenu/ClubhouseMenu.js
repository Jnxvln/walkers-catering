import './ClubhouseMenu.scss'
import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import Admin from './Admin/Admin'
import { getMemberAsync } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'

function ClubhouseMenu() {
  const dispatch = useDispatch()

  const refreshMember = () => {
    dispatch(getMemberAsync())
  }

  const member = useSelector((state) => state.auth.currentMember)

  const [key, setKey] = useState(() => {
    if (member) return 'admin'
    return 'home'
  })

  return (
    <Tabs
      id="clubhouse-menu"
      className="mb-3"
      onSelect={(key) => {
        if (key === 'profile') {
          refreshMember()
        } else {
          setKey(key)
        }
      }}
    >
      {member && member.isAdmin && member.isAdmin === true && (
        <Tab className="clubhouse-menu-tab" eventKey="admin" title="Admin">
          <Admin />
        </Tab>
      )}
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
