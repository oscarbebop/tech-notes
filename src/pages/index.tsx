import React, { useContext, useEffect, useState } from 'react';
import { navigate } from 'gatsby';

import MainContext from '../context/context';
import { IContext } from '../context/types';

import Layout from '../components/layout';
import { Title } from '../components/ui';

export default function Home(): JSX.Element {
  const { language, setTheme } = useContext<IContext>(MainContext);

  const [localTheme, setLocalTheme] = useState<undefined | string>(undefined);

  useEffect(() => {
    setLocalTheme(localStorage.getItem('theme'));
    setTheme(localTheme);
  }, []);

  useEffect(() => {
    navigate(`/${language}`);
  }, [language]);

  return (
    <Layout>
      <Title>&nbsp;</Title>
    </Layout>
  );
}
