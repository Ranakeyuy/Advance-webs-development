import React from 'react';
import './header.css';

const Header = ({ name }) => {
  return (
    <header className="app-header" style={{ backgroundColor: '#2c3e50' }}>
      <h1>{name}'s Portfolio</h1>
    </header>
  );
};

export default Header;