import React from 'react';

import { LinePlaceholder } from '../ui/placeholders';
import { Container, SidebarContainer } from '../sidebar/Sidebar.styles';

export default function SidebarPlaceHolder(): JSX.Element {
  return (
    <Container ItIsActive>
      <SidebarContainer className="sidebar_background">
        {Array.from({ length: 30 }).map((_, i: number) => {
          const randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
          return (
            <LinePlaceholder
              key={i}
              width={`${String(randomNumber)}%`}
              height="13px"
            />
          );
        })}
      </SidebarContainer>
    </Container>
  );
}
