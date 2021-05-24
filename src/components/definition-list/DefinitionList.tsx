import React, { useContext } from 'react';
import { Link } from 'gatsby';

import MainContext from '../../context/context';
import { CategoryFilter, IContext } from '../../context/types';

import { SanityDefinitions } from '../../graphqlTypes';

import { colors } from '../../constants';
import { LinkText } from '../ui';
import { Container } from './DefinitionList.styles';

interface IProps {
  definitions: SanityDefinitions[];
}

export default function DefinitionList(props: IProps): JSX.Element {
  const { definitions } = props;

  const { category, language, searchValue, setSearchValue, setURL } =
    useContext<IContext>(MainContext);

  let allDefinitions: SanityDefinitions[];

  if (category === CategoryFilter.all) {
    allDefinitions = definitions;
  } else {
    allDefinitions = definitions.filter(({ technology }) =>
      technology.some(({ technologie }) => technologie === category)
    );
  }

  const handleLinkClick = (url: string): void => {
    setURL(url);
    setSearchValue(null);
  };

  return (
    <Container>
      {allDefinitions
        .filter((element: SanityDefinitions) => {
          if (!searchValue) {
            return element;
          }
          return (
            element.title.toLowerCase().includes(searchValue.toLowerCase()) &&
            element
          );
        })
        .map((definition: SanityDefinitions) => (
          <Link
            to={`/${language}/${definition.technology[0].technologie}/${definition.title}`}
            key={definition.id}
            aria-label={definition.title}
          >
            <LinkText
              onClick={() =>
                handleLinkClick(
                  `${definition.technology[0].technologie}/${definition.title}`
                )
              }
              color={colors.strongGray}
            >
              {definition.title}
            </LinkText>
          </Link>
        ))}
    </Container>
  );
}
