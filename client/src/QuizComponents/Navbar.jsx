import React from 'react';
import { Nav, NavbarContainer, NavLogo } from '../../GlobalStyles.jsx';

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          Hero Hub
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
