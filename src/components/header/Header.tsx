import React from 'react';
import './header.css';

const Header = React.memo(() => {
  return (
    <nav className='header'>
      <div className='header__logo'>Squad Management Tool</div>
      <div className='header__profile'>John Doe</div>
    </nav>
  );
});

export default Header;
