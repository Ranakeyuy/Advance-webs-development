import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Ranak. All rights reserved.</p>
    </footer>
  );
};

export default Footer;