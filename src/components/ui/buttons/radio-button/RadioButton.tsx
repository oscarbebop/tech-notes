import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';

import MainContext from '../../../../context/context';
import { IContext, Theme } from '../../../../context/types';

import { colors } from '../../../../constants';
import { Large } from '../../../ui';
import { Bullet, Circle, Container } from './RadioButton.styles';

interface IProps {
  languageName: string;
  handleLanguage: (language: string) => void;
}

export default function RadioButton(props: IProps): JSX.Element {
  const { handleLanguage, languageName } = props;

  const { currentURL, theme } = useContext<IContext>(MainContext);

  const url: string = currentURL || '';

  const color = theme === Theme.light ? `${colors.dark}` : `${colors.white}`;

  const [localLanguage, setLocalLanguage] =
    useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalLanguage(localStorage.getItem('language'));
  }, []);

  return (
    <Container>
      <Large>{languageName}</Large>
      <Link
        aria-label={languageName}
        onClick={() => handleLanguage(languageName)}
        to={`/${languageName}/${url}`}
      >
        <Circle className="option">
          <Bullet activeColor={color} active={languageName === localLanguage} />
        </Circle>
      </Link>
    </Container>
  );
}
