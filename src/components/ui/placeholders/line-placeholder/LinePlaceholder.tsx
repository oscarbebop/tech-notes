import React from 'react';

import { Container } from './LinePlaceholder.styles';

interface IProps {
  width: string;
  height: string;
}

export default function LinePlaceholder(props: IProps): JSX.Element {
  const { width, height } = props;

  return (
    <Container
      width={width}
      height={height}
      className="placeholder_animation"
    />
  );
}
