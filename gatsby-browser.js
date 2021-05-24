import React from 'react';

import { MainProvider } from './src/context/context';

export function wrapRootElement({ element }) {
  return <MainProvider>{element}</MainProvider>;
}
