import React, {useState} from 'react';
import directionsImage from '../assets/prs-map.PNG';

function Directions() {
    const [hoursShown, setHoursShown] = useState(false);

    return (
        <div className='directions-section'>
            
            <a 
            className="directions-image-container"
            href='https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4'
            target="_blank"
            rel="noopener noreferrer">
                <img 
                    className='directions-image'
                    src={directionsImage}
                    alt="link to Google Maps" />
                <div className="directions-image-middle">
                    <div className="directions-image-text">Get Directions</div>
                </div>
                
            </a>
        

            <h3>657 N. James Rd. Columbus, OH 43219</h3>
            
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
        
        </div>
    );
}

export default Directions;