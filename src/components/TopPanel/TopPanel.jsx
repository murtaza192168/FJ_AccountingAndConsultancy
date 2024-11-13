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
        top: isVisible ? 0 : '-50px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        backgroundColor: '#023C6C',  // CA dark blue color
        color: 'white',
        fontSize: '0.875rem',
        transition: 'top 0.3s ease',
        zIndex: 1100,

      }}
    >
      {/* Contact Information */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem', }}>

        <IconButton
            href="tel:+1234567890"
            sx={{
              color: 'white',
              '&:hover': { color: '#66AC4C' }, // Hover effect for green color
            }}
          >
          <PhoneIcon fontSize="small" sx={{ color: '#66AC4C' }} />
          <Typography component="a" href="tel:+1234567890" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#66AC4C' }, fontSize: { xs: '0.75rem', sm: '1rem' },  display: { xs: 'none', sm: 'flex' } /* Hide on small screens*/ }}>
            +123 456 7890
          </Typography>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <IconButton
            href="mailto:info@fjconsultancy.com"
            sx={{
              color: 'white',
              '&:hover': { color: '#66AC4C' }, // Hover effect for green color
            }}
          >
          <EmailIcon fontSize="small" sx={{ color: '#66AC4C' }} />
          <Typography component="a" href="mailto:info@fjconsultancy.com" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#66AC4C' }, fontSize: { xs: '0.75rem', sm: '1rem'/*Adjust font size on mobile*/}, display: { xs: 'none', sm: 'flex' } /* Hide on small screens*/ 
            }}>
            info@fjconsultancy.com
          </Typography>
          </IconButton>
        </Box>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', gap: '0.5rem' }}>
        <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#66AC4C' }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#66AC4C' }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: 'white', '&:hover': { color: '#66AC4C' }, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TopPanel;
