import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

 
  const closeMobileMenu = () => setClick(false);
 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <a href="/#" style={{color:"red" }}>L </a>uxusAutos
            <i class='fab fa-typo3' />
          </Link>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/buycar'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                BUY CAR
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sellcar'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SELL CAR
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rentcar'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                RENT CAR
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT Us
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;