import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li className="sample"><a href="#">HopeHarvest</a></li>
          <li><button className='but'>START A FUNDRAISER</button></li>
          <li><a href="#">CONTACT US</a></li>
          <li><Link to='/login'>LOGIN</Link></li>
          <li><a href="#">DONATE</a></li>
          <li><Link to='/'>HOME</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
