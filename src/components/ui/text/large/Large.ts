import styled from 'styled-components';

import { animations } from '../../../../constants';
import { IText } from '../types';

const Large = styled.p<IText>`
  font-size: 16px;
  transition: ${animations.normal};
  color: ${({ theme }) => theme.textColor};
  color: ${({ color }) => color};
`;

export default Large;
