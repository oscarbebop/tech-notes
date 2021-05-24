import styled from 'styled-components';

import { animations, colors, fontStyles } from '../../../../constants';

export const Container = styled.div<{ isTheThemeDark: boolean }>`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  transition: ${animations.normal};
  background-color: ${({ isTheThemeDark }) =>
    isTheThemeDark ? `${colors.semiDark}` : `${colors.white}`};
  color: ${colors.lightGray};
  border: ${({ isTheThemeDark }) =>
    isTheThemeDark
      ? `1px solid ${colors.semiDark}`
      : `1px solid ${colors.lightGray}`};
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  background-color: ${colors.transparent};
  color: ${colors.gray};
  font-size: ${fontStyles.fontSize.subheading};
  font-weight: ${fontStyles.fontWeight.semiBold};
  margin-left: 10px;
  outline: none;

  ::placeholder {
    color: ${colors.gray};
  }
`;
