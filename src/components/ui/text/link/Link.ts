import styled from 'styled-components';

import { animations } from '../../../../constants';
import { IText } from '../types';

const LinkText = styled.p<IText>`
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  color: ${({ color }) => color};
  transition: ${animations.fast};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.callToAction};
  }
`;

export default LinkText;
