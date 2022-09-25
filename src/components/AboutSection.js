import React from 'react'
import './AboutSection.css'

function AboutSection({name, pOne, pTwo, pThree, technology}) {
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
                    <div className="about-pThree">
                        {pThree} 
                    </div>
                    <div className="about-tech-title">
                        {technology}
                    </div>
                    <ul className='about-tech'>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='about-img'/>
                        </li>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='about-img'/>
                        </li>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                            className='about-img'/>
                        </li>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" 
                                className='about-img'/>
                        </li>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg" 
                                className='about-img'/>
                        </li>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
                                className='about-img'/>
                        </li>
                        <li className="about-tech-item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" 
                                className='about-img'/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection