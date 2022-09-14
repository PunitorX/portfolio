import React from 'react'
import './ProjectSection.css'

function ProjectSection({name, header}) {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-name">
                {name}
            </div>
            <div className="project-header">
                {header}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection