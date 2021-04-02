import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        
        <div className="contact-box mt-5 text-center">
            <h4 className="text-color-contact">CONTACT US</h4>
            <h1 style={{color:'white', opacity:'0.8', marginBottom:'40px'}}>Always Connect With Us</h1>
            
            <div className="mb-3 field">
  
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Email Address*" rows="2"></textarea>
</div>
<div className="mb-3 field">
  
  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Subject*" rows="2"></textarea>
</div>
<div className="mb-3 field">
<textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message*" rows="5"></textarea>
</div>

<button className="btn field"><strong>Submit</strong></button>

            
            
        </div>
    );
};

export default ContactUs;