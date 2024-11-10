import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box my={5}>
        <Typography variant="h3" color="primary" gutterBottom>
          F J Accounting & Consultancy
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Welcome to F J Accounting & Consultancy, where we provide expert financial guidance and support.
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
          Learn More About Us
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
