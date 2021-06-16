import React, { useContext } from 'react';

import MainContext from '../context/context';
import { IContext, Lang } from '../context/types';

import Layout from '../components/layout';
import { Title } from '../components/ui';

export default function NotFound(): JSX.Element {
  const { language } = useContext<IContext>(MainContext);

  const message: string =
    language === Lang.EN ? 'Page not found' : 'Página no encontrada';

  return (
    <Layout>
      <Title>{message}</Title>
    </Layout>
  );
}
