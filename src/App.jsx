import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPanel from './components/TopPanel/TopPanel';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function App() {

  const [showTopPanel, setShowTopPanel] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowTopPanel(false); // Hide top panel on scroll down
      } else {
        setShowTopPanel(true);  // Show top panel on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
       {/* TopPanel will slide based on scroll direction */}
      <TopPanel isVisible={showTopPanel} />
       {/* Navbar position depends on showTopPanel state */}
      <Navbar isTopPanelVisible={showTopPanel} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
