import React from 'react';
import './NavBar.css';

const NavBar = ({ activeSection, onNavLinkClick }) => {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    // Add more sections here as you create them
  ];

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id} className={`nav-item ${activeSection === item.id ? 'active' : ''}`}>
            <a href={`#${item.id}`} onClick={() => onNavLinkClick(item.id)}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;