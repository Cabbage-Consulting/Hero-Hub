import React, { useState } from 'react';
import { Nav, NavLogo, Pfp, NavUsername, UserInfo } from '../../GlobalStyles';

function Navbar() {
  const [settings, setSettings] = useState(false);
  return (
    <Nav>

        <NavLogo to="/">
          Hero Hub
        </NavLogo>


        <Pfp src={`https://steamuserimages-a.akamaihd.net/ugc/786371856221183225/2F04B32CA10AD1ADBC01CE5D4DC6F7AF0E96AE6C/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true`} onClick={() => {setSettings(true)}} />

        <NavUsername>
          username here
        </NavUsername>

    </Nav>
  );
}

export default Navbar;
// Will need link to users pfp post login
