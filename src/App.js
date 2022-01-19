import React, {useState} from 'react';
import directionsImage from './assets/prs-map.PNG';

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [person, setPerson] = useState({ 
    name: '',
    email: '',
    phone: '',
    message: 'I was wondering about availability and rates. I need help with '
  });

  const [hoursHover, setHoursHover] = useState({display: 'Hours of Operation'});

  const handleQuoteOpenForm = () => {
    setIsQuoteOpen(true);
  }

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  function handlePhoneChange(e) {
    setPerson({
      ...person,
      phone: e.target.value
    });
  }

  function handleMessageChange(e) {
    setPerson({
      ...person,
      message: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsSubmitted(true);
      console.log(person);
    } catch (err) {
      setError(err);
    }
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Pro Audio Services LLC</h1>
        <h2>Electronics and audio equipment repair and service</h2>
        <h2>Specializing in the industry for 30+ years</h2>
        <h3>Address: 657 N. James Rd. Columbus, OH 43219</h3>
        
        <a 
          href='https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4'
          target="_blank"
          rel="noopener noreferrer">
          <img 
          className="directions-image"
          src={directionsImage} 
          alt="Map with pin that links to Google Maps directions" />
          {/* <span>Get Directions to Pro Audio Service LLC</span> */}
        </a>
        
        <h2 
          className='hours-of-operation'
          onMouseEnter={e => {
            setHoursHover({display: 'Monday-Friday 10am-5pm'})}}
          onMouseLeave={e => {
            setHoursHover({display: 'Hours of Operation'})}}>
        </h2>
        
        <a href='tel::614-867-5309'>
          <h3>Contact by phone - Call our Specialists (614) 340-3373</h3>
        </a>
        
        <button className="get-quote" onClick={handleQuoteOpenForm}>
          {"Get a Quote"} 
        </button>
        
        {isQuoteOpen &&
          <form className="quote-form" onSubmit={handleSubmit}>
            <label>Name           
              <input 
                placeholder='Enter your name'
                value={person.name}
                onChange={handleNameChange} />
            </label>

            <label>Phone Number
              <input 
                placeholder='Enter your phone number'
                type="phone"
                value={person.phone}
                onChange={handlePhoneChange} />
            </label>

            <label>Email*
              <input 
                placeholder='Enter your email'
                type="email" 
                required
                value={person.email}
                onChange={handleEmailChange} />
            </label>

            <label>How can we help you? 
              <textarea 
                rows="4" cols="20" 
                value={person.message}
                onChange={handleMessageChange} />
            </label>

            <button className="submit-quote" type="submit">Submit</button>

            {isSubmitted &&
              <div className="submit-success">
                <h3>Thank you for your submission!</h3>
                <p>We will be in touch with you shortly.</p>
              </div>
            }

          </form>
        }

        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }

      </div>
    </div>
  );
}

export default App;
