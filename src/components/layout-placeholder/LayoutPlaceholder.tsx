import React, { useContext } from 'react';

import MainContext from '../../context/context';
import { IContext } from '../../context/types';

import GlobalStyles from '../../styles';
import { ThemeProvider } from 'styled-components';
import { Container, Content } from './Layout.styles';
import SidebarPlaceHolder from '../sidebar-placeholder';
import { ParagraphPlaceholder } from '../ui';

export default function LayoutPlaceholder(): JSX.Element {
  const { themeColor } = useContext<IContext>(MainContext);

  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyles theme={themeColor} />
      <Container>
        <SidebarPlaceHolder />
        <Content>
          <ParagraphPlaceholder />
        </Content>
      </Container>
    </ThemeProvider>
  );
}
