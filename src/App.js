import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SiteNavbar from '@components/ui/SiteNavbar/sitenavbar.js'
import Home from '@views/Home/Home'
import About from '@views/About/About'
import News from '@views/News/News'

function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  )
}

export default App
