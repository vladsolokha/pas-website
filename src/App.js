import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown , faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Pictures from './components/Pictures';
import logo from './assets/Pro Audio Service Logo 4.png';
import map from './assets/map_static_img.jpg';
import './App.css';

function App() {

  const googleDirectionsUrl = "https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4"
  
  // Transition consts for 'see hours' button
  const [hoursButton, setHoursButton] = useState(true);
  const [hoursMessage, setHoursMessage] = useState(false);
  const [seeMoreButton, setSeeMoreButton] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
      
  return (
    <div className="App" >
      <div className="App-header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Pro Audio Service Logo" />
        </div>
        <div className="app-sub-header">
          <h2>Electronics and audio equipment repair and service.</h2>
          <h2>Specialized repair of legacy and modern electronics and hardware.</h2>
        </div>
      </div>

      <div className="bg-img">
        
        <Pictures />

        <div className="services-directions-container">  
          <div className="services-container">
            <h3 className='services-text'>Services:</h3>
            <ul class="scroll-container">
                <li>pro and home audio speakers repair</li>
                <li>recone, refoam, replace</li>
                <li>DJ equipment</li>
                <li>PA speakers</li>
                <li>power amps</li>
                <li>receivers</li>
                <li>turntable</li>
                <li>tape deck</li>
                <li>CD players</li>
                <li>audio mixers</li>
                <li>wireless and wired microphones</li>
                <li>rebuild speaker drivers</li>
                <li>cable repair and custom build</li>
                <li>pro and home audio speakers repair</li>
                <li>recone, refoam, replace</li>
                <li>DJ equipment</li>
                <li>PA speakers</li>
                <li>power amps</li>
                <li>receivers</li>
                <li>turntable</li>
                <li>tape deck</li>
                <li>CD players</li>
                <li>audio mixers</li>
                <li>wireless and wired microphones</li>
                <li>rebuild speaker drivers</li>
                <li>cable repair and custom build</li>
            </ul>

            {/* <ul>
              <li>pro and home audio speakers repair</li>
              <li>recone, refoam, replace</li>
              <li>DJ equipment</li>
              <li>PA speakers</li>
              <li>power amps</li>
              <li>receivers</li>
            </ul>
            <div>
              {seeMoreButton && (
                <div className='fa-caret-container' onClick={() => {setIsExpanded(true)}}>
                  <div className='caret-text'>see more</div>
                  <FontAwesomeIcon icon={faCaretDown} className='fa-caret'/>
                </div>
              )}
              <CSSTransition 
                in={isExpanded}
                timeout={222}
                classNames="services-expand"
                unmountOnExit
                onEnter={() => setSeeMoreButton(false)}
                onExited={() => setSeeMoreButton(true)}>
                <div className='services-expand'>
                  {isExpanded && (
                    <ul>  
                      <li className='hidden-services'>vintage audio equipment</li>
                      <li>turntable</li>
                      <li>tape deck</li>
                      <li>CD players</li>
                      <li>audio mixers</li>
                      <li>wireless and wired microphones</li>
                      <li>rebuild speaker drivers</li>
                      <li>cable repair and custom build</li>
                    </ul>
                  )}
                </div>
              </CSSTransition>
              {!seeMoreButton && (
                <div className='fa-caret-container' onClick={() => {setIsExpanded(false)}}>
                      <div className='caret-text'>see less</div>
                      <FontAwesomeIcon icon={faCaretUp} className='fa-caret'/>
                </div>
              )}
            </div>   */}
          </div>

          {/* Hours section */}
          <div className='middle-section'>
            
            <div className='hours-container'> 
              {hoursButton && (
                <button onClick={() => {setHoursMessage(true)}}>
                  Open Hours
                </button>
              )}
              <CSSTransition 
                in={hoursMessage}
                timeout={333}
                classNames="hours"
                unmountOnExit
                onEnter={() => setHoursButton(false)}
                onExited={() => setHoursButton(true)}>
              
                <button onClick={() => {setHoursMessage(false)}}>
                  Weekdays 10-5
                </button>
              </CSSTransition>         
            </div>


            {/* Address section */}
            <div className='address-section'>
              
              <a 
                href='https://maps.apple.com/?q=Pro+Audio+Services+LLC&address=657,N+James+Rd,Columbus,Ohio&11=39.98687,82.90795&dirflg=d'
                alt='directions to Pro Audio Services LLC using Apple maps'
                target='_blank' rel='noopener noreferrer'>
                <button>
                  Get Directions
                </button>
              </a>
            
            </div>
                    
          </div>

        </div> 

        <div className='directions-section'>
          {/* Directions to Pro Audio Service */}
          <a href={googleDirectionsUrl} target='_blank' rel='noopener noreferrer' alt='directions to Pro Audio Services LLC using google maps'>

              {/* Google Static Map with API */}
              <img 
                  // src="https://maps.googleapis.com/maps/api/staticmap?center=39.986736,-82.907611&zoom=10&scale=2&size=300x200&maptype=roadmap&key=AIzaSyAe9vA21yla0hy2nNjWXjuLeAJuB0Frpko&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C657+N+James+Rd,+Columbus,+OH+43219"
                  src={map}
                  width="300"
                  alt="Google Maps directions" />
              <div className='img-overlay'>Directions to Pro Audio Services</div>
          
          </a>
              
        </div> 
        
        <div className='reviews-section'>
          
          <h3 className='review-note'>
            Leave a Review  
          </h3>
          

          <div className='review-links'>

            <a 
              href='https://g.page/r/CUSrgI_mm60DEAg/review' 
              target="_blank" rel="noreferrer"
              alt='google reviews page for Pro Audio Services LLC'>
              <button>Google
              </button>
            </a>

            <a 
              href='https://www.yelp.com/' 
              target="_blank" rel="noreferrer"
              alt='Yelp reviews page for Pro Audio Services LLC'>
              <button>Yelp
              </button>
            </a>
          
          </div>
          
          
          <h3 className='review-note'>
            Contact Us 
          </h3>
          
          <div className='contact-links'>
            {/* Phone number section */}
            <div className='phone-number-section'>
                <a href='tel::(614)340-3373' for='call us for a quote'>
                  <button>
                    Call
                  </button>
                </a>
            </div>
              
            {/* email section */}
            <div className='email-section'>
              <a href='mailto:pasohio@gmail.com'>
                <button>
                  Email
                </button>
              </a>
            </div>
          </div>

        </div>
    
      </div>
    

    </div>
  );
}

export default App;
