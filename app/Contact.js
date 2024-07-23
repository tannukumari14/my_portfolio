import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => (
  <div id="contact" style={{ padding: '50px 0', textAlign: 'center' }}>
    <h4>Contact Me</h4>
    <div className="contact-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', margin: '10px 0' }}>
        <MailIcon style={{ marginRight: '8px' }} /> Mail
      </a>
      <a href="https://www.linkedin.com/in/tanu-kumari-095b9b239/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', margin: '10px 0' }}>
        <LinkedInIcon style={{ marginRight: '8px' }} /> LinkedIn
      </a>
      <a href="https://github.com/tannukumari14?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', margin: '10px 0' }}>
        <GitHubIcon style={{ marginRight: '8px' }} /> Github
      </a>
      <a href="https://www.instagram.com/ta_nu5518/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333', margin: '10px 0' }}>
        <InstagramIcon style={{ marginRight: '8px' }} /> Instagram
      </a>
    </div>
  </div>
);

export default Contact;
