import React, {useState} from 'react';
import Pictures from './components/Pictures';
import Reviews from './components/Reviews';
import Directions from './components/Directions';
import Contact from './components/Contact';
import './App.css';

function App() {

  const googleDirectionsUrl = "https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4"
  const [hoursShown, setHoursShown] = useState(false);

    
  return (
    <div className="App">
      <div className="App-header">
        <h1>Pro Audio Services LLC</h1>
        <h2>Electronics and audio equipment repair and service.</h2>
        <h2>Specialized repair of legacy and modern electronics and hardware.</h2>
      </div>

      <Pictures />

      <div className="services-directions-container">  
        <div className="services-container">
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

        <div className='directions-section'>
            {/* Directions to Pro Audio Service */}
            <a href={googleDirectionsUrl} target='_blank' rel='noopener noreferrer'>

                {/* Google Static Map with API */}
                <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=39.986736,-82.907611&zoom=10&scale=2&size=300x200&maptype=roadmap&key=AIzaSyAe9vA21yla0hy2nNjWXjuLeAJuB0Frpko&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C657+N+James+Rd,+Columbus,+OH+43219"
                    width="300"
                    alt="Map with pin that links to Google Maps directions" />
                
            
            </a>
            
        </div>
  
      </div> 

      <div className='reviews-section'>
        <a 
          href='https://g.page/r/CUSrgI_mm60DEAg/review' 
          target="_blank" rel="noopener noreferrer">
        Click here to leave us a Review!
        </a>
        
        <h3 className='review-note'>If we did not meet your service expectations please contact us and we will be happy to resolve the issue.</h3>
      </div>
    
      <div className='contact-section'>
      
        {/* Phone number section */}
        <div className='phone-number-section'>
          <button>
              Call (614) 340-3373
            <a href='tel::(614) 340-3373'>
            </a>
          </button>
        </div>

        {/* Hours section */}
        <div className='hours-of-operation'>
          <button 
              onMouseEnter={() => {setHoursShown(true)}}
              onMouseLeave={() => {setHoursShown(false)}}>
          See Hours of Operation
          {hoursShown && (
              <div className='hours-of-operation-shown'>
              We are Open Monday - Friday 10 am - 5 pm
              </div>
          )}
          </button>
        </div>
        
        {/* Message section */}
        <div className='message-section'>
          <button className="message-button">
            Message Us
          </button>
        </div>
        
      </div>  
    
    </div>
  );
}

export default App;
