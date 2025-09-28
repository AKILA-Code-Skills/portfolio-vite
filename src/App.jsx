import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Resume from './Resume';
import Projects from './Project';
import Contact from './Contact';
import About from './About';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
