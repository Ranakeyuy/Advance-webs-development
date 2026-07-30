import Header from './componenets/header';
import About from './componenets/about';
import Skills from './componenets/skills';
import Footer from './componenets/footer';
import './App.css';

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "GitHub", "Responsive Design"];

  return (
    <>
      <Header name="Ranak" />
      <About />
      <Skills skillList={skills} />
      <Footer />
    </>
  )
}

export default App
