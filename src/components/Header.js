import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img id='beer-icon' src={require("../Beer icon.svg")} alt='' />
        <h1 id='title'>BREW FIND</h1>
      </div>
      <div className='nav-links'>
        <Link to='/home'>Home</Link>
        <Link to='/search'>Search</Link>
      </div>
    </nav>
  )
}

export default Header;
