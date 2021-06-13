import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';
import { IText } from '../types';

const Heading = styled.p<IText>`
  font-size: ${fontStyles.fontSize.heading};
  font-weight: ${fontStyles.fontWeight.bold};
  transition: ${animations.fast};
  margin-bottom: 10px;
`;

export default Heading;
