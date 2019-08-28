import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar'>
      <div>
        <img id='beer-icon' src={require("../Beer icon.svg")} alt='' />
      </div>
      <div>
        <h1 id='title'>Brew Find</h1>
      </div>
      <div className='nav-links'>
        <Link to='/home'>Home</Link>
        <Link to='/search'>Search</Link>
      </div>
    </nav>
  )
}

export default Header;
