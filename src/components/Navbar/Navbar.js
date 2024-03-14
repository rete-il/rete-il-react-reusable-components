import React from 'react';
import './Navbar.css';

// The Navbar component now accepts a location prop
const Navbar = ({
  isLoggedIn,
  location = 'center',
  className,
  borderStyle,
  borderColor,
}) => {
  const locationClass = `navbar-${location}`;
  const combinedClassName = `navbar ${locationClass} ${className || ''}`;
  const customStyle = {
    borderStyle: borderStyle || 'solid', // Default border style
    borderColor: borderColor || 'black', // Default border color
  };

  return (
    <div className={combinedClassName} style={customStyle}>
      <div className="navbar-container">
        {/*
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
  */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          {isLoggedIn ? (
            <a href="/profile">Profile</a>
          ) : (
            <a href="/login">Login</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// Using the Navbar component
//<Navbar isLoggedIn={true} />
