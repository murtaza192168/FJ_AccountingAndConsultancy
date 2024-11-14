import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#023C6C',  // Matching the blue color used on the page
        color: 'white',
        py: 4,  // Padding for top and bottom
        mt: 4,  // Margin top for separation from the content
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#fff',
          }}
        >
          &copy; {new Date().getFullYear()} The Bombay Consultancy. All Rights Reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: '#fff',
            marginTop: '8px',
          }}
        >
          Contact us for more information or to get started with our services.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
