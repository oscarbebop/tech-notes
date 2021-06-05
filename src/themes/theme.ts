import { colors, gradients, shadows } from '../constants';
import { IThemeColors } from '../context/types';

export const darkTheme: IThemeColors = {
  backgroundColor: colors.dark,
  textColor: colors.white,
  codeHeaderColor: colors.darkLight,
  codeEditorBackground: colors.dark,
  callToAction: colors.aqua,
  gradient: gradients.dark,
  shadow: shadows.dark
};

export const lightTheme: IThemeColors = {
  backgroundColor: colors.white,
  textColor: colors.dark,
  codeHeaderColor: colors.mediumGray,
  codeEditorBackground: colors.lightGray,
  callToAction: colors.dark,
  gradient: gradients.white,
  shadow: shadows.normal
};
