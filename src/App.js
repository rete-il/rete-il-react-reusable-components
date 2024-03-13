import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Using the Button component */}
        <Button
          color="light" // or dark
          label="Click Here"
          onClick={() => console.log('Button clicked!')}
        />
      </header>
    </div>
  );
}

export default App;
