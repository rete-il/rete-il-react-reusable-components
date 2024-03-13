// Button.js
import React from 'react';
import './Button.css';

const Button = ({ color, label, onClick }) => {
  // Determine the background class based on the `color` prop.
  const backgroundClass =
    color === 'light' ? 'background-light' : 'background-dark';

  return (
    <button
      className={`button padding-2 shadow-none ${backgroundClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
