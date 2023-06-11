import React from 'react';
import Logo from '../../assets/lodgn.svg';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className='side-nav '>
      <div>
        <div className='logo'>
          <img src={Logo} alt='lodgn' />
        </div>
        <div>
          <ul className='nav-links'>
            <li className='selected'>Current requests</li>
            <li>Ongoing stays</li>
            <li>Previous stays</li>
            <li>Reports</li>
          </ul>
        </div>
      </div>
      <div className='nav-footer'>
        <button className='nav-button'>Log-Out</button>
        <p>Help-Desk</p>
        <p>786-874 9988</p>
      </div>
    </div>
  );
};

export default SideNav;
