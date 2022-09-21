import React from 'react'
import './ProjectSection.css'
import Card from './Cards'

function ProjectSection({title, itemOne, itemTwo, itemThree, bodyOne, bodyTwo, bodyThree, listOne, listTwo, listThree, gitOne, gitTwo, gitThree, linkOne, linkTwo, linkThree}) {
  return (
    <div className="project">
        <div className="project-container">
            <div className="project-title">
                {title}
            </div>
            <div className="project-list">
              <div className="project-item">
                <Card name={itemOne} body={bodyOne} list={listOne} git={gitOne} link={linkOne} />
              </div>
              <div className="project-item">
                <Card name={itemTwo} body={bodyTwo} list={listTwo} git={gitTwo} link={linkTwo}/>
              </div>
              <div className="project-item">
                <Card name={itemThree} body={bodyThree} list={listThree} git={gitThree} link={linkThree}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection;

