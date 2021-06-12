import React, { createContext, useEffect, useReducer } from 'react';

import { darkTheme, lightTheme } from '../themes';
import { CategoryFilter, ContextTypes, Lang, Theme } from './types';
import Reducer from './reducer';

const defaultState: any = {
  activeSidebar: true,
  category: CategoryFilter.all,
  currentURL: null,
  language: Lang.EN,
  searchValue: null,
  theme: Theme.light,
  themeColor: lightTheme
};

const MainContext = createContext(defaultState);

interface IProps {
  children: React.ReactNode;
}

export function MainProvider(props: IProps): JSX.Element {
  const { children } = props;

  // Language
  if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'en');
  }

  const initialLanguage: Lang =
    localStorage.getItem('language') === 'en' ? Lang.EN : Lang.ES;

  // theme
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }

  const initialTheme: Theme =
    localStorage.getItem('theme') === 'light' ? Theme.light : Theme.dark;

  const initialState = {
    activeSidebar: true,
    category: CategoryFilter.all,
    currentURL: null,
    language: initialLanguage,
    searchValue: null,
    theme: initialTheme,
    themeColor: initialTheme === 'light' ? lightTheme : darkTheme
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const changeCategory = (category: string): void => {
    dispatch({ type: ContextTypes.CHANGE_CATEGORY, payload: category });
  };

  const changeLanguage = (lang: string): void => {
    dispatch({ type: ContextTypes.CHANGE_LANGUAGE, payload: lang });
  };

  const changeTheme = (): void => {
    dispatch({ type: ContextTypes.CHANGE_THEME });
  };

  const handleSidebar = (ItIsActive: boolean): void => {
    dispatch({ type: ContextTypes.HANDLE_SIDEBAR, payload: ItIsActive });
  };

  const setSearchValue = (searchInputValue: string): void => {
    dispatch({
      type: ContextTypes.CHANGE_SEARCH_VALUE,
      payload: searchInputValue
    });
  };

  const setTheme = (theme: Theme): void => {
    dispatch({ type: ContextTypes.SET_THEME, payload: theme });
  };

  const setURL = (url: string): void => {
    dispatch({ type: ContextTypes.SET_URL, payload: url });
  };

  useEffect(() => {
    const initialLanguage2: Lang =
      localStorage.getItem('language') === 'en' ? Lang.EN : Lang.ES;
    changeLanguage(initialLanguage2);
  }, []);

  return (
    <MainContext.Provider
      value={{
        activeSidebar: state.activeSidebar,
        category: state.category,
        currentURL: state.currentURL,
        language: state.language,
        searchValue: state.searchValue,
        theme: state.theme,
        themeColor: state.themeColor,
        changeCategory,
        changeLanguage,
        changeTheme,
        handleSidebar,
        setSearchValue,
        setTheme,
        setURL
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
