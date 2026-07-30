import React from 'react';
import NavBar from './componenets/NavBar';
import Header from './componenets/header';
import About from './componenets/about';
import Skills from './componenets/skills';
import Experience from './componenets/experience';
import Projects from './componenets/projects';
import Education from './componenets/education';
import Footer from './componenets/footer';
import { resumeData } from './data/resumeData';
import './App.css';

function App() {
  // All technical skills array passed as prop to Skills component (Practical 1 Requirement)
  const skillsArray = [
    ...resumeData.skills.languagesAndDomains,
    ...resumeData.skills.hardwareAndSensors,
    ...resumeData.skills.toolsAndPlatforms
  ];

  return (
    <div className="app-container">
      <NavBar />
      
      <main className="main-content">
        <Header 
          name={resumeData.personalInfo.fullName} 
          tagline={resumeData.personalInfo.tagline} 
        />
        
        <About />
        
        <Skills skillList={skillsArray} />

        <Experience />

        <Projects />

        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
