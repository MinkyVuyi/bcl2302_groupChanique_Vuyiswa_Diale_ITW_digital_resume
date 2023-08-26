import React from 'react';
import { Typography, Link, Select, FormControl, InputLabel, MenuItem, TextField, Button, Grid, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer>
      <div>
        <Typography variant="h3" id="contacts" sx={{ mt: 3 }}>
          Contact Details
        </Typography>
        <div>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <a href="https://www.linkedin.com/in/vuyiswa-diale-a62aaa267/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            </Grid>
            <Grid item>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
              </a>
            </Grid>
          </Grid>
        </div>

        <Typography variant="h3" sx={{ mt: 3 }}>
          Contact Form
        </Typography>
        <div className="form">
          <form action="https://formsubmit.co/dialevuyiswa@gmail.com" method="POST" sx={{ mt: 2 }}>
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

            <textarea id="message" name="message" placeholder="Message" rows="4" sx={{ mt: 2 }}></textarea>

            <button className="submission" type="submit" sx={{ mt: 2 }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
