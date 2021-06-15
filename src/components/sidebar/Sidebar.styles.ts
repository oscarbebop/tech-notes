import styled, { css } from 'styled-components';

import { animations } from '../../constants';

export const Container = styled.div<{ ItIsActive: boolean }>`
  display: flex;
  width: 270px;
  height: 100%;
  position: fixed;
  top: 0;
  ${({ ItIsActive }) => (ItIsActive ? 'left: 0;' : 'left: -230px;')}
  transition: ${animations.slow};
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SidebarContainer = styled.aside`
  width: 230px;
  height: 100%;
  padding: 30px 10px 30px 30px;
  transition: ${animations.normal};
  z-index: 2;
`;

export const SidebarButton = styled.button<{ ItIsActive: boolean }>`
  width: 40px;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${animations.normal};
  z-index: 1;

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

export const Cover = styled.div<{ activeSidebar: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 0;
  display: none;

  @media (max-width: 1200px) {
    display: block;
    ${({ activeSidebar }) => activeSidebar && 'cursor: pointer;'}
    ${({ activeSidebar }) => !activeSidebar && 'display: none;'}
  }
`;
