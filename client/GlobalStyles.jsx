import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cairo&family=Roboto:wght@300&display=swap');
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
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
  }
`;

export const Select = styled.select`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;

  .Select__control:hover {
    border-color: #f1f1f1;
  }
`;

// GRID BELOW

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.25rem;
  margin: auto;
  grid-template- areas:
    "banner banner banner"
    "chat quiz quiz"
    "chat quiz quiz"
    "chat metrics metrics"

`;
export const Banner = styled.div`
  color: #C12835;
  grid-area: banner;
  padding: 0.25rem;
  align-content: center;
`;

export const Quiz = styled.div`
  color: black;
  grid-area: quiz;
  padding: 0.25rem;
  align-content: center;
`;

export const Chat = styled.div`
  color: black;
  grid-area: chat;
  padding: 0.25rem;
  align-content: center;
`;

export const Metrics = styled.div`
  color: #C12835;
  grid-area: metrics;
  padding: 0.25rem;
  align-content: center;
`;
// Navbar stuff

export const Nav = styled.nav`
  background: #C12835;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
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
  font-family: 'Cairo', sans-serif;
`;

export const UserInfo = styled.div`
  transform: translate(-15%, 30%);
  text-align: center;
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

  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Cairo', sans-serif;

`;

export const PfpButtons = styled.button`
  border-radius: 5px;
  background-color: #E7BA53;
  color: #000;
  padding: 5px 14px;
  font-size: 10px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;
  width: 85px;
  height 22px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover{
      background-color: #71798E;
      transform: translateY(-.5rem) scale(1.02);
      color: #f1f1f1;
  }
  &:active{
      transform: translateY(.5rem);
  }
`;