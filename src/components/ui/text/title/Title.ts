import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';
import { IText } from '../types';

const Title = styled.h1<IText>`
  font-size: ${fontStyles.fontSize.title};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textColor};
  transition: ${animations.fast};
`;

export default Title;
