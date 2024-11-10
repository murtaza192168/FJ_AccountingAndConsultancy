import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function Navbar( {isTopPanelVisible} ) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLargeScreen = useMediaQuery('(min-width:900px)'); // Detect screen size

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
    <AppBar position="fixed" color="primary" elevation={0} 
    sx={{
        top: isTopPanelVisible ? '50px' : '0', // Adjust position based on TopPanel visibility
        transition: 'top 0.3s ease', // Smooth transition
        zIndex: 1090,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          F J Accounting & Consultancy
        </Typography>


        {/* Show navbar items only on large screens */}
        {isLargeScreen ? (
            <div style={{ display: 'flex', gap: '1rem' }}>
            {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
              <Typography
                key={item}
                variant="body1"
                component="a"
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                sx={{
                  cursor: 'pointer',
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </div>
        ) : (
          // Show Hamburger icon on smaller screens
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
       
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
