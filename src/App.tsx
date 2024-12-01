import React, { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const projectsRef = useRef(null);

  return (
    <div className="bg-gray-900">
      <Hero projectsRef={projectsRef} />
      <About />
      <Projects ref={projectsRef} />
      <Skills />
    </div>
  );
}

export default App;