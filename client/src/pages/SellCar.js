import React from 'react'
import Container from '../sellform/Container' 
import CompanyInfo from '../contactform/CompanyInfo'
import Navbar1 from '../components/Navbar1'
import SellForm from '../sellform/SellForm'
function SellCar() {
    
  return (
    <div>
      <Navbar1 />
      <section className='sellimg' id='sellimg'>
            
        <Container>
        <Container wrapper>
            <CompanyInfo/>
            <SellForm />
            </Container>
        </Container>
        </section>
    </div>
  );
}


export default SellCar 