import React from 'react';
import Instagram from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Email from '../images/email.png';
import Admin from '../images/admin.png';



function ContactUs() {
    return (
        <div>
            <a style={{textDecoration: "none"}} href="https://www.instagram.com" target="_blank">
                <img src={Instagram} alt="Instagram" className='clickable-image' data-toggle="tooltip" title='Visit our Instagram'/>
            </a>
            <a style={{textDecoration: "none"}} href="https://www.facebook.com" target="_blank">
                <img src={Facebook} alt="Facebook" className='clickable-image' data-toggle="tooltip" title='Visit our Facebook page'/>
            </a>
            <a style={{textDecoration: "none"}} href="https://www.twitter.com" target="_blank">
                <img src={Twitter} alt="Twitter" className='clickable-image' data-toggle="tooltip" title='tweet our Twitter'/>
            </a>

            <img src={Email} alt="Email" className='clickable-image' data-toggle="tooltip" title='Copy Email'/>

            <img src={Admin} alt="Admin" className='clickable-image' onClick={() => window.location.href = "/admin"} data-toggle="tooltip" title='Open Admin'/>
            
       </div>
    )
}

export default ContactUs;

{/* <a style={{textDecoration: "none"}} href="#home" target="_blank">
<img src={Admin} alt="Admin" className='clickable-image'/>
</a> */}