import React, { useContext } from 'react';
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

  const { language, currentURL, theme } = useContext<IContext>(MainContext);

  const url: string = currentURL || '';

  const color = theme === Theme.light ? `${colors.dark}` : `${colors.white}`;

  const windowGlobal = typeof window !== 'undefined' && window;

  return (
    <Container>
      <Large>{languageName}</Large>
      <Link
        aria-label={languageName}
        onClick={() => handleLanguage(languageName)}
        to={`/${languageName}/${url}`}
      >
        <Circle>
          <Bullet
            activeColor={color}
            active={
              languageName === windowGlobal.localStorage.getItem('language')
            }
          />
        </Circle>
      </Link>
    </Container>
  );
}
