import React from 'react';
import Contacts from './Contacts'; 
import Navbar from './Navbar'; 

function Header() {
  return (
    <header>
      <Navbar />
      <h1>Vuyiswa Diale</h1>

      <p className="career">Software Engineering Student</p>

      <div className="profile">
        <picture>
          <source media="(max-width: 500px)" srcSet="./images/Vuyiswa1.png" />
          <source media="(max-width: 1000px)" srcSet="./images/Vuyiswa2.png" />
          <img src="./images/Vuyiswa.png" alt="Vuyiswa" />
        </picture>
      </div>

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
