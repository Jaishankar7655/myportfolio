import React, { useState } from 'react'
import Navbar from './NavBar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SideNavigation from './SideNavigation'
import SkillsSection from './SkillsSection'
import ExperienceSection from './ExperienceSection'

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'dark bg-black min-h-screen' : 'bg-white min-h-screen'}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <SideNavigation darkMode={darkMode} getCurrentSection={() => 0} />
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ExperienceSection darkMode={darkMode}/>
    </div> 
  )
}

export default Home