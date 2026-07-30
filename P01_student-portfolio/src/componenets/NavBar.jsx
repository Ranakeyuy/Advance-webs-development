import React from 'react';
import { Cpu, User, Briefcase, Rocket, GraduationCap, FileText, Download } from 'lucide-react';
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
          <li><a href="#resume" className="nav-link" style={{ color: 'var(--accent-cyan)' }}><FileText size={15} /> Resume</a></li>
          <li>
            <a 
              href="/keyur_resume.pdf" 
              download="Keyur_Rana_Resume.pdf" 
              className="btn btn-primary" 
              style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
            >
              <Download size={14} /> Resume PDF
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;