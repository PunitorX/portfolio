import React from 'react'
import IntroSection from '../../IntroSection'
import MainSection from '../../MainSection'
import ProjectSection from '../../ProjectSection'
import ContactSection from '../../ContactSection'
import { introData, mainData, projectData } from './Data'

function Main() {
  return (
    <>
        <IntroSection {...introData} />
        <ProjectSection {...projectData} />
        <MainSection {...mainData}/>
        <ContactSection />
    </>
  )
}

export default Main