import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const WrapperCompanyInfo=styled.div`
    padding: 6rem 2rem;
    text-align: center;
`; 

function CompanyInfo(){
    return(
        <section class="footer" id="footer">
    
        <div class="box-container">
    
            <div class="box "  >
                <h3 >contact info</h3>
                <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
                <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
                <a href="#"> <i class="fas fa-envelope"></i> paritosh1188@gmail.com </a>
                <a href="#"> <i class="fas fa-map-marker-alt"></i> New Delhi, india - 110009 </a>
            </div>
    
            <div class="box">
                <h3>contact Socials</h3>
      <a href="https://www.facebook.com/luxusAutos"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x"  />
        <a>Facebook</a>
      </a>
      <a href="https://www.twitter.com/luxusAutos" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <a>Twitter</a>
      </a>
      <a href="https://www.instagram.com/luxusAutos"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <a>Instagram</a>
      </a>
            </div>
    
        </div>
    
        <div class="credit"> created by Paritosh & Aman | all rights reserved </div>
    
    </section>
    )
}

export default CompanyInfo