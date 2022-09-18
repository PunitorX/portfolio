import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './IntroSection.css'

function IntroSection({intro, name, desc, resume}) {
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
            <div className="main-btn">
             {resume} {Button ? (
                  <Link to='' className='btn-link'>
                    <Button buttonStyle='primary' buttonColor='btn-dark'>Resume</Button>
                  </Link>
              ) : (
                <Link to='' className='btn-link'>
                    <Button buttonStyle='' buttonColor=''>Resume</Button>
                  </Link>
              )}
            </div>
        </div>
    </div>
  )
}

export default IntroSection