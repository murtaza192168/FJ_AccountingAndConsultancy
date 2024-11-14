// Home.jsx
import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { useSpring, animated } from 'react-spring';

function Home() {
  const carouselItems = [
    {
      img: './src/assets/hero/image_1.jpg', // Replace with your actual image paths
      description: 'Your Partner in Accounting Compliance and Beyond',
    },
    {
      img: './src/assets/hero/image_2.jpg',
      description: 'VAT and Corporate Tax Compliance Made Simple',
    },
    {
      img: './src/assets/hero/image_3.jpg',
      description: 'UAE Company Formation & Liquidation – Simplified and Secure',
    },
  ];

  const serviceCards = [
    {
      title: 'Accounting & Bookkeeping',
      description: 'Professional Accounting and Bookkeeping Services.',
      imgSrc: './src/assets/services/simage.jpg',
      link: 'services/vat-consultancy',
    },
    {
      title: 'VAT & Corporate Tax Compliance & Consultancy',
      description: 'Expert Corporate Tax Registration and Consultancy',
      imgSrc: './src/assets/services/simage.jpg',
      link: 'services/corporate-tax',
    },
    {
      title: 'Company Formation & Liquidation in UAE',
      description: 'End-to-End Company Setup and Liquidation Services',
      imgSrc: './src/assets/services/simage.jpg',
      link: 'services/company-setup',
    },
    // Add more service cards as necessary
  ];

  // Animation hooks using react-spring
  const logoAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 200, friction: 20 },
  });

  const textAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 180, friction: 25 },
    delay: 300,
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 500,
  });

  // ------------Handle Contacts-------------//
  //--------------------------//

  return (
    <Box sx={{ mt: 2, pb: 4, backgroundColor: '#f7f7f7',  }}>
      {/* Hero Section with Carousel */}
      <Box sx={{ position: 'relative', height: { xs: 'auto', sm: '100vh' }, overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />

        <Carousel
          indicators={true}
          autoPlay={true}
          interval={5000}
          animation="fade"
          sx={{ height: { xs: 'auto', sm: '100vh' }, overflow: 'hidden', position: 'relative', zIndex: 2 }}
        >
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                px: 3,
              }}
            >
              <animated.div style={logoAnimation}>
                <Box
                  component="img"
                  src={'./src/assets/nav/company_logo.png'}
                  alt="Company Logo"
                  sx={{
                    width: { xs: '150px', md: '200px' },
                    mb: 2,
                    zIndex: 3,
                  }}
                />
              </animated.div>

              <animated.div style={textAnimation}>
                <Typography
                  variant="h6"
                  sx={{
                    maxWidth: { xs: '90%', sm: '80%', md: '900px' },
                    mb: 4,
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '3px 3px 10px rgba(0, 0, 0, 0.8)',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    lineHeight: { xs: '1.3', sm: '1.5', md: '1.7' },
                    zIndex: 3,
                  }}
                >
                  {item.description}
                </Typography>
              </animated.div>

              <animated.div style={buttonAnimation}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  sx={{
                    backgroundColor: '#66AC4C',
                    color: 'white',
                    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.25rem' },
                    fontWeight: 'bold',
                    padding: { xs: '6px 12px', sm: '8px 16px', md: '12px 24px' },
                    width: { xs: 'auto', sm: 'auto', md: 'auto' },
                    borderRadius: '1px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    '&:hover': {
                      backgroundColor: '#4a8b3b',
                      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Let’s Connect
                </Button>
              </animated.div>
            </Box>
          ))}
        </Carousel>
      </Box>

      {/* ========================================================================== */}
      {/* ABOUT */}
      <Box sx={{ py: 5, background: 'linear-gradient(135deg, #2C3E50, #34495E)', }}>
  <Container maxWidth="lg">
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-around' }}>
      <Box
        component="img"
        src={'./src/assets/about/about_image.jpg'} // Replace with your actual image path
        alt="About Us"
        sx={{
          width: { xs: '100%', md: '45%' },
          height: 'auto',
          
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          mb: { xs: 4, md: 0 },
        }}
      />

      <Box sx={{ width: { xs: '100%', md: '45%' }, textAlign: 'left',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               height: '100%', // Ensures the content box takes full height
               paddingLeft: { xs: 0, md: 3 },
    }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ECF0F1', mb: 2,
          letterSpacing: '0.5px', // Adjust letter spacing
          lineHeight: '1.6', // Adjust line height
         }}>
          About Our <Box component="span" sx={{ color: '#66AC4C' }}>Consultancy</Box>
        </Typography>
        
        
        <Typography variant="body1" sx={{ color: '#BDC3C7', lineHeight: '1.8',letterSpacing: '0.5px', mb: 3 }}>
          We are dedicated to delivering top-notch accounting, tax compliance, and business consultancy services tailored to meet the needs of modern businesses in the UAE and beyond. With a commitment to excellence and a customer-centric approach, our team of experts is here to help you navigate the complex financial landscape.
        </Typography>
        
        <Typography variant="body1" sx={{ color: '#BDC3C7', lineHeight: '1.8', letterSpacing: '0.5px', mb: 3 }}>
          From VAT compliance and corporate tax advisory to company formation and liquidation, we provide comprehensive solutions to support your business goals and ensure full regulatory compliance. Our deep understanding of local and international standards makes us a trusted partner for businesses of all sizes.
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/about"
          sx={{
            backgroundColor: '#66AC4C',
            color: 'white',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 'bold',
            padding: { xs: '8px 16px', sm: '10px 20px', md: '12px 24px' },
            borderRadius: '1px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            '&:hover': {
              backgroundColor: '#4a8b3b',
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  </Container>
</Box>

      {/* =========================================================================== */}

      {/* Service Section */}
      <Container maxWidth="lg" sx={{ py: 5, backgroundColor: '#f4f5f7', }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333', mb: 3, textAlign: 'center' }}>

          <Box component="span" sx={{ color: '#023C6C',  }}>Our</Box> {/* Blue theme color */}
    {' '}
    <Box component="span" sx={{ color: '#66AC4C' }}>Services</Box> {/* Green theme color */}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {serviceCards.map((card, index) => (
            <Link to={card.link} key={index} style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '5px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  minHeight: '350px', // Sets a uniform minimum height for all cards
                  '&:hover': {
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                    borderBottom: '4px solid #023C6C', // Theme-blue color on hover
                  },
                  maxWidth: '300px',
                  width: '100%',
                  p: 3,
                  mb: 4,
                  '&:hover .cardTitle': {
                    color: '#66AC4C',
                  },
                }}
              >
                <Box
                  component="img"
                  src={card.imgSrc}
                  alt={card.title}
                  sx={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  className="cardTitle"
                  sx={{
                    fontWeight: '600',
                    color: '#023C6C',
                    mb: 2,
                    textAlign: 'center',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', textAlign: 'center' }}>
                  {card.description}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
