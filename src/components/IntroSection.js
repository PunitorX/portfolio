import React from 'react'
import './IntroSection.css'

function IntroSection({name, header, desc}) {
  return (
    <div className="intro">
        <div className="intro-container">
            <div className="intro-name">
                {name}
            </div>
            <div className="intro-header">
                {header}
            </div>
            <div className="intro-description">
                I{desc}
            </div>
        </div>
    </div>
  )
}

export default IntroSection