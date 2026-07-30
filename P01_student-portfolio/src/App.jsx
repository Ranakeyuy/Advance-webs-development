import React from 'react';
import NavBar from './componenets/NavBar';
import Header from './componenets/header';
import About from './componenets/about';
import Skills from './componenets/skills';
import Experience from './componenets/experience';
import Projects from './componenets/projects';
import Education from './componenets/education';
import ResumeSection from './componenets/ResumeSection';
import Footer from './componenets/footer';
import { resumeData } from './data/resumeData';
import './App.css';

function App() {
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

        <ResumeSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
