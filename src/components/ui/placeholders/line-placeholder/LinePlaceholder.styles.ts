import styled from 'styled-components';

interface IPlaceholder {
  width: string;
  height: string;
}

export const Container = styled.div<IPlaceholder>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 10px 0;
`;
