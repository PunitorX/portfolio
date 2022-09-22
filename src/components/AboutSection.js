import React from 'react'
import './AboutSection.css'

function AboutSection({name, pOne, pTwo, pThree}) {
  return (
    <div className="about">
        <div className="about-container">
            <div className="about-header">
                {name}
            </div>
            <div className="about-pOne">
                {pOne}
            </div>
            <div className="about-pTwo">
                {pTwo}
            </div>
        </div>
    </div>
  )
}

export default AboutSection