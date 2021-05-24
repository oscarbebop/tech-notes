import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';
import { IText } from '../types';

const Paragraph = styled.p<IText>`
  font-size: ${fontStyles.fontSize.paragraph};
  font-weight: ${fontStyles.fontWeight.normal};
  transition: ${animations.fast};
  color: ${({ theme }) => theme.textColor};
  color: ${({ color }) => color};
`;

export default Paragraph;
