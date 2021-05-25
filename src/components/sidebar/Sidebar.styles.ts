import styled from 'styled-components';

import { animations, shadows } from '../../constants';

export const Container = styled.div<{ ItIsActive: boolean }>`
  display: flex;
  width: 270px;
  height: 100%;
  position: fixed;
  top: 0;
  transition: ${animations.slow};
  ${({ ItIsActive }) => (ItIsActive ? 'left: 0;' : 'left: -230px;')}
`;

export const SidebarContainer = styled.aside<{ ItIsActive: boolean }>`
  width: 230px;
  height: 100%;
  padding: 30px 10px 30px 30px;
  background-color: ${({ theme }) => theme.backgroundColor};
  transition: ${animations.normal};
  z-index: 2;
  ${({ ItIsActive }) =>
    ItIsActive ? `box-shadow: ${shadows.normal};` : `box-shadow: none;`}
`;

export const SidebarButton = styled.button<{ ItIsActive: boolean }>`
  width: 40px;
  height: 35px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${animations.normal};
  box-shadow: ${({ theme }) => theme.shadow};

  svg {
    transition: ${animations.slow};
    ${({ ItIsActive }) =>
      ItIsActive ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'}
  }
`;

export const SettingsContainer = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
