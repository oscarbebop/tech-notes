import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 55vh;
  overflow-y: auto;

  @media (max-height: 800px) {
    height: 55%;
  }

  @media (max-height: 690px) {
    height: 45%;
  }

  @media (max-height: 590px) {
    height: 30%;
  }

  @media (max-height: 480px) {
    height: 20%;
  }

  @media (max-height: 415px) {
    height: 15%;
  }
`;
