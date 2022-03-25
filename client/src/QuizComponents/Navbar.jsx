import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import {
  Nav, NavLogo, Pfp, NavUsername, UserInfo, PfpButtons, HeroHub, LoginButton,
} from '../../GlobalStyles';

const defaultPfp = 'https://steamuserimages-a.akamaihd.net/ugc/786371856221183225/2F04B32CA10AD1ADBC01CE5D4DC6F7AF0E96AE6C/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [userInformation, setUserInformation] = useState(false);
  const handleSignOut = (e) => {
    e.preventDefault();
    delete window.localStorage.currentUser;
    window.location.reload(false);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      e.preventDefault();
      setIsActive(!isActive);
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  useEffect(() => {
    if (window.localStorage.currentUser) {
      setUserInformation(JSON.parse(window.localStorage.currentUser));
    }
  }, [signIn]);

  return (
    <Nav>
      <NavLogo to="/">
        <HeroHub src="https://fontmeme.com/permalink/220324/ae15e9855bcec955ae197139e69fdd07.png" />
      </NavLogo>

      {window.localStorage.currentUser
        ? (
          <UserInfo>
            <Pfp
              src={userInformation.pfp_url ? userInformation.pfp_url : defaultPfp}
              onClick={() => { setIsActive(true); }}
            />
            <NavUsername>
              {userInformation.username}
            </NavUsername>
            {isActive
              && (
                <>
                  <div>
                    <PfpButtons>Account</PfpButtons>
                  </div>
                  <div>
                    <PfpButtons>Leaderboard</PfpButtons>
                  </div>
                  <div>
                    <PfpButtons onClick={handleSignOut}>Sign Out</PfpButtons>
                  </div>
                </>
              )}
          </UserInfo>
        )
        : (
          <UserInfo>
            <LoginButton onClick={() => setSignIn(true)}>
              SIGN
              <br />
              IN
            </LoginButton>
          </UserInfo>
        )}
      {signIn
      && (
        <Modal
          login="true"
          toggleModal={setSignIn}
        />
      )}
    </Nav>
  );
}

export default Navbar;
// Will need link to users pfp post login
