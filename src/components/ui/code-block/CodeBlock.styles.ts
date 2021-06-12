import styled, { keyframes } from 'styled-components';

import { animations, colors, shadows } from '../../../constants';

export const CodeContainer = styled.div<{ isTheThemeWhite: boolean }>`
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.codeEditorBackground};
  display: flex;
  flex-direction: column;
  transition: ${animations.normal};
  ${({ isTheThemeWhite }) =>
    isTheThemeWhite ? 'box-shadow: none;' : `box-shadow: ${shadows.dark};`}

  pre {
    transition: ${animations.normal};
  }
`;

export const CodeHeader = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.codeHeaderColor};
  border-radius: 5px 5px 0px 0px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: ${animations.normal};
`;

export const IconButton = styled.button<{ isActive: boolean }>`
  background-color: ${colors.transparent};
  border: none;
  cursor: pointer;
  outline: none;
  ${({ isActive }) => isActive && 'pointer-events: none;'}
`;

const fadeInRightToLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const SuccessfulContainer = styled.div<{ children: string }>`
  width: 200px;
  height: 60px;
  bottom: 0;
  right: 0;
  position: fixed;
  background-color: ${colors.aqua};
  color: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  animation: ${fadeInRightToLeft} 0.5s ease-out;
`;
