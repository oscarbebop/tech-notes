import React, { useContext } from 'react';

import MainContext from '../../../../context/context';
import { IContext, Theme } from '../../../../context/types';

import { Container, Notch } from './ThemeButton.styles';

export default function ThemeButton(): JSX.Element {
  const { theme, changeTheme } = useContext<IContext>(MainContext);

  const isTheThemeWhite: boolean = theme === 'light';

  const handleTheme = (): void => {
    changeTheme();
    localStorage.setItem('theme', isTheThemeWhite ? Theme.dark : Theme.light);
  };

  return (
    <Container aria-label="theme button" onClick={handleTheme}>
      <Notch isTheThemeWhite={isTheThemeWhite} />
    </Container>
  );
}
