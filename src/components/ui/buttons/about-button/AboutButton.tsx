import React, { useContext } from 'react';
import { Link } from 'gatsby';

import MainContext from '../../../../context/context';
import { IContext, Lang } from '../../../../context/types';

import { Subheading } from '../../text';
import { Container } from './AboutButton.styles';

export default function AboutButton(): JSX.Element {
  const { language, setSearchValue, setURL } =
    useContext<IContext>(MainContext);

  const aboutURL = language === Lang.EN ? 'about' : 'acerca';

  const handleClick = (url: string) => {
    setURL(url);
    setSearchValue(null);
  };

  return (
    <Link
      to={`/${language}/${aboutURL}`}
      aria-label="about button"
      onClick={() => handleClick(aboutURL)}
    >
      <Container className="about_button">
        <Subheading>?</Subheading>
      </Container>
    </Link>
  );
}
