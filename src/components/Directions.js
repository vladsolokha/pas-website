import React from 'react';
import './Directions.css';

function Directions() {
        
    const googleDirectionsUrl = "https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4"

    return (
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
    );
}

export default Directions;