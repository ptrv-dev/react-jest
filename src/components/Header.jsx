import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
      </div>
    </header>
  );
};

export default Header;
