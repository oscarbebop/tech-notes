import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  overflow-y: auto;

  @media (max-height: 800px) {
    height: 55%;
  }

  @media (max-height: 640px) {
    height: 45%;
  }
`;
