import React, {useState} from 'react';

function Contact() {
  const [hoursShown, setHoursShown] = useState(false);
  
  return (
      
    <div className='contact-section'>
      
      {/* Phone number section */}
      <a href='tel::(614) 340-3373'>
        <h3>Call (614) 340-3373</h3>
      </a>

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
      
      {/* Address section */}
      <div className='message-section'>
        <button className="message-button">
          Message Us
        </button>
      </div>
      
    </div>  
  )
}

export default Contact;