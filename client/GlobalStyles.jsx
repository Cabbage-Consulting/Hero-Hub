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
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '17px')};
  outline: none;
  cursor: pointer;
  font-family: Play;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  // display: block;
  margin: 8px;
  width: 70%;
  height: auto;
  align-content: center;
  transform: translate(17%, 00%);
  &:hover{
      background-color: #71798E;
      // transform: translateY(.05rem) scale(.02);
      color: #f1f1f1;
  }
  &:active{
      // transform: translateY(.05rem);
      background-color: #3f4553;
  }
`;

export const Select = styled.select`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : AVG_ROUNDING)};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '17px')};
  outline: none;
  cursor: pointer;
  font-family: Play;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  // display: block;
  margin: 8px;
  width: 70%;
  height: auto;
  text-align: center;
  transform: translate(17%, 00%);
  .Select__control:hover {
    border-color: #f1f1f1;
  }
  &:active{
    // transform: translateY(.05rem);
    background-color: #3f4553;
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

  #chatroom {
    border: thin solid #1d2066;
    border-radius: 5px;
    font-family: monospace;
    height: 65vh;
    padding: .25em;

    #chat-list {
      height: 60vh;
      overflow: scroll;
    }

    #chat-inputs {
      height: 5vh;
      background-color: #71798e94;
      border-radius: 0 0 5px 5px;
    }

    .chat-username {
      color: #1d2066;
      font-weight: 500;
      text-shadow: -0.5px 0.5px #71798e;
    }

    .chat-text {
      color: #1d2066;
      font-style: italic;
    }
  }
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

export const QuizDiv = styled.div`
  transform: translate(0%, 20%);
  text-align: center
`;
// Navbar stuff

export const Nav = styled.nav`
  background: #C12835;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border-radius: ${AVG_ROUNDING} ${AVG_ROUNDING} 0 0;

  #sign-in-modal {
    color: #C12835;
  }
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
  right: 10vw;
  transform: translate(-10%, 30%);
  text-align: center;
  align-content: center;
  box-sizing: border-box;
  margin-bottom: 6vh;
  width: 5em;
`;

export const HeroHub = styled.img`
  transform: translate(0%, -20%);
`;

export const Pfp = styled.img`
  width: 100%;
  height: 5em;
  border-style:solid;
  border-color: #E7BA53;
  border-radius: 50%;
  box-sizing: border-box;

  &:hover {
      cursor: pointer;
      box-sizing: border-box;
      border-style:solid;
      border-color: #71798E;
    }
`;

export const NavUsername = styled.div`
  color: #f1f1f1;
  font-family: Play;
  font-size: 1rem;
  font-weight: 600;
`;

export const PfpButtons = styled.button`
  border-radius: ${AVG_ROUNDING};
  background-color: #E7BA53;
  font-family: 'Play';
  color: #000;
  font-size: 0.75em;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border: none;
  transition: all .5s ease;
  margin-top: 10px;
  width: 100%;
  height: 3vh;
  margin-left: auto;
  margin-right: auto;

  &:hover{
      background-color: #8590ac;
      color: #f1f1f1;
      box-shadow: 0 0 1px #e7bb53c1;
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
      height: 2vh;
      margin-left: 50%;
      transform: translatex(-50%);
      transition: all .2s ease;

      &:hover{
        background-color: #C12835;
        color: #f1f1f1;
      }
      &:active {
        color: #f1f1f1;
        background-color: #71798E;
        box-shadow: inset 0 0 10px #e7bb5358;
        transform: translateY(1px) translatex(-50%);
      }
    }` : null)}
`;

export const LoginButton = styled.button`
  background-color: #71798E;
  border-radius: 50%;
  color: #E7BA53;
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

export const ExitButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : AVG_ROUNDING)};
  background-color: #C12835;
  color: #f1f1f1;
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
      color: #f1f1f1;
  }
  &:active{
      background-color: #3f4553;
  }
`;

export const ExitDivSignInModal = styled.div`
  transform: translate(0%, 2%);
`;

export const QuizCreatorDiv = styled.div`
  transform: translate(0%, 20%);
`;

export const QuizQuestionContainter = styled.div`
  z-index: 4;
  font-size: 0.5em;
  font-family: 'Play';
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  height: 70%;
  overflow: scroll;
  align-content: center;
  label{
    text-align: center;
  }
`;

export const ModalButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '30px' : AVG_ROUNDING)};
  background-color: #E7BA53;
  color: #000;
  padding: ${({ big }) => (big ? '18px 30px' : '10px 28px')};
  font-size: 1.5em;
  outline: none;
  cursor: pointer;
  font-family: Play;
  font-weight: 400;
  border: none;
  transition: all .5s ease;
  transform: translateX(-0.4em);
  width: 90%;
  margin: 8px;
  padding: 0.5em;
  align-content: center;

  &:hover{
      background-color: #71798E;

      color: #f1f1f1;
  }
  &:active{

      background-color: #3f4553;
  }
`;
