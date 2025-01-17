import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <div>
      {
          <nav className="navbar">
            <div className="navbar-links">
              <div className='navbaritem'><Link to="/interference">Interference</Link></div>
              <div className='navbaritem'><Link to="/backoff">Back-Off</Link></div>
              <div className='navbaritem'><Link to="/minimumsize">Minimum Size</Link></div>
              <div className='navbaritem'><Link to="/findit">Find it</Link></div>
            </div>
          </nav>
      
      /* Your component JSX here */}
    </div>
  );
};

export default NavBar;