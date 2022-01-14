import React, {useState} from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Pro Audio Services LLC</h1>
        <h2>Electronics repair and service located in Columbus, Ohio</h2>
        <h3>Get Directions: 657 N. James Rd. Columbus, OH 43219</h3>
        <h3>Open Monday-Friday 10am-5pm</h3>
        <h3>Contact by phone - Call Alex (614) 340-3373</h3>
        <h3><button>Get Quote</button></h3>
        <h4>Name</h4>
        <input type="text" />
        <h4>Phone Number</h4>
        <input type="phone" />
        <h4>Email</h4>
        <input type="email" required />
        <h4>How can we help you?</h4>
        <textarea rows="4" cols="50" placeholder="I was wondering about availability and rates. I need help with..." />
      </div>
    </div>
  );
}

export default App;
