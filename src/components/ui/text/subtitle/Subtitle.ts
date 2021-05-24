import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';
import { IText } from '../types';

const Subtitle = styled.h2<IText>`
  font-size: ${fontStyles.fontSize.subtitle};
  font-weight: ${fontStyles.fontWeight.medium};
  color: ${({ theme }) => theme.textColor};
  color: ${({ color }) => color};
  transition: ${animations.fast};
`;

export default Subtitle;
