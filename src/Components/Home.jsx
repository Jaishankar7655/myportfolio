import React from 'react'
import Navbar from './NavBar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SideNavigation from './SideNavigation'
import SkillsSection from './SkillsSection'
import AcademicSection from './AcademicSection'
function Home() {
  return (
   <>
   <div className='relative' >
    <Navbar/>
    <HeroSection/>
    <SkillsSection/>
    <AboutSection/>
    <AcademicSection/>
    <ProjectsSection/>

   </div>
   </>
  )
}

export default Home