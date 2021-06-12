import { createGlobalStyle } from 'styled-components';

import { animations, colors, fontStyles } from './constants';

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

  @keyframes placeHolderAnimation {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  .placeholder_animation {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderAnimation;
    animation-timing-function: linear;
    background: ${({ theme }) => theme.gradient};
    background-size: 800px 104px;
  }

  .code_container {
    background-color: ${({ theme }) => theme.codeEditorBackground};
  }

  pre {
    background-color: ${colors.transparent} !important;
  }

`;

export default GlobalStyle;
