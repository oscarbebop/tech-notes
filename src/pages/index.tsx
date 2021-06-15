import React, { useContext, useEffect } from 'react';
import { navigate } from 'gatsby';

import MainContext from '../context/context';
import { IContext } from '../context/types';

import LayoutPlaceholder from '../components/layout-placeholder';

export default function Home(): JSX.Element {
  const { language } = useContext<IContext>(MainContext);

  useEffect(() => {
    navigate(`/${language}`);
  }, [language]);

  return <LayoutPlaceholder />;
}
