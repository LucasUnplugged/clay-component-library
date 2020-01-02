import { generateColors } from '../utils/themeUtil';

const clayTheme = {
  button: {
    base: {
      fontWeight: '!<fontWeights.light>',
    },
    ghost: {
      borderWidth: 0,
      color: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      cursor: 'pointer',
      '&:hover': {
        background: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
        color: '%[!<colors.text.#{variantColor}.400>/!<colors.text.tertiary.900>]',
      },
      '&:focus': {
        background: '%[!<colors.#{variantColor}.500>/!<colors.tertiary.800>]',
        boxShadow: 'none',
        color: '%[!<colors.text.#{variantColor}.500>/!<colors.text.tertiary.800>]',
      },
      '&:active': {
        background: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.600>]',
        color: '%[!<colors.text.#{variantColor}.300>/!<colors.text.tertiary.600>]',
      },
    },
    link: {
      borderBottomColor: 'transparent',
      borderBottomWidth: '1px',
      borderRadius: 0,
      color: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      cursor: 'pointer',
      '&:hover': {
        background: 'none',
        borderBottomColor: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.900>]',
        color: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.900>]',
        textDecoration: 'none',
      },
      '&:focus': {
        background: 'none',
        borderBottomColor: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.900>]',
        boxShadow: 'none',
        color: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.900>]',
        textDecoration: 'none',
      },
      '&:active': {
        background: 'none',
        borderBottomColor: '%[!<colors.#{variantColor}.100>/!<colors.tertiary.800>]',
        color: '%[!<colors.#{variantColor}.100>/!<colors.tertiary.800>]',
        textDecoration: 'none',
      },
    },
    outline: {
      borderColor: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      color: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      cursor: 'pointer',
      '&:hover': {
        background: '%[!<colors.#{variantColor}.500>/!<colors.tertiary.800>]',
        borderColor: '%[!<colors.#{variantColor}.500>/!<colors.tertiary.800>]',
        color: '%[!<colors.text.#{variantColor}.500>/!<colors.text.tertiary.800>]',
      },
      '&:focus': {
        background: '%[!<colors.#{variantColor}.500>/!<colors.tertiary.800>]',
        borderColor: '%[!<colors.#{variantColor}.500>/!<colors.tertiary.800>]',
        boxShadow: 'none',
        color: '%[!<colors.text.#{variantColor}.500>/!<colors.text.tertiary.800>]',
      },
      '&:active': {
        background: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.600>]',
        borderColor: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.600>]',
        color: '%[!<colors.text.#{variantColor}.300>/!<colors.text.tertiary.600>]',
      },
    },
    solid: {
      background: '!<colors.#{variantColor}.%[500/900]>',
      borderColor: '!<colors.#{variantColor}.%[200/700]>',
      borderWidth: '0 0 2px',
      color: '!<colors.text.#{variantColor}.%[500/900]>',
      cursor: 'pointer',
      '&:hover': {
        background: '!<colors.#{variantColor}.%[700/800]>',
        borderColor: '!<colors.#{variantColor}.%[400/600]>',
        color: '!<colors.text.#{variantColor}.%[500/900]>',
      },
      '&:focus': {
        background: '!<colors.#{variantColor}.%[900/600]>',
        borderColor: '!<colors.#{variantColor}.%[600/300]>',
        boxShadow: 'none',
        color: '!<colors.text.#{variantColor}.%[900/600]>',
      },
      '&:active': {
        background: '!<colors.#{variantColor}.%[500/800]>',
        borderColor: '!<colors.#{variantColor}.%[400/700]>',
        borderWidth: '2px 0 0',
        color: '!<colors.text.#{variantColor}.%[500/800]>',
      },
    },
  },
  colors: generateColors({
    black: '#191715',
    white: '#ffffff',
    primary: {
      light: '#e57e76',
      regular: '#b55b4f',
      dark: '#8a3d38',
    },
    secondary: {
      light: '#5277cc',
      regular: '#3a59a0',
      dark: '#293b63',
    },
    tertiary: {
      light: '#ffcc00',
      regular: '#cc9200',
      dark: '#996200',
    },
    neutral: {
      light: '#d6d3d0',
      regular: '#999590',
      dark: '#66635f',
    },
  }),
};
export default clayTheme;
