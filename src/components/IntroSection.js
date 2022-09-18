import React from 'react'
import './IntroSection.css'

function IntroSection({intro, name, header, desc}) {
  return (
    <div className="intro">
        <div className="intro-container">
            <div className="intro-intro">
                {intro}
            </div>
            <div className="intro-name">
                {name}
            </div>
            <div className="intro-description">
                {desc}
            </div>
        </div>
    </div>
  )
}

export default IntroSection