import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer>
      <div>
        <h3 id="contacts" style={{ marginTop: '1.5rem' }}>
          Contact Details
        </h3>
        <div>
          <div className="iconsy" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.linkedin.com/in/vuyiswa-diale-a62aaa267/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>

        <h3 style={{ marginTop: '1.5rem' }}>Contact Form</h3>
        <div className="form">
          <form action="https://formsubmit.co/dialevuyiswa@gmail.com" method="POST" style={{ marginTop: '1rem' }}>
            <div>
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="job">Job Opportunity</option>
                <option value="proposal">Proposal Collaboration</option>
                <option value="general">General Queries</option>
              </select>
            </div>

            <div>
              <label htmlFor="title">Title</label>
              <select id="title" name="title" required>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms/miss">Ms/Miss</option>
              </select>
            </div>

            <div>
              <input type="text" id="name" name="user_name" placeholder="Name" required />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>

            <textarea id="message" name="message" placeholder="Message" rows="4" style={{ marginTop: '1rem' }}></textarea>

            <button className="submission" type="submit" style={{ marginTop: '1rem' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
