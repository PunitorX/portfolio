import React from 'react'
import IntroSection from '../../IntroSection'
import MainSection from '../../MainSection'
import ProjectSection from '../../ProjectSection'
import ContactSection from '../../ContactSection'
import { introData } from './Data'

function Main() {
  return (
    <>
        <IntroSection {...introData} />
        <MainSection />
        <ProjectSection />
        <ContactSection />
    </>
  )
}

export default Main