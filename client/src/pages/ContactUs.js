import React, { Component } from 'react'
import Navbar1 from '../components/Navbar1'
//import all child components
import Container from '../contactform/Container'
import CompanyInfo from '../contactform//CompanyInfo'
import ContactForm from '../contactform/ContactForm'
function ContactUs() {
    
    return (
        <div>
            <Navbar1 />
            <h3 className='heading'>Contact Us</h3>
        <Container>
            
            <Container wrapper>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.277105201217!2d77.12572151507608!3d28.919822382305316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dae878d2dcaf1%3A0xdd00179e64a0846f!2sSRM%20University%2C%20Delhi-NCR%2C%20Sonepat!5e0!3m2!1sen!2sin!4v1638506258593!5m2!1sen!2sin" width="600" height="640"  allowfullscreen="" loading="lazy"></iframe>
                <ContactForm />
            </Container>
            
        </Container>
        
         
        <div className='newsletter'>
         <CompanyInfo />
        </div>
        </div>
    )
}

export default ContactUs 