import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import MainContext from '../context/context';
import { IContext } from '../context/types';

import Layout from '../components/layout';
import { Title } from '../components/ui';

export default function Home(): JSX.Element {
  const { language } = useContext<IContext>(MainContext);

  useEffect(() => {
    navigate(`/${language}`);
  }, [language]);

  return (
    <Layout>
      <Title>&nbsp;</Title>
    </Layout>
  );
}
