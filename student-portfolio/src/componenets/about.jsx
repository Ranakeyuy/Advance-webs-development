import React from 'react';
import './about.css';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <h2>About Me</h2>
      <p>This is where you can write a short paragraph about yourself.</p>
    </section>
  );
};

export default About;