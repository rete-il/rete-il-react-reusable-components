import React from 'react';
import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Using the Button component */}
        <Button
          label="Dark Button"
          onClick={() => console.log('Dark button clicked')}
          backgroundColor="darkblue" // Text will be white
        />

        <Button
          label="Light Button"
          onClick={() => console.log('Light button clicked')}
          backgroundColor="lightblue" // Text will be black
        />

        <Navbar
          isLoggedIn={true}
          location="left"
          className="extra-navbar-class"
          borderStyle="dashed"
          borderColor="grey"
        />
      </header>
    </div>
  );
}

export default App;
