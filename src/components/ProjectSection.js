import React from 'react'
import './ProjectSection.css'

function ProjectSection({title, itemOne, itemTwo, itemThree}) {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-title">
                {title}
            </div>
            <div className="project-list">
              <li className="project-item">   
                {itemOne}
              </li>
              <li className="project-item">   
                {itemTwo}
              </li>
              <li className="project-item">   
                {itemThree}
              </li>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection