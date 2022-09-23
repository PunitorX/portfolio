import React from 'react'
import IntroSection from '../../IntroSection'
import AboutSection from '../../AboutSection'
import ProjectSection from '../../ProjectSection'
import ContactSection from '../../ContactSection'
import { introData, aboutData, projectData } from './Data'

function Main() {
  return (
    <>
        <IntroSection {...introData} />
        <AboutSection {...aboutData}/>
        <ProjectSection {...projectData} />
        <ContactSection />
    </>
  )
}

export default Main