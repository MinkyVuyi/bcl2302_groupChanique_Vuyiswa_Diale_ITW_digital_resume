import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Education />
      <Experience />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
