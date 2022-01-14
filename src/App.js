import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SiteNavbar from '@components/ui/SiteNavbar/sitenavbar.js'
import Home from '@views/Home/Home'

function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
