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
    color: ${({ theme }) => theme.textColor};
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

  a p:hover {
    color: ${({ theme }) => theme.callToAction};
  }


  option {
    color: black;
  }

  pre {
    background-color: ${colors.transparent} !important;
  }

  .about_button:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: ${({ theme }) => theme.shadow};
    opacity: 1;
    cursor: pointer;
  }

  .code_background {
    background-color: ${({ theme }) => theme.codeEditorBackground};
    box-shadow: ${({ theme }) => theme.onlyShadowOnDarkTheme};
  }

  .code_header_background {
    background-color: ${({ theme }) => theme.codeHeaderColor};
  }

  .option {
   border: 1px solid ${({ theme }) => theme.textColor};
  }

  .search_background {
    background-color: ${({ theme }) => theme.searchBackground};
    border: 1px solid ${({ theme }) => theme.searchBorder};
  }

  .sidebar_background {
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: ${({ theme }) => theme.onlyShadowOnWhiteTheme};
  }

  .sidebar_background_button {
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .technology_selector_background {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .toggle {
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: ${({ theme }) => theme.shadow};
  }

  .notch {
    background-color: ${({ theme }) => theme.callToAction};
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
`;

export default GlobalStyle;
