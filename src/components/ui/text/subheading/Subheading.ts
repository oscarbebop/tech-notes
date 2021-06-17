import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';
import { IText } from '../types';

const Subheading = styled.h4<IText>`
  font-size: ${fontStyles.fontSize.subheading};
  font-weight: ${fontStyles.fontWeight.semiBold};
  transition: ${animations.fast};
`;

export default Subheading;
