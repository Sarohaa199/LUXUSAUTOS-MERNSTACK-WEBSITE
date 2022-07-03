import {Button} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../media/bg.mp4' autoPlay loop muted />
      <h5>ENGINEERED TO MOVE THE <em>HUMAN SPIRIT.</em></h5>
            <h6>WE DEAL IN THE MOST LUXURIOUS CARS IN THE WORLD</h6>
            <div class="field field_v2">
            <Button className='btn6'> <Link to={'/buycar'}> BROWSE COLLECTION</Link></Button>
      </div>
    </div>
  );
}

export default HeroSection;
