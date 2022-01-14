import React from 'react'
import './siteheader.scss'

export default function SiteHeader() {
  return (
    <div className="siteheader-showcase">
      <video
        src={require('@assets/videos/ui/siteheader/siteheader_showcase1.mp4')}
        muted
        loop
        autoPlay
      ></video>

      <div className="siteheader-overlay"></div>

      <header className="siteheader-text">
        <h2 id="siteheader-title">Walker's Catering</h2>
        <p id="siteheader-subtitle">Cooking With Passion</p>
      </header>
    </div>
  )
}
