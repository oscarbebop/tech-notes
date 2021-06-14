import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import MainContext from '../context/context';
import { IContext } from '../context/types';

import Layout from '../components/layout';
import { ParagraphPlaceholder } from '../components/ui';

export default function Home(props): JSX.Element {
  const { path } = props;

  const { language } = useContext<IContext>(MainContext);

  useEffect(() => {
    navigate(`/${language}`);
  }, [language]);

  return (
    <Layout path={path}>
      <ParagraphPlaceholder />
    </Layout>
  );
}
