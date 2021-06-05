import React from 'react';

import { Container, Title, Line } from './ParagraphPlaceholder.styles';

export default function ParagraphPlaceholder(): JSX.Element {
  return (
    <Container>
      <Title className="placeholder_animation" />
      {Array.from({ length: 10 }).map((_, index: number) => {
        const randomNumber = Math.floor(Math.random() * (80 - 30 + 1) + 30);
        return (
          <Line
            key={index}
            width={`${String(randomNumber)}%`}
            enter={index === 4}
            className="placeholder_animation"
          />
        );
      })}
    </Container>
  );
}
