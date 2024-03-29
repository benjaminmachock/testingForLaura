import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs({ setCurrentTab, currentTab }) {
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      {/* <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link' }
          onClick={() => handleTabChange('Home')}
        >
          Home
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleTabChange('About')}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleTabChange('Portfolio')}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleTabChange('Resume')}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;