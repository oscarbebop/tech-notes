import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../../../../context/context';
import { IContext, Theme } from '../../../../context/types';

import { Container, Notch } from './ThemeButton.styles';

export default function ThemeButton(): JSX.Element {
  const { changeTheme } = useContext<IContext>(MainContext);

  const [localTheme, setLocalTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'));
  }, []);

  const isTheThemeWhite: boolean = localTheme === 'light';

  const handleTheme = (): void => {
    changeTheme();
    localStorage.setItem('theme', isTheThemeWhite ? Theme.dark : Theme.light);
  };

  console.log('================');
  console.log(localTheme);
  console.log('================');

  return (
    <Container aria-label="theme button" onClick={handleTheme}>
      <Notch isTheThemeWhite={isTheThemeWhite} />
    </Container>
  );
}
