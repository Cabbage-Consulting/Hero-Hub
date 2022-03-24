import React, { useState, useRef, useEffect } from 'react';
import {
  Nav, NavLogo, Pfp, NavUsername, UserInfo, PfpButtons,
} from '../../GlobalStyles';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const pageClickEvent = (e) => {
      setIsActive(!isActive);
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  return (
    <Nav>
      <NavLogo to="/">Hero Hub</NavLogo>
      <UserInfo>
        <Pfp src={'https://steamuserimages-a.akamaihd.net/ugc/786371856221183225/2F04B32CA10AD1ADBC01CE5D4DC6F7AF0E96AE6C/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'} onClick={() => { setIsActive(true); }} />
        <NavUsername>
          username
        </NavUsername>
        {isActive &&
          <>
            <div>
              <PfpButtons>Account</PfpButtons>
            </div>
            <div>
              <PfpButtons>Leaderboard</PfpButtons>
            </div>
          </>
        }
      </UserInfo>
    </Nav>
  );
}

export default Navbar;
// Will need link to users pfp post login
