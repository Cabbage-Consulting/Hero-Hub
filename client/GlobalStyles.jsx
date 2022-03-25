import styled, { createGlobalStyle } from 'styled-components';

const AVG_ROUNDING = '5px';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo&family=Roboto:wght@300&display=swap');
  @font-face {
    font-family: MHA;
    src: url(../Futura-Display-BQ-Regular.otf);
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : AVG_ROUNDING)};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  font-family: Play;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;
  &:hover{
      background-color: #71798E;
      transform: translateY(-.5rem) scale(1.02);
      color: #f1f1f1;
  }
  &:active{
      transform: translateY(.5rem);
      background-color: #3f4553;
  }
`;

export const MainButtons = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : AVG_ROUNDING)};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  font-family: Play;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;
  &:hover{
      background-color: #71798E;
      transform: translateY(-.5rem) scale(1.02);
      color: #f1f1f1;
  }
  &:active{
      transform: translateY(.5rem);
      background-color: #3f4553;
  }
`;

export const Select = styled.select`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : AVG_ROUNDING)};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  font-family: Play;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;

  .Select__control:hover {
    border-color: #f1f1f1;
  }
`;

export const Form = styled.input`
  border-radius: ${AVG_ROUNDING};
  font-family: monospace;
  border-color: #E7BA53;
  color: #1d2066;
  background: #f1f1f1;
  border: none;
  border-bottom: thin solid #3f4553;
  ${(props) => (props.chatinput
    ? `
      background-color: transparent;
      border-radius: 0;
      padding: 0.4vh 0.3vw;
      width: 18vw;
      ::placeholder {
        color: #f1f1f1c5;
      }

      &:focus {
        outline: none;
      }
    ` : null)}
`;

// GRID BELOW
export const GeneralDiv = styled.div`
  background: #F1F1F1;
  font-family: Play sans-serif;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  font-family: Play;
  // border-style: solid;
  // border-color: #1d2066;
  // border-width: 1em;
  // background: #71798E;
`;

export const Quiz = styled.div`
  color: black;
  padding: 0.25rem;
  align-content: center;
  width: 60%;
  border-style: solid;
  border-color: #1d2066;
  border-width: 0.5em 4px;
`;

export const Chat = styled.div`
  color: black;
  padding: 0.25rem;
  align-content: center;
  width: 20%;
  border-style: solid;
  border-color: #1d2066;
  border-width: 0.5em 4px 0.5em 8px;
  border-radius: 0 0 0 ${AVG_ROUNDING};
`;

export const Recent = styled.div`
  color: black;
  padding: 0.25rem;
  align-content: center;
  width: 20%;
  border-style: solid;
  border-color: #1d2066;
  border-width: 0.5em 8px 0.5em 4px;
  border-radius: 0 0 ${AVG_ROUNDING} 0;
`;
// Navbar stuff

export const Nav = styled.nav`
  background: #C12835;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-radius: ${AVG_ROUNDING} ${AVG_ROUNDING} 0 0;
 `;

export const NavLogo = styled.div`
  color: #f1f1f1;

  transform: translate(-5%, 55%);
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 4rem;
  font-weight: 800;

`;

export const UserInfo = styled.div`
  transform: translate(-10%, 30%);
  text-align: center;
  box-sizing: border-box;
`;

export const HeroHub = styled.img`
  transform: translate(0%, -20%);
`;

export const Pfp = styled.img`

  width: 70px;
  height: 70px;
  border-style:solid;
  border-color: #E7BA53;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  display: block;
  margin-left: auto;
  margin-right: auto;


  position: relative;
  &:hover {
      cursor: pointer;
      // border: 3px outset transparent;
      box-sizing: border-box;
      border-style:solid;
      border-color: #71798E;
    }
`;

export const NavUsername = styled.div`
  color: #f1f1f1;
  cursor: pointer;
  font-family: Play;
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
`;

export const PfpButtons = styled.button`
  border-radius: ${AVG_ROUNDING};
  background-color: #E7BA53;
  font-family: Play;
  color: #000;
  padding: 5px 14px;
  font-size: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;
  width: 85px;
  height: 2vh;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover{
      background-color: #71798E;
      color: #f1f1f1;
  }
  &:active {
    background-color: #3f4553;
  }

  ${(props) => (props.chatsend
    ? `{
      font-weight: 600;
      font-size: 0.75em;
      background-color: transparent;
      width: 40%;
      position: relative;
      top: -1vh;
      padding: 0;
      transition: all .2s ease;

      &:hover{
        background-color: #C12835;
        color: #f1f1f1;
      }
      &:active {
        color: #f1f1f1;
        background-color: #71798E;
        box-shadow: inset 0 0 10px #e7bb5358;
        transform: translateY(1px);
      }
    }` : null)}
`;

export const LoginButton = styled.button`
  background-color: #71798E;
  border-radius: 50%;
  color: #f1f1f1;
  font-weight: 600;
  font-size: 1em;
  font-family: 'Play';
  height: 70px;
  transition: all .2s ease;
  width: 70px;

  &:hover {
    background-color: #E7BA53;
    color: #C12835;
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 0 0 10px #362e19;
  }
`;
