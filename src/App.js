import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteNavbar from '@components/ui/SiteNavbar/Sitenavbar.js'
import SiteToastContainer from '@components/ui/SiteToast/SiteToastContainer'
import { getMemberAsync } from './features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
// #region VIEWS
import Home from '@views/Home/Home'
import About from '@views/About/About'
import News from '@views/News/News'
import Events from '@views/Events/Events'
import Club from '@views/Club/Club'
import JoinClub from '@views/Auth/Join/Join'
import Contact from '@views/Contact/Contact'
import Login from '@views/Auth/Login/Login/'
import CateringService from '@views/Services/Catering/CateringServices'
import ClassesService from '@views/Services/Classes/Classes'
import ClubLanding from '@views/Clubhouse/ClubLanding/ClubLanding'
// CLUBHOUSE ADMIN - NEWS
import ManageNews from '@views/Clubhouse/Admin/News/ManageNews'
import CreateNews from '@views/Clubhouse/Admin/News/CreateNews'
// CLUBHOUSE ADMIN - EVENTS
import ManageEvents from '@views/Clubhouse/Admin/Events/ManageEvents'
import CreateEvents from '@views/Clubhouse/Admin/Events/CreateEvents'
// #endregion

function PrivateRoute({ children }) {
  const member = useSelector((state) => state.auth.currentMember)
  return member ? children : <Navigate to="/login" />
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMemberAsync())
  }, [dispatch])

  return (
    <div className="App">
      <SiteNavbar />
      <div style={{ position: 'fixed', zIndex: '100', width: '100%' }}>
        <SiteToastContainer />
      </div>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/club" element={<Club />} />
        <Route path="/club/join" element={<JoinClub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/catering" element={<CateringService />} />
        <Route path="/services/classes" element={<ClassesService />} />
        <Route
          path="/clubhouse"
          element={
            <PrivateRoute>
              <ClubLanding />
            </PrivateRoute>
          }
        />
        <Route path="/clubhouse/admin" element={<Login />} />
        {/* CLUBHOUSE ADMIN - NEWS */}
        <Route
          path="/clubhouse/admin/news"
          element={
            <PrivateRoute>
              <ManageNews />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/clubhouse/admin/news/create"
          element={
            <PrivateRoute>
              <CreateNews />
            </PrivateRoute>
          }
        ></Route>
        {/* CLUBHOUSE ADMIN - EVENTS */}
        <Route
          path="/clubhouse/admin/events"
          element={
            <PrivateRoute>
              <ManageEvents />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/clubhouse/admin/events/create"
          element={
            <PrivateRoute>
              <CreateEvents />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
