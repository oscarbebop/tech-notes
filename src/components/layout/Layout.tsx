import React, { useContext } from 'react';

import MainContext from '../../context/context';
import { IContext } from '../../context/types';

import GlobalStyles from '../../styles';
import { ThemeProvider } from 'styled-components';
import { Container, Content } from './Layout.styles';
import Sidebar from '../sidebar/Sidebar';
import { AboutButton } from '../ui';

interface IProps {
  children: React.ReactNode;
}

export default function Layout(props: IProps): JSX.Element {
  const { children } = props;

  const { themeColor } = useContext<IContext>(MainContext);

  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyles theme={themeColor} />
      <Container>
        <Sidebar />
        <Content>{children}</Content>
        <AboutButton />
      </Container>
    </ThemeProvider>
  );
}
