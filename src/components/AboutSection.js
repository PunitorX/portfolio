import React from 'react'
import './AboutSection.css'

function AboutSection({name, pOne, pTwo, pThree}) {
  return (
    <div className="about">
        <div className="about-container">
            <div className="about-title">
                {name}
            </div>
            <div className="about-group">
                <div className="about-body">
                    <div className="about-pOne">
                        {pOne}
                    </div>
                    <div className="about-pTwo">
                        {pTwo}
                    </div>
                </div>
                <div className="about-image">
                    <img src='./images/aboutImage.svg' alt="" className='about-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection