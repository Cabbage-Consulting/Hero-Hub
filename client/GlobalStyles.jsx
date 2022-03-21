import styled, { createGlobalStyle } from 'styled-components';

export const Button = styled.button`

border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : '5px')};
background-color: ${({ primary }) => (primary ? '##E7BA53' : '#000')};
color: ${({ primary }) => (primary ? '#71798E' : '#fff')};
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
    background-color: ${({ primary }) => (primary ? '#fff' : '##E7BA53')};
    transform: translateY(-.5rem) scale(1.02);
    color: #000;
}
&:active{
    transform: translateY(.5rem);
}

`;

//GRID BELOW

export const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.25rem;

`