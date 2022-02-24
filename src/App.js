import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SiteNavbar from '@components/ui/SiteNavbar/Sitenavbar.js'
import SiteToastContainer from '@components/ui/SiteToast/SiteToastContainer'
import { useSelector } from 'react-redux'
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
import ManageNews from '@views/Clubhouse/Admin/News/ManageNews'
import CreateNews from '@views/Clubhouse/Admin/News/CreateNews'
// #endregion

function PrivateRoute({ children }) {
  const member = useSelector((state) => state.auth.token)
  return member ? children : <Navigate to="/login" />
}

function App() {
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

        {/* <Route path="/clubhouse" element={<PrivateOutlet />}>
          <Route element={<ClubLanding />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
