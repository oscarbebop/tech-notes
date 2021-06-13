import React, { useContext, useEffect, useState } from 'react';

import MainContext from '../../context/context';
import { IContext, Lang, Theme } from '../../context/types';

import { definitionsQuery } from '../../gql/definitions';
import { technologieQuery } from '../../gql/technologies';
import {
  SanityDefinitionsConnection,
  SanityTechnologies
} from '../../graphqlTypes';

import { FiChevronLeft as Arrow } from 'react-icons/fi';
import { useWindowSize } from '@react-hook/window-size';

import { colors } from '../../constants';
import {
  Heading,
  LanguageButton,
  LinePlaceholder,
  Selector,
  ThemeButton
} from '../ui';
import DefinitionList from '../definition-list';
import Header from '../header';
import Searcher from '../searcher';
import {
  Container,
  SettingsContainer,
  SidebarButton,
  SidebarContainer
} from './Sidebar.styles';

export default function Sidebar(): JSX.Element {
  const data: SanityDefinitionsConnection = definitionsQuery();
  const technologies: SanityTechnologies[] = technologieQuery();

  const [widthD] = useWindowSize();

  const { nodes, totalCount } = data;

  const { activeSidebar, handleSidebar, language, theme } =
    useContext<IContext>(MainContext);

  useEffect(() => {
    if (widthD <= 1200) {
      handleSidebar(false);
    } else {
      handleSidebar(true);
    }
  }, [widthD]);

  const english: boolean = language === Lang.EN;
  const isTheThemeDark = theme === Theme.dark;

  const [localTheme, setLocalTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'));
  }, [theme]);

  const dinamicTheme: boolean = localTheme === 'light';

  return (
    <Container ItIsActive={activeSidebar}>
      <SidebarContainer
        ItIsActive={activeSidebar}
        isTheThemeDark={isTheThemeDark}
        className="sidebar_background"
      >
        <Header />
        <Searcher />
        <Heading>
          {!totalCount && <LinePlaceholder width="95%" height="20px" />}
          {totalCount &&
            `${totalCount} ${english ? 'Definitions' : 'Definiciones'}`}
        </Heading>
        <DefinitionList definitions={nodes} />
        <Selector technologies={technologies} />
        <SettingsContainer>
          <ThemeButton />
          <LanguageButton />
        </SettingsContainer>
      </SidebarContainer>
      <SidebarButton
        className="sidebar_background_button"
        type="button"
        aria-label="sidebar button"
        ItIsActive={activeSidebar}
        onClick={() => handleSidebar(!activeSidebar)}
      >
        <Arrow color={dinamicTheme ? colors.dark : colors.white} size="2em" />
      </SidebarButton>
    </Container>
  );
}
