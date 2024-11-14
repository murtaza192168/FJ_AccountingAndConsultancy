import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useFormik } from 'formik'; // For easy form handling

const Contact = () => {
  const [formStatus, setFormStatus] = useState(''); // Form submission status

  // Animation for form elements
  const formAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { tension: 200, friction: 20 },
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 500,
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <Box 
      sx={{
        backgroundColor: '#f7f7f7',
       
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" sx={{paddingTop:'60px'}} >
        {/* Introductory Paragraph */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#023C6C', // Blue color from your theme
            mb: 3,
            textAlign: 'center',
          }}
        >
          We'd Love to Hear From You!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666',
            mb: 5,
            textAlign: 'center',
          }}
        >
          Whether you have a question, feedback, or just want to say hello, please reach out to us. We look forward to connecting with you.
        </Typography>

        {/* Form Section */}
        <animated.div style={formAnimation}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                backgroundColor: 'transparent', // No card, just the form itself
                padding: 4,
                width: '100%',
                animation: 'fadeIn 0.5s ease-in-out',
              }}
            >
              {/* Name Input */}
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#555',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#023C6C',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#66AC4C', // Green color on hover
                  },
                }}
              />

              {/* Email Input */}
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                required
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#555',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#023C6C',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#66AC4C',
                  },
                }}
              />

              {/* Message Input */}
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#555',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#023C6C',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#66AC4C',
                  },
                }}
              />

              {/* Submit Button */}
              <animated.div style={buttonAnimation}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#66AC4C',
                    color: 'white',
                    padding: '12px 24px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#4a8b3b',
                    },
                    borderRadius: '1px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </animated.div>

              {/* Status Message */}
              {formStatus === 'success' && (
                <Typography sx={{ color: 'green', mt: 2, textAlign: 'center' }}>
                  Your message has been sent successfully. We'll get back to you soon.
                </Typography>
              )}
              {formStatus === 'error' && (
                <Typography sx={{ color: 'red', mt: 2, textAlign: 'center' }}>
                  Something went wrong. Please try again later.
                </Typography>
              )}
            </Box>
          </form>
        </animated.div>
      </Container>
    </Box>
  );
};

export default Contact;
