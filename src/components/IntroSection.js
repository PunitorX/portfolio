import React from 'react'
import './IntroSection.css'

function IntroSection({intro, span, name, desc}) {
  return (
    <div className="intro">
        <div className="intro-container">
            <div className="intro-intro">
                {intro}
            </div>
            <div className="intro-name">
               {span}<span>{name}</span>
            </div>
            <div className="intro-desc">
                {desc}
            </div>
        </div>
    </div>
  )
}

export default IntroSection