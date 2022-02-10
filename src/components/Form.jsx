//initial state: fields empty, load captcha, submit button disabled
//user fills out email, phone number becomes optional
//user fills out phone number, email becomes optional
//user fills out message
//if email or phone and message and captcha
//  enable submit button
//on submit 
//  if email is filled out, send email to us (from recipient email, subject=message from $email, if phone number include in message in body, message in body)
//      confirmation message displayed
//      initial state loads
//  if phone filled out, send text to us (from recipient phone number, message in body, email in body)
//      confirmation message displayed
//      initial state loads
//  if captcha failed, display error message, keep state form fields filled out

import React, { useState, useEffect } from 'react';
import './Form.sass';

export default function Form() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [submitButtonState, setSubmitButtonState] = useState(false);
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setSubmitButtonState(true)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
        setSubmitButtonState(true)
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(email, phone, message, captcha)
    }

    
    return (
        <div className="form-component">
            <form onSubmit={e => handleFormSubmit(e.target.value)}>
                <label>email
                    <input type="email" name="email" value={email} onChange={handleEmailChange} required />
                </label>
                <label>phone
                    <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} />
                </label>
                <label className='text-area'>message
                    <textarea type='text' name="message" value={message} onChange={handleMessageChange} required />
                </label>
                <button disabled={!submitButtonState} type="submit">Submit</button>
                
                
                <div className='captcha-container'>
                    <captcha />
                </div>

            </form>
        </div>
    );
}

