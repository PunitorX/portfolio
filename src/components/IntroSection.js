import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './IntroSection.css'

function IntroSection({intro, span, name, desc, resume}) {
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