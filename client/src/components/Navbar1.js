import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navbar1.css';
import { Button,Menu, Dropdown } from 'antd';
function Navbar1() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'))

 
  const closeMobileMenu = () => setClick(false);
  const menu = (
    <Menu>
       
      <Menu.Item>
        <a
         
          href="/userbookings"
        >
          Booking
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>


         <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'red'}}>Logout</li>
    </Menu.Item>
  </Menu>
);
 

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
                ABOUT US
              </Link>
            </li>
          </ul>
          <div >
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button class='btn'>{user.username}</Button>
          </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;