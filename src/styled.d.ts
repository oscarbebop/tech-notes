import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    codeHeaderColor: string;
    codeEditorBackground: string;
    callToAction: string;
    gradient: string;
    onlyShadowOnWhiteTheme: string;
    onlyShadowOnDarkTheme: string;
    shadow: string;
  }
}
