import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function TopPanel({ isVisible }) {
  return (
    <Box
    sx={{
        position: 'fixed',
        top: isVisible ? 0 : '-50px', // slide up/down based on visibility
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        backgroundColor: 'primary.main',
        color: 'white',
        fontSize: '0.875rem',
        transition: 'top 0.3s ease', // smooth transition effect
        zIndex: 1100, // Ensure it appears above other elements
      }}
    >
      {/* Contact Information on the Left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <PhoneIcon fontSize="small" />
          <Typography>+123 456 7890</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <EmailIcon fontSize="small" />
          <Typography>info@fjconsultancy.com</Typography>
        </Box>
      </Box>

      {/* Social Media Icons on the Right */}
      <Box sx={{ display: 'flex', gap: '0.5rem' }}>
        <IconButton href="https://www.linkedin.com" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopPanel;
