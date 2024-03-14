import React from 'react';
import './Button.css';

const Button = ({ label, onClick, backgroundColor }) => {
  // A simple function to determine if the background color is dark
  const isDarkBackground = (color) => {
    // This is a simplistic check, and you may want to use a proper color library
    // for more complex scenarios where you need to check the luminance of the color
    const darkColors = [
      'black',
      'darkblue',
      'darkred',
      'darkgreen',
      'purple',
      'maroon',
    ];
    return darkColors.includes(color.toLowerCase());
  };

  // Determine button text color based on background color
  const textColor = isDarkBackground(backgroundColor) ? 'white' : 'black';

  // Apply styles dynamically based on props
  const buttonStyle = {
    backgroundColor,
    color: textColor,
    // Add other styles as needed
  };

  return (
    <button className="button" onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
