import styled from 'styled-components';

import { animations, shadows } from '../../../../constants';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  transition: ${animations.normal};
`;
