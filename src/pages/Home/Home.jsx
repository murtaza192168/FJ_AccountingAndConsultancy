import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ mt: 2, pb: 4, backgroundColor: '#f7f7f7' }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'url(/path/to/hero-image.jpg)', // Placeholder image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
          Welcome to F J Accounting & Consultancy
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '600px' }}>
          We provide comprehensive accounting, tax, and consultancy services to support your business success.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/contact"
          sx={{
            mt: 3,
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#125a9d' },
          }}
        >
          Get in Touch
        </Button>
      </Box>

      {/* About Us Section */}
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 3, textAlign: 'center' }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', textAlign: 'center' }}>
          F J Accounting & Consultancy has a team of professionals dedicated to offering top-notch accounting, taxation, and business advisory services. With years of experience, we help our clients navigate complex financial landscapes and grow their businesses with confidence.
        </Typography>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 5, backgroundColor: '#ffffff' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 3, textAlign: 'center' }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {['Accounting & Bookkeeping', 'Tax Consultancy', 'Business Advisory', 'VAT Services'].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ p: 3, textAlign: 'center', boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>{service}</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  A brief description of {service.toLowerCase()} goes here. We specialize in helping clients manage their {service.toLowerCase()} needs efficiently and effectively.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ py: 5, textAlign: 'center', color: '#333' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
          Contact Us
        </Typography>
        <Typography variant="body1">
          Reach out to us via phone or email to discuss how we can support your business.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
          <Typography variant="body2">📞 Phone: (123) 456-7890</Typography>
          <Typography variant="body2">📧 Email: info@fjaccounting.com</Typography>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button
          variant="contained"
          component={Link}
          to="/contact"
          sx={{
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#125a9d' },
          }}
        >
          Contact Us Today
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
