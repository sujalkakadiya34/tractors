import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import Icons from './Icons';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleQuoteClick = () => {
    navigate('/inquiry'); 
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled1' : ''}`}>
        <img src="/assets/tractorlogo.png" alt="logo" className="logo" />

        <button className="buttonnv" onClick={handleQuoteClick}>
          <b>Request a Quote</b>
        </button>

        <button className="material-icons" onClick={toggleSidebar}>
          <span className={`material-icons-span ${scrolled ? 'material-icons-span-scrolled' : ''}`}>
            {showSidebar ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      <div className={`sidebar-left ${showSidebar ? 'visible' : ''}`}>
        <Icons />
      </div>
    </>
  );
}

export default Navbar;
