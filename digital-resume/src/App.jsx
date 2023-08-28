import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div>
      <Header />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
