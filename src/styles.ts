import { createGlobalStyle } from 'styled-components';

import { animations, fontStyles } from './constants';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    transition: ${animations.normal};
    background-color: ${({ theme }) => theme.backgroundColor};
    margin: 0;
    color: ${({ theme }) => theme.textColor};
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: ${fontStyles.fontSize.paragraph};
    font-weight: ${fontStyles.fontWeight.normal};
    line-height: 32px;

    @media (max-width: 768px) {
      font-size: ${fontStyles.fontSize.heading};
      line-height: 28px;
    }

  }

  p a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: underline;
  }

  a p {
    line-height: 20px;
  }

  option {
    color: black;
  }

`;

export default GlobalStyle;
