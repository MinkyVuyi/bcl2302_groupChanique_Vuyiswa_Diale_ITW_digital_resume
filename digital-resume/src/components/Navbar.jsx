import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside>
      <div className="menu">
        <nav>
          <button onClick={() => scrollToSection('education')}>
            <p>Education</p>
          </button>
          <button onClick={() => scrollToSection('certification')}>
            <p>Certification</p>
          </button>
          <button onClick={() => scrollToSection('experience')}>
            <p>Experience</p>
          </button>
          <button onClick={() => scrollToSection('skills')}>
            <p>Skills</p>
          </button>
          <button onClick={() => scrollToSection('contacts')}>
            <p>Contact Details</p>
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
