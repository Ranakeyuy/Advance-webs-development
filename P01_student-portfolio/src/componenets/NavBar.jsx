import React from 'react';
import { Cpu, User, Briefcase, Rocket, GraduationCap, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

function NavBar() {
  return (
    <nav className="navbar" role="navigation">
      <div className="container nav-flex">
        <a href="#hero" className="brand-logo">
          <Cpu size={26} color="var(--accent-cyan)" />
          <span>{resumeData.personalInfo.displayName}<span className="gradient-text">.Dev</span></span>
        </a>

        <ul className="nav-links">
          <li><a href="#about" className="nav-link"><User size={15} /> About</a></li>
          <li><a href="#skills" className="nav-link"><Cpu size={15} /> Skills</a></li>
          <li><a href="#experience" className="nav-link"><Briefcase size={15} /> Experience</a></li>
          <li><a href="#projects" className="nav-link"><Rocket size={15} /> Projects</a></li>
          <li><a href="#education" className="nav-link"><GraduationCap size={15} /> Education</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;