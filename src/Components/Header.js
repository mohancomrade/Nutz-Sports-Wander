import React from 'react';
import "./Header.css";
import sportswander from "../images/Frame 220 (1).png";


function Header() {
  return (
    <div>
        <div className='sport-wander'>
        <img src={sportswander}class="img-fluid" alt=''/>
        </div>
    </div>
  )
}

export default Header;
