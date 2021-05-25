import React, { useContext } from 'react';
import { Link } from 'gatsby';

import MainContext from '../../context/context';
import { IContext } from '../../context/types';

import { Logo } from '../ui';
import { Container } from './Header.styles';

export default function Header(): JSX.Element {
  const { setSearchValue, setURL } = useContext<IContext>(MainContext);

  const handleLinkClick = (): void => {
    setURL('');
    setSearchValue(null);
  };

  return (
    <Container>
      <Link aria-label="home" to={`/`} onClick={() => handleLinkClick()}>
        <Logo>tech notes</Logo>
      </Link>
    </Container>
  );
}
