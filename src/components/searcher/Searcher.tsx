import React from 'react';

import { SearchInput } from '../ui';
import { Container } from './Searcher.styles';

export default function Searcher(): JSX.Element {
  return (
    <Container>
      <SearchInput />
    </Container>
  );
}
