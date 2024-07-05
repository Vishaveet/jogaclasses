import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      changeNavBackground();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrollNav ? 'navbar scrolled navbar-expand-lg' : 'navbar navbar-expand-lg'}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="pic.jpeg" alt="logo" width="50" height="50" />
        </a>
        <a className={(scrollNav===false)? `navbar-brand tc-white` : `navbar-brand tc-black`} href="#">Shree Hariom Ymmoga</a>
        
        {/* Left-aligned items (empty for now) */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
        </ul>
        
        {/* Center-aligned items (empty for now) */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          
        </ul>
        
        {/* Right-aligned items */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={(scrollNav===false)? `nav-link active tc-white` : `nav-link active tc-black`} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className={(scrollNav===false)? `nav-link active tc-white` : `nav-link active tc-black`} href="#">Ashtanga Yoga</a>
          </li>
          <li className="nav-item">
            <a className={(scrollNav===false)? `nav-link active tc-white` : `nav-link active tc-black`} href="#">Teacher Training</a>
          </li>
          <li className="nav-item">
            <a className={(scrollNav===false)? `nav-link active tc-white` : `nav-link active tc-black`} href="#">Cure Diseases</a>
          </li>
          <li className="nav-item">
            <a className={(scrollNav===false)? `nav-link active tc-white` : `nav-link active tc-black`} href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className={(scrollNav===false)? `nav-link active tc-white` : `nav-link active tc-black`} href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
