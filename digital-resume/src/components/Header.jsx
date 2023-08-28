import React from "react";
import Contacts from "./Contacts";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
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

      <h1>Vuyiswa Diale</h1>
      <p className="career">Software Engineering Student</p>
      <Contacts />

      <div className="intro">
        <p>
          An aspiring Software Developer seeking to have an opportunity to
          showcase her skills and abilities in a fun and challenging working
          environment. This will encourage her to improve and become the best
          candidate for the job and to learn new and necessary skills and to be
          mentored by the company to do her best as this will help her and the
          company to advance in the software engineering industry.
        </p>
      </div>
    </header>
  );
}

export default Header;
