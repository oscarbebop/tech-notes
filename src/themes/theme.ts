import { colors, gradients, shadows } from '../constants';
import { IThemeColors } from '../context/types';

export const darkTheme: IThemeColors = {
  backgroundColor: colors.dark,
  textColor: colors.white,
  codeHeaderColor: colors.darkLight,
  codeEditorBackground: colors.dark,
  callToAction: colors.aqua,
  gradient: gradients.dark,
  onlyShadowOnDarkTheme: shadows.dark,
  onlyShadowOnWhiteTheme: 'none',
  searchBackground: colors.semiDark,
  searchBorder: colors.semiDark,
  shadow: shadows.dark
};

export const lightTheme: IThemeColors = {
  backgroundColor: colors.white,
  textColor: colors.dark,
  codeHeaderColor: colors.mediumGray,
  codeEditorBackground: colors.lightGray,
  callToAction: colors.dark,
  gradient: gradients.white,
  onlyShadowOnDarkTheme: 'none',
  onlyShadowOnWhiteTheme: shadows.normal,
  searchBackground: colors.white,
  searchBorder: colors.lightGray,
  shadow: shadows.normal
};
