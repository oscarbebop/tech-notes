import React from 'react';

import { Container } from './Footer.styles';

interface IProps {
  children: React.ReactNode;
}

export default function Footer(props: IProps): JSX.Element {
  const { children } = props;

  return <Container>{children}</Container>;
}
