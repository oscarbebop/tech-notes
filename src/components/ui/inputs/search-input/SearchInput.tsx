import React, { useContext } from 'react';

import MainContext from '../../../../context/context';
import { IContext, Lang, Theme } from '../../../../context/types';

import { FiSearch as Search } from 'react-icons/fi';

import { colors } from '../../../../constants';
import { Container, Input } from './SearchInput.styles';

export default function SearchInput(): JSX.Element {
  const { language, setSearchValue, theme } = useContext<IContext>(MainContext);

  const english: boolean = language === Lang.EN;
  const isTheThemeDark = theme === Theme.dark;

  return (
    <Container isTheThemeDark={isTheThemeDark}>
      <Search size="1.5em" color={colors.gray} />
      <Input
        type="text"
        placeholder={english ? 'Search...' : 'Buscar...'}
        onChange={event => setSearchValue(event.target.value)}
      />
    </Container>
  );
}
