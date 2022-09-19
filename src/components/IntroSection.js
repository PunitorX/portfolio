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
            <div className="intro-btn">
             {resume} {Button ? (
                  <Link to='../../Resume.pdf' target='_blank' className='btn-link'>
                    <Button buttonStyle='primary' buttonColor='btn-dark'>Resume</Button>
                  </Link>
              ) : (
                  <Link to='../../Resume.pdf' target='_blank' className='btn-link'>
                    <Button buttonStyle='primary' buttonColor='btn-light'>Resume</Button>
                  </Link>
              )}
            </div>
        </div>
    </div>
  )
}

export default IntroSection