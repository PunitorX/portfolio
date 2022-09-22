import React from 'react'
import './ProjectSection.css'
import Card from './Cards'
import Cards from './Card.js'

function ProjectSection({
  title, titleTwo, itemOne, itemTwo, itemThree, bodyOne, bodyTwo, bodyThree, listOne, listTwo, listThree, gitOne, gitTwo, gitThree, linkOne, linkTwo, linkThree, sItemOne, sItemTwo, sItemThree,sBodyOne, sBodyTwo, sBodyThree, sListOne, sListTwo, sListThree, sGitOne, sGitTwo, sGitThree, sLinkOne, sLinkTwo, sLinkThree,

  itemFour, itemFive, itemSix, bodyFour, bodyFive, bodySix, listFour, listFive, listSix, gitFour, gitFive, gitSix, linkFour, linkFive, linkSix, sItemFour, sItemFive, sItemSix,sBodyFour, sBodyFive, sBodySix, sListFour, sListFive, sListSix, sGitFour, sGitFive, sGitSix, sLinkFour, sLinkFive, sLinkSix

}) {
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
                <div className="small-card-group">
                  <div className="small-cards-item">
                    <Cards name={sItemOne} body={sBodyOne} list={sListOne} git={sGitOne} link={sLinkOne}/>
                  </div>
                  <div className="small-cards-item">
                    <Cards name={sItemTwo} body={sBodyTwo} list={sListTwo} git={sGitTwo} link={sLinkTwo}/>
                  </div>
                  <div className="small-cards-item">
                    <Cards name={sItemThree} body={sBodyThree} list={sListThree} git={sGitThree} link={sLinkThree}/>
                  </div>
                </div>

                <div className="small-card-group">
                  <div className="small-cards-item">
                    <Cards name={sItemFour} body={sBodyFour} list={sListFour} git={sGitFour} link={sLinkFour}/>
                  </div>
                  <div className="small-cards-item">
                    <Cards name={sItemFive} body={sBodyFive} list={sListFive} git={sGitFive} link={sLinkFive}/>
                  </div>
                  {/* <div className="small-cards-item">
                    <Cards name={sItemSix} body={sBodySix} list={sListSix} git={sGitSix} link={sLinkSix}/>
                  </div> */}
                </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default ProjectSection;

