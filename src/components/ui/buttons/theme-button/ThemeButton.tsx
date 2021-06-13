import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../../../../context/context';
import { IContext, Theme } from '../../../../context/types';

import { Container, Notch } from './ThemeButton.styles';

export default function ThemeButton(): JSX.Element {
  const { theme, changeTheme } = useContext<IContext>(MainContext);

  const [localTheme, setLocalTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'));
  }, [theme]);

  const isTheLocalThemeWhite: boolean = localTheme === 'light';
  const isTheGlobalThemeWhite: boolean = theme === 'light';

  const handleTheme = (): void => {
    changeTheme();
    localStorage.setItem(
      'theme',
      isTheGlobalThemeWhite ? Theme.dark : Theme.light
    );
  };

  return (
    <Container
      aria-label="theme button"
      className="toggle"
      onClick={handleTheme}
    >
      <Notch className="notch" isTheThemeWhite={isTheLocalThemeWhite} />
    </Container>
  );
}
