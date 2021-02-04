import React from 'react';
import _merge from 'lodash/merge';

import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';
import ClearIcon from '@material-ui/icons/Clear';

import { antlerPalette, antlerPaletteToMui } from './antlerPalette';
import { spacingFn } from './spacing';

export const HEADING_FONT = 'Europa, sans-serif';
export const BODY_FONT = '"Open Sans", sans-serif';

export const PRIMARY_TEXT = antlerPalette.aBlack[500];
export const SECONDARY_TEXT = antlerPalette.aGray[700];
export const DISABLED_TEXT = antlerPalette.aGray[500];

export const ROOT_FONT_SIZE = 16;
export const toRem = (px: number) => `${px / ROOT_FONT_SIZE}rem`;
export const toEm = (px: number, root: number) => `${px / root}em`;

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    antler: typeof antlerPalette;
  }
  interface PaletteOptions {
    antler: typeof antlerPalette;
  }
}

export const themeBase = createMuiTheme({
  palette: {
    primary: antlerPaletteToMui(antlerPalette.aRed),
    secondary: { main: antlerPalette.aBlack[500] },
    background: {
      default: antlerPalette.aGray[50],
      paper: antlerPalette.aWhite[500],
    },
    text: {
      primary: PRIMARY_TEXT,
      secondary: SECONDARY_TEXT,
      disabled: DISABLED_TEXT,
    },
    error: antlerPaletteToMui(antlerPalette.errorRed),
    warning: antlerPaletteToMui(antlerPalette.amber),
    info: antlerPaletteToMui(antlerPalette.blue),
    success: antlerPaletteToMui(antlerPalette.green),
    antler: antlerPalette,

    action: {
      hover: 'rgba(0, 0, 0, 0.12)',
      hoverOpacity: 0.12,
    },
  },
  // Single shadow for all levels
  shadows: ['none'].concat(
    new Array(24).fill(
      `0 1px 1px 0 rgba(0, 0, 0, 0.04),
       0 0 4px 0 rgba(0, 0, 0, 0.04),
       0 6px 8px 0 rgba(0, 0, 0, 0.04),
       0 8px 16px 0 rgba(0, 0, 0, 0.04)`
    )
  ) as Shadows,
  typography: {
    fontFamily: BODY_FONT,
    h1: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(48),
      fontWeight: 'normal',
      letterSpacing: toEm(-0.67, 48),
      lineHeight: 64 / 48,
    },
    h2: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(40),
      fontWeight: 'normal',
      letterSpacing: toEm(-0.34, 40),
      lineHeight: 56 / 40,
    },
    h3: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(36),
      fontWeight: 'normal',
      letterSpacing: toEm(0, 36),
      lineHeight: 48 / 36,
    },
    h4: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(32),
      fontWeight: 'normal',
      letterSpacing: toEm(0.21, 32),
      lineHeight: 40 / 32,
    },
    h5: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(24),
      fontWeight: 'normal',
      letterSpacing: toEm(0, 24),
      lineHeight: 32 / 24,
    },
    h6: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(18),
      fontWeight: 'normal',
      letterSpacing: toEm(0.2, 18),
      lineHeight: 24 / 16,
    },
    subtitle1: {
      fontSize: toRem(16),
      letterSpacing: toEm(0.15, 16),
      lineHeight: 24 / 16,
    },
    subtitle2: {
      fontFamily: HEADING_FONT,
      fontSize: toRem(16),
      fontWeight: 'bold',
      letterSpacing: toEm(0.1, 16),
      lineHeight: 24 / 16,
    },
    body1: {
      fontSize: toRem(16),
      letterSpacing: toEm(0.5, 16),
      lineHeight: 24 / 16,
      color: SECONDARY_TEXT,
    },
    body2: {
      fontSize: toRem(14),
      letterSpacing: toEm(0.25, 14),
      lineHeight: 24 / 14,
      color: SECONDARY_TEXT,
    },
    button: {
      fontSize: toRem(14),
      fontWeight: 600,
      letterSpacing: toEm(0.67, 14),
      lineHeight: 16 / 14,
    },
    overline: {
      fontSize: toRem(14),
      letterSpacing: toEm(2.5, 14),
      lineHeight: 16 / 14,
      color: DISABLED_TEXT,
    },
    caption: {
      fontSize: toRem(14),
      letterSpacing: toEm(0.5, 14),
      lineHeight: 16 / 14,
    },
  },
  spacing: spacingFn,
});

export const defaultOverrides: ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: { color: themeBase.palette.text.primary },
      },
    },

    MuiContainer: {
      root: {
        '@supports (padding: max(0px))': {
          paddingLeft: `max(${themeBase.spacing(
            2
          )}px, env(safe-area-inset-left))`,
          paddingRight: `max(${themeBase.spacing(
            2
          )}px, env(safe-area-inset-right))`,

          '@media (min-width: 640px)': {
            paddingLeft: `max(${themeBase.spacing(
              3
            )}px, env(safe-area-inset-left))`,
            paddingRight: `max(${themeBase.spacing(
              3
            )}px, env(safe-area-inset-right))`,
          },
        },
      },
    },
    MuiTooltip: {
      tooltip: themeBase.typography.caption,
    },

    MuiButton: {
      root: {
        borderRadius: 500,
        minHeight: 36,
      },

      containedSizeLarge: {
        fontSize: themeBase.typography.button.fontSize,
        minHeight: 48,
        paddingLeft: 32,
        paddingRight: 32,
      },
      outlinedSizeLarge: {
        fontSize: themeBase.typography.button.fontSize,
        minHeight: 48,
        paddingLeft: 31,
        paddingRight: 31,
      },
      textSizeLarge: {
        fontSize: themeBase.typography.button.fontSize,
        minHeight: 48,
        paddingLeft: 16,
        paddingRight: 16,
      },

      containedSizeSmall: { minHeight: 30 },
      outlinedSizeSmall: { minHeight: 30 },
      textSizeSmall: { minHeight: 30 },

      containedPrimary: {
        '&:hover': { backgroundColor: themeBase.palette.primary.light },
      },
      containedSecondary: {
        '&:hover': { backgroundColor: antlerPalette.aGray[700] },
      },

      outlinedPrimary: {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        '&:hover, &$focusVisible': {
          borderColor: themeBase.palette.primary.main,
        },
      },
      outlinedSecondary: {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        '&:hover, &$focusVisible': {
          borderColor: themeBase.palette.secondary.main,
        },
      },
    },

    MuiSvgIcon: {
      fontSizeLarge: { fontSize: toRem(36) },
    },

    MuiFilledInput: {
      root: {
        '&&': { borderRadius: 0 },
        backgroundColor: antlerPalette.aGray[100],
        boxShadow: `0 0 0 1px ${antlerPalette.aGray[300]} inset`,

        transition: themeBase.transitions.create(
          ['background-color', 'box-shadow'],
          {
            duration: themeBase.transitions.duration.shorter,
            easing: themeBase.transitions.easing.easeOut,
          }
        ),

        '&:hover': {
          backgroundColor: antlerPalette.aGray[100],
          boxShadow: `0 0 0 1px ${antlerPalette.aGray[700]} inset`,
        },
        '&$focused': {
          backgroundColor: antlerPalette.aGray[200],
          boxShadow: `0 0 0 1px ${antlerPalette.aGray[700]} inset`,
        },

        '&$error': {
          boxShadow: `0 0 0 2px ${antlerPalette.errorRed[100]} inset`,
          '& button': { color: themeBase.palette.error.main },
        },
        '&$error:hover, &$error$focused': {
          boxShadow: `0 0 0 2px ${antlerPalette.errorRed[500]} inset`,
        },

        '&$disabled, &$disabled$error': {
          backgroundColor: antlerPalette.aWhite[500],
          boxShadow: `0 0 0 1px rgba(25, 25, 25, 0.32) inset`,
          '& button': { color: themeBase.palette.action.disabled },
        },
      },
      input: { padding: '27px 16px 10px' },
      multiline: { padding: '27px 16px 10px' },
      adornedEnd: {
        '& button': { marginRight: themeBase.spacing(-1) },
      },
    },
    MuiInputLabel: {
      filled: {
        color: themeBase.palette.text.primary,

        lineHeight: 1.2,
        transform: 'translate(16px, 19px) scale(1)',
        '&$marginDense': { transform: 'translate(16px, 19px) scale(1)' },

        maxWidth: 'calc(100% - 16px - 48px)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',

        '&$shrink': {
          transform: 'translate(16px, 9.5px) scale(0.875)',
          '&$marginDense': { transform: 'translate(16px, 9.5px) scale(0.875)' },
          maxWidth: 'calc(100% - 24px)',
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': { color: themeBase.palette.text.primary },
        '&$disabled, &$disabled$error': {
          color: themeBase.palette.text.disabled,
        },
      },
    },
    MuiInputBase: {
      root: { color: themeBase.palette.text.secondary },
    },
    MuiSelect: {
      iconFilled: { right: 12 },
    },
    MuiFormHelperText: {
      root: {
        color: themeBase.palette.text.primary,

        '&$disabled, &$disabled$error': {
          color: themeBase.palette.text.disabled,
        },
      },
      contained: {
        marginLeft: themeBase.spacing(2),
        marginRight: themeBase.spacing(2),
      },
    },

    // Override radio & checkbox labels
    MuiFormControlLabel: {
      root: { display: 'flex' },
      label: themeBase.typography.body2,
    },

    MuiChip: {
      root: { color: themeBase.palette.text.secondary },
      outlined: { borderColor: themeBase.palette.divider },

      label: {
        ...themeBase.typography.overline,
        color: 'inherit',

        paddingLeft: 24,
        paddingRight: 24,

        '$outlined &': {
          paddingLeft: 23,
          paddingRight: 23,
        },

        [themeBase.breakpoints.down('xs')]: {
          paddingLeft: 16,
          paddingRight: 16,

          '$outlined &': {
            paddingLeft: 15,
            paddingRight: 15,
          },
        },
      },
      labelSmall: {
        paddingLeft: 24,
        paddingRight: 24,

        '$outlined &': {
          paddingLeft: 23,
          paddingRight: 23,
        },

        [themeBase.breakpoints.down('xs')]: {
          paddingLeft: 16,
          paddingRight: 16,

          '$outlined &': {
            paddingLeft: 15,
            paddingRight: 15,
          },
        },
      },

      icon: {
        color: 'inherit',

        marginLeft: 16,
        marginRight: 8 - 24,
        '$outlined &': {
          marginLeft: 15,
          marginRight: 8 - 24 + 1,
        },

        [themeBase.breakpoints.down('xs')]: {
          marginLeft: 8,
          marginRight: 8 - 16,
          '$outlined &': {
            marginLeft: 7,
            marginRight: 8 - 16 + 1,
          },
        },
      },
      iconSmall: {
        marginLeft: 16,
        marginRight: 8 - 24,
        '$outlined &': {
          marginLeft: 15,
          marginRight: 8 - 24 + 1,
        },

        [themeBase.breakpoints.down('xs')]: {
          marginLeft: 8,
          marginRight: 8 - 16,
          '$outlined &': {
            marginLeft: 7,
            marginRight: 8 - 16 + 1,
          },
        },
      },

      deleteIcon: {
        color: 'inherit',

        marginRight: 16,
        marginLeft: 8 - 24,
        '$outlined &': {
          marginRight: 15,
          marginLeft: 8 - 24 + 1,
        },

        [themeBase.breakpoints.down('xs')]: {
          marginRight: 8,
          marginLeft: 8 - 16,
          '$outlined &': {
            marginRight: 7,
            marginLeft: 8 - 16 + 1,
          },
        },
      },
      deleteIconSmall: {
        marginRight: 16,
        marginLeft: 8 - 24,
        '$outlined &': {
          marginRight: 15,
          marginLeft: 8 - 24 + 1,
        },

        [themeBase.breakpoints.down('xs')]: {
          marginRight: 8,
          marginLeft: 8 - 16,
          '$outlined &': {
            marginRight: 7,
            marginLeft: 8 - 16 + 1,
          },
        },
      },
      deleteIconColorPrimary: { color: 'inherit' },
      deleteIconColorSecondary: { color: 'inherit' },
      deleteIconOutlinedColorPrimary: { color: 'inherit' },
      deleteIconOutlinedColorSecondary: { color: 'inherit' },

      clickable: {
        '&:active': { boxShadow: 'none' },
      },
    },

    MuiBadge: {
      badge: {
        ...themeBase.typography.caption,
        fontFeatureSettings: '"tnum"',
      },
    },

    MuiPaper: {
      rounded: { borderRadius: themeBase.shape.borderRadius * 2 },
      // Default elevation - show shadow only on hover
      elevation1: {
        transition: themeBase.transitions.create('box-shadow', {
          duration: themeBase.transitions.duration.short,
        }),
        boxShadow: 'none',
        '&:hover': { boxShadow: themeBase.shadows[1] },
      },
    },

    MuiSlider: {
      disabled: {},
      rail: {
        backgroundColor: '#e7e7e7',
        opacity: 1,
      },

      mark: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        marginLeft: -2,
        marginTop: -1,
        backgroundColor: '#69696a',
        '$disabled &': { backgroundColor: 'currentColor' },
      },
      markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
        '$disabled &': { backgroundColor: 'currentColor' },
      },

      thumb: {
        width: 16,
        height: 16,
        marginTop: -7,
        marginLeft: -8,

        '$disabled &': {
          width: 12,
          height: 12,
          marginTop: -5,
          marginLeft: -6,
        },
      },

      valueLabel: {
        top: -22,
        ...themeBase.typography.caption,
        color: themeBase.palette.primary.main,

        '& > *': {
          width: 'auto',
          minWidth: 24,
          height: 24,

          whiteSpace: 'nowrap',
          borderRadius: 500,

          padding: themeBase.spacing(0, 1),
          paddingRight: themeBase.spacing(0.875),
        },
        '& *': { transform: 'none' },
      },
      markLabel: themeBase.typography.caption,
    },
    MuiLinearProgress: {
      colorPrimary: { backgroundColor: '#e7e7e7' },
      colorSecondary: { backgroundColor: '#e7e7e7' },
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        subtitle1: 'div',
        subtitle2: 'div',
      },
    },
    MuiRadio: { color: 'primary' },
    MuiCheckbox: { color: 'primary' },
    MuiButton: {
      color: 'primary',
      disableElevation: true,
    },
    MuiTabs: {
      indicatorColor: 'primary',
      textColor: 'primary',
    },
    MuiCircularProgress: { size: 44 },
    // Select: show dropdown below text field to follow new Material spec
    MuiSelect: {
      MenuProps: {
        getContentAnchorEl: null,
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        transformOrigin: { vertical: 'top', horizontal: 'center' },
      },
    },
    MuiLink: {
      color: 'primary',
      underline: 'hover',
    },
    MuiChip: {
      size: 'small',
      deleteIcon: <ClearIcon />,
    },
    MuiTextField: { variant: 'filled' },
    MuiTooltip: { enterTouchDelay: 0 },
    MuiFilledInput: { disableUnderline: true },
    MuiPaper: { square: true },
  },
};

export const defaultTheme = createMuiTheme(
  _merge({}, themeBase, defaultOverrides)
);

export const generateTheme = (options: ThemeOptions, ...args: Object[]) =>
  createMuiTheme(_merge({}, themeBase, defaultOverrides, options), ...args);

export default defaultTheme;
