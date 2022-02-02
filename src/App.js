import React, {useState} from 'react';
import directionsImage from './assets/prs-map.PNG';

function App() {

  const [hoursShown, setHoursShown] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Pro Audio Services LLC</h1>
        <h2>Electronics and audio equipment repair and service.</h2>
        <h2>Specialized repair of legacy and modern electronics and hardware.</h2>        
        
      <div className="pictures-section">

      </div> 

      <div className='reviews-section'>
        <a href='https://g.page/r/CUSrgI_mm60DEAg/review' target="_blank" rel="noopener noreferrer">Please leave us a Google Review</a>
        
      </div>

      <div className='directions-section'>
        <a 
          href='https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4'
          target="_blank"
          rel="noopener noreferrer">
          <img 
          className="directions-image"
          src={directionsImage} 
          alt="Map with pin that links to Google Maps directions" />
        </a>
        
        <div className='hours-of-operation'>
          <button 
            onMouseEnter={() => {setHoursShown(true)}}
            onMouseLeave={() => {setHoursShown(false)}}>
          See Hours of Operation
          </button>

          {hoursShown && (
            <div className='hours-of-operation-shown'>
              We are Open Monday - Friday 10 am - 5 pm
            </div>
          )}
        </div>
      </div>  

        <a href='tel::614-867-5309'>
          <h3>Contact by phone - Call our Specialists (614) 340-3373</h3>
        </a>
        
        <button className="get-quote">
          {"Get a Quote"} 
        </button>
        
        

        <h3>657 N. James Rd. Columbus, OH 43219</h3>


      </div>
    </div>
  );
}

export default App;
