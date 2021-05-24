import styled from 'styled-components';

import { animations, colors } from '../../../../constants';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${colors.transparent};
  transition: ${animations.normal};
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 5px 0 5px;
`;

export const Bullet = styled.div<{ active: boolean; activeColor: string }>`
  width: 6px;
  height: 6px;
  transition: ${animations.normal};
  background-color: ${({ active, activeColor }) =>
    active ? `${activeColor}` : `${colors.transparent}`};
  border-radius: 50%;
`;
