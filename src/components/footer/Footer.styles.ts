import styled from 'styled-components';

import { colors } from '../../constants';

export const Container = styled.footer`
  width: 95%;
  min-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.gray};
  font-style: italic;
`;
