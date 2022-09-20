import React from 'react'
import './ProjectSection.css'
import { Card } from './Card'
import { Link } from 'react-router-dom'

function ProjectSection({title, itemOne, itemTwo, itemThree}) {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-title">
                {title}
            </div>
            <div className="project-list">
              <li className="project-item">   
                {Card ? (
                  <Link className='project-card'>
                    <Card></Card>
                  </Link>
                ) : (
                  <Link className='project-card'>
                    <Card></Card>
                  </Link>
                )}
              </li>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection
