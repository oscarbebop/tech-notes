import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40vh;
`;

export const Title = styled.div`
  width: 40%;
  height: 4vh;
  margin-bottom: 30px;
`;

export const Line = styled.div<{ width: string; enter: boolean }>`
  width: ${({ width }) => width};
  height: 2vh;
  margin-bottom: ${({ enter }) => (enter ? '30px' : '10px')};
`;
