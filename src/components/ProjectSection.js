import React from 'react'
import './ProjectSection.css'
import Card from './Cards'
import Cards from './Cards.js'

function ProjectSection({title, titleTwo, itemOne, itemTwo, itemThree, bodyOne, bodyTwo, bodyThree, listOne, listTwo, listThree, gitOne, gitTwo, gitThree, linkOne, linkTwo, linkThree, sItemOne, sItemTwo, sItemThree,sBodyOne, sBodyTwo, sBodyThree, sListOne, sGitOne, sLinkOne}) {
  return (
    <>
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
      <div className="small-cards">
        <div className="small-cards-container">
              <div className="small-cards-title">
                  {titleTwo}
              </div>
              <div className="small-cards-list">
                <div className="small-cards-item">
                  <Cards name={sItemOne} body={sBodyOne} list={sListOne} git={sGitOne} link={sLinkOne}/>
                </div>
                <div className="small-cards-item">
                  <Cards name={sItemOne} body={sBodyOne} list={sListOne} git={sGitOne} link={sLinkOne}/>
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default ProjectSection;

