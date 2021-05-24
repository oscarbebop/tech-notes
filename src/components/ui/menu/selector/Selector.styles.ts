import styled from 'styled-components';

import { animations, colors } from '../../../../constants';

export const Select = styled.select`
  width: 95%;
  height: 50px;
  padding: 5px;
  border: none;
  background: ${colors.transparent};
  color: ${({ theme }) => theme.textColor};
  appearance: none;
  outline: none;
  text-align-last: center;
  cursor: pointer;
  transition: ${animations.normal};
  box-shadow: ${({ theme }) => theme.shadow};
`;
