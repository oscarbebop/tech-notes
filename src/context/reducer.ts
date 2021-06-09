import { darkTheme, lightTheme } from '../themes';
import { ContextTypes, IAction, IGlobalState, Theme } from './types';

export default function Reducer(
  state: IGlobalState,
  action: IAction
): IGlobalState {
  switch (action.type) {
    case ContextTypes.CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case ContextTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    case ContextTypes.CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload
      };
    case ContextTypes.CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === Theme.light ? Theme.dark : Theme.light,
        themeColor: state.theme === Theme.light ? darkTheme : lightTheme
      };
    case ContextTypes.HANDLE_SIDEBAR:
      return {
        ...state,
        activeSidebar: action.payload
      };
    case ContextTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
        themeColor: state.theme === Theme.light ? lightTheme : darkTheme
      };
    case ContextTypes.SET_URL:
      return {
        ...state,
        currentURL: action.payload
      };
    default:
      return state;
  }
}
