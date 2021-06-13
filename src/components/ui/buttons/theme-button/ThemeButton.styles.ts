import styled from 'styled-components';

import { animations } from '../../../../constants';

export const Container = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  outline: none;
  border-radius: 100px;
  padding: 2px 4px;
  cursor: pointer;
  transition: ${animations.normal};
`;

export const Notch = styled.div<{ isTheThemeWhite: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  transform: translate(
    ${({ isTheThemeWhite }) => (isTheThemeWhite ? '0' : '22px')}
  );
  transition: ${animations.normal};
`;
