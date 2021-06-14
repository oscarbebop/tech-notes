import React, { useContext } from 'react';

import MainContext from '../../context/context';
import { IContext } from '../../context/types';

import GlobalStyles from '../../styles';
import { ThemeProvider } from 'styled-components';
import { Container, Content } from './Layout.styles';
import Sidebar from '../sidebar/Sidebar';
import SidebarPlaceHolder from '../sidebar-placeholder';

interface IProps {
  children: React.ReactNode;
  data?: boolean;
  path?: string | null;
}

export default function Layout(props: IProps): JSX.Element {
  const { children, data, path } = props;

  const { themeColor } = useContext<IContext>(MainContext);

  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyles theme={themeColor} />
      <Container>
        {path === '/' || !data ? <SidebarPlaceHolder /> : <Sidebar />}
        <Content>{children}</Content>
      </Container>
    </ThemeProvider>
  );
}

Layout.defaultProps = {
  path: null,
  data: true
};
