import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main`
  width: 650px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 80px 0 100px 0;
  margin: 0 40px;

  @media (max-width: 730px) {
    margin: 0 50px;
  }
`;
