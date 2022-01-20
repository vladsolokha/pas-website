import React from 'react';
import Pictures from './components/Pictures';
import Reviews from './components/Reviews';
import Directions from './components/Directions';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Pro Audio Services LLC</h1>
        <h2>Electronics and audio equipment repair and service.</h2>
        <h2>Specialized repair of legacy and modern electronics and hardware.</h2>
        <h3 className='services-text'>Services:</h3>
        <ul>
          <li>recone speakers</li>
          <li>receivers</li>
          <li>projectors</li>
          <li>audio equipment</li>
          <li>wireless equipment</li>
          <li>and much more...</li>
        </ul>        
      </div>

    <Pictures /> 
    <Directions /> 
    <Reviews />
    <Contact />
    
    </div>
  );
}

export default App;
