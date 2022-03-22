import styled, { createGlobalStyle } from 'styled-components';

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '15px')};
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;

  &:hover{
      background-color: #71798E;
      transform: translateY(-.5rem) scale(1.02);
      color: #fff;
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
  font-family: 'Roboto';
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  margin: 8px;

  .Select__control:hover {
    border-color: #fff;
  }
`

//GRID BELOW

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

`
export const Banner = styled.div`
  color: #C12835;
  grid-area: banner;
  padding: 0.25rem;
  align-content: center;
`

export const Quiz = styled.div`
  color: black;
  grid-area: quiz;
  padding: 0.25rem;
  align-content: center;
`

export const Chat = styled.div`
  color: black;
  grid-area: chat;
  padding: 0.25rem;
  align-content: center;
`

export const Metrics = styled.div`
  color: black;
  grid-area: metrics;
  padding: 0.25rem;
  align-content: center;
`
// Navbar stuff

export const Nav = styled.nav`
  background: #000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
 `;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavLogo = styled.div`
  color: #fff;
  padding-bottom: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
`;