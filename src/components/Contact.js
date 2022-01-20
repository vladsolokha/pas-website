import React, {useState} from 'react';

function Contact() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [person, setPerson] = useState({ 
        name: '',
        email: '',
        phone: '',
        message: 'I was wondering about availability and rates. I need help with '
    });

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
        <div className='contact-section'>
        <a href='tel::(614) 340-3373'>
          <h3>Call (614) 340-3373</h3>
        </a>
        
        <button className="get-quote-button" onClick={handleQuoteOpenForm}>
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
            
            {error !== null &&
              <p className="Error">
                {error.message}
              </p>
            }

          </form>
        }
      </div>  
    );
}

export default Contact;