import React from 'react';
import { Link } from 'gatsby';

import { Logo } from '../ui';
import { Container } from './Header.styles';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Link to="/">
        <Logo>tech notes</Logo>
      </Link>
    </Container>
  );
}
