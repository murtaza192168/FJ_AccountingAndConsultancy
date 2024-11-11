import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar({ isTopPanelVisible }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:900px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About Us', link: '/about-us' },
    { text: 'Services', link: '/services' },
    { text: 'Contact', link: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: isTopPanelVisible ? '50px' : '0',
        transition: 'top 0.3s ease',
        backgroundColor: 'white',
        zIndex: 1090,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow at the bottom
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }} >
      <Link to="/">
          <img
            src="./src/assets/nav/company_logo.png"  // Replace with the actual path to your logo image
            alt="Company Logo"
            style={{
              height: '60px',             // Adjust height as needed
              width: 'auto',
              marginRight: '2rem',
            }}
          />
        </Link>

        {isLargeScreen ? (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {menuItems.map((item) => (
              <Link key={item.text} to={item.link} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#023C6C',
                    cursor: 'pointer',
                    '&:hover': { color: '#66AC4C' },
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            ))}
          </div>
        ) : (
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: '#023C6C' }} />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        
        <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end', margin: '0.5rem' }}>
          <CloseIcon sx={{ color: '#023C6C' }} />
        </IconButton>
        <List sx={{ width: 250, paddingLeft: '1rem' }}>  {/* Left-aligned items with padding */}
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} sx={{ textAlign: 'center', color: '#023C6C' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
