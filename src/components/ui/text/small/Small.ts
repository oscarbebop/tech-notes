import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';
import { IText } from '../types';

const Small = styled.small<IText>`
  font-size: ${fontStyles.fontSize.small};
  font-weight: ${fontStyles.fontWeight.normal};
  transition: ${animations.fast};
  text-decoration: underline;
`;

export default Small;
