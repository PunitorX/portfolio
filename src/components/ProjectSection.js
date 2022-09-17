import React from 'react'
import './ProjectSection.css'

function ProjectSection({name}) {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-name">
                {name}
            </div>
            
        </div>
    </div>
  )
}

export default ProjectSection