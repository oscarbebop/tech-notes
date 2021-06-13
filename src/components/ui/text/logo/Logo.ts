import styled from 'styled-components';

import { animations, fontStyles } from '../../../../constants';

interface ILogo {
  children: string;
  color?: string;
}

const Logo = styled.h2<ILogo>`
  font-size: ${fontStyles.fontSize.logo};
  transition: ${animations.normal};

  &:before {
    content: '// ';
  }
`;

export default Logo;
