import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar({ isTopPanelVisible }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:900px)');

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about-us' },
    { text: 'Services', link: '/services' },
    { text: 'Contact', link: '/contact' },
  ];

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  // Close dropdown when clicking outside or on scroll/resize
  const handleCloseDropdown = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    }
  };

  // Add event listeners for scroll and resize to close the dropdown
  useEffect(() => {
    if (!isLargeScreen) {
      window.addEventListener('scroll', handleCloseDropdown);
      window.addEventListener('resize', handleCloseDropdown);
      document.addEventListener('click', handleCloseDropdown);
    }
    return () => {
      window.removeEventListener('scroll', handleCloseDropdown);
      window.removeEventListener('resize', handleCloseDropdown);
      document.removeEventListener('click', handleCloseDropdown);
    };
  }, [dropdownOpen, isLargeScreen]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: isTopPanelVisible ? '50px' : '0',
        transition: 'top 0.3s ease',
        backgroundColor: 'white',
        zIndex: 1090,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',  // Soft shadow
        padding: '0 2rem',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <Link to="/">
          <img
            src="./src/assets/nav/company_logo.png"  // Replace with the actual path to your logo image
            alt="Company Logo"
            style={{
              height: '60px',
              width: 'auto',
              marginRight: '2rem',
            }}
          />
        </Link>

        {/* Desktop View Navbar Items */}
        {isLargeScreen ? (
          <Box sx={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Link key={item.text} to={item.link} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#023C6C',
                    fontWeight: 500,
                    fontSize: '16px',
                    paddingBottom: '5px',
                    position: 'relative',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#66AC4C',
                    },
                    '&:hover::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '0',
                      left: '0',
                      backgroundColor: '#66AC4C',
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.25s ease-out',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '0',
                      left: '0',
                      backgroundColor: '#66AC4C',
                      transform: 'scaleX(0)',
                      transformOrigin: 'bottom left',
                      transition: 'transform 0.25s ease-out',
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </Box>
        ) : (
          // Mobile View - Menu Icon and Dropdown
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={(e) => { e.stopPropagation(); toggleDropdown(); }}>
            <MenuIcon sx={{ color: '#023C6C' }} />
          </IconButton>
        )}
      </Toolbar>

      {/* Dropdown Menu for Mobile View */}
      {!isLargeScreen && dropdownOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1080,
            padding: '1rem 2rem',
            animation: 'slideDown 0.3s ease-out',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {menuItems.map((item) => (
            <Link key={item.text} to={item.link} style={{ textDecoration: 'none' }} onClick={handleCloseDropdown}>
              <Typography
                variant="body1"
                sx={{
                  color: '#023C6C',
                  padding: '0.75rem 0',
                  
                  textAlign: 'left',
                  fontWeight: 500,
                  display: 'block',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#66AC4C',
                    backgroundColor: 'rgba(173, 216, 230, 0.2)',

                  },
                }}
              >
                {item.text}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;
