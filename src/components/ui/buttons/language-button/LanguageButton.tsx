import React, { useContext } from 'react';

import { FiGlobe as World } from 'react-icons/fi';

import MainContext from '../../../../context/context';
import { IContext, Lang, Theme } from '../../../../context/types';

import { SanityLanguages } from '../../../../graphqlTypes';
import { languagesQuery } from '../../../../gql/languages';

import { colors } from '../../../../constants';
import { Container } from './LanguageButton.styles';
import RadioButton from '../radio-button';

export default function LanguageButton(): JSX.Element {
  const data: SanityLanguages[] = languagesQuery();

  const { changeLanguage, language, theme } = useContext<IContext>(MainContext);

  const english: boolean = language === Lang.EN;

  const handleLanguage = (languageName: string): void => {
    changeLanguage(languageName);
    localStorage.setItem('language', english ? Lang.ES : Lang.EN);
  };

  const isTheThemeDark = theme === Theme.dark;

  return (
    <Container>
      <World size="1.5em" color={isTheThemeDark ? colors.white : colors.dark} />
      {data.map((element: SanityLanguages) => (
        <RadioButton
          key={element.id}
          handleLanguage={handleLanguage}
          languageName={element.language}
        />
      ))}
    </Container>
  );
}
