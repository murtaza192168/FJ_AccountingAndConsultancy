import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar( {isTopPanelVisible} ) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
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
        <div className="desktop-menu">
          {menuItems.map((item, index) => (
            <Button
            key={index}
            color="inherit"
            component={Link}
            to={item.link}
            sx={{
              mx: 1,
              '&:hover': {
                backgroundColor: 'secondary.main',
                color: 'white',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            {item.text}
          </Button>
          
          ))}
        </div>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
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
