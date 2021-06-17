export enum CategoryFilter {
  all = 'all',
  css = 'css',
  html = 'html',
  javascript = 'javascript',
  python = 'python',
  react = 'react',
  typescript = 'typescript'
}

export enum ContextTypes {
  CHANGE_CATEGORY = 'CHANGE_CATEGORY',
  CHANGE_LANGUAGE = 'CHANGE_LANGUAGE',
  CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE',
  CHANGE_THEME = 'CHANGE_THEME',
  HANDLE_SIDEBAR = 'HANDLE_SIDEBAR',
  SET_THEME = 'SET_THEME',
  SET_URL = 'SET_URL'
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  activeSidebar: boolean;
  category: string;
  currentURL: string | null;
  language: string;
  searchValue: string | null;
  theme: string;
  themeColor: IThemeColors;
  changeCategory: (category: string) => void;
  changeLanguage: (lang: string) => void;
  changeTheme: () => void;
  handleSidebar: (ItIsActive: boolean) => void;
  setSearchValue: (value: string) => void;
  setTheme: (theme: string) => void;
  setURL: (url: string) => void;
}

export interface IGlobalState {
  activeSidebar: boolean;
  category: string;
  language: string;
  searchValue: string | null;
  theme: Theme;
  themeColor: IThemeColors;
  currentURL: string | null;
}

export interface IThemeColors {
  backgroundColor: string;
  textColor: string;
  codeHeaderColor: string;
  codeEditorBackground: string;
  callToAction: string;
  gradient: string;
  onlyShadowOnWhiteTheme: string;
  onlyShadowOnDarkTheme: string;
  searchBackground: string;
  searchBorder: string;
  shadow: string;
}

export enum Lang {
  EN = 'en',
  ES = 'es'
}

export enum Theme {
  dark = 'dark',
  light = 'light'
}
