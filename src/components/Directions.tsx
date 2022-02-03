import React, {useRef, useState, useEffect} from 'react';


function Directions() {
        
    const googleMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=columbus&zoom=10&scale=2&size=300x200&maptype=roadmap&key={process.env.REACT_APP_MAPS_STATIC_API}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C657+N+James+Rd,+Columbus,+OH+43219"

    return (
        <div className='directions-section'>
            {/* Directions to Pro Audio Service */}
            <a href="https://www.google.com/maps/dir//Pro+Audio+Service+LLC/@39.9834382,-83.0593351,11.73z/data=!5m1!1e4">

                {/* Google Static Map with API */}
                <img src={googleMapUrl} width="300"
                alt="Map with pin that links to Google Maps directions" />
                
            
            </a>
          
        </div>
    );
}

export default Directions;