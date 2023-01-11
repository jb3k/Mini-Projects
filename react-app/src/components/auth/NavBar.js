
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const NavBar = () => {
  return (
    <nav>
      <div style={{ marginBottom: '30px' }}>
        <NavLink to='/' exact={true} activeClassName='active' style={{ color: 'black' }}>
          Home
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
