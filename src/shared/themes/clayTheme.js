import { generateColors } from '../utils/themeUtil';

const clayTheme = {
  button: {
    ghost: {
      borderWidth: 0,
      color: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
      cursor: 'pointer',
      fontWeight: 'theme--fontWeights.light',
      '&:hover': {
        background: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
        color: '%[theme--colors.text.#{variantColor}.400/theme--colors.text.tertiary.900]',
      },
      '&:focus': {
        background: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        boxShadow: 'none',
        color: '%[theme--colors.text.#{variantColor}.500/theme--colors.text.tertiary.800]',
      },
      '&:active': {
        background: '%[theme--colors.#{variantColor}.300/theme--colors.tertiary.600]',
        color: '%[theme--colors.text.#{variantColor}.300/theme--colors.text.tertiary.600]',
      },
    },
    link: {
      borderBottomColor: 'transparent',
      borderBottomWidth: '5px',
      borderRadius: 0,
      color: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
      cursor: 'pointer',
      fontWeight: 'theme--fontWeights.light',
      '&:hover': {
        background: 'none',
        borderBottomColor: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
        color: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
        textDecoration: 'none',
      },
      '&:focus': {
        background: 'none',
        boxShadow: 'none',
        borderBottomColor: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
        color: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
        textDecoration: 'none',
      },
      '&:active': {
        background: 'none',
        borderBottomColor: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        color: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        textDecoration: 'none',
      },
    },
    outline: {
      borderColor: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
      color: '%[theme--colors.#{variantColor}.400/theme--colors.tertiary.900]',
      cursor: 'pointer',
      fontWeight: 'theme--fontWeights.light',
      '&:hover': {
        background: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        borderColor: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        color: '%[theme--colors.text.#{variantColor}.500/theme--colors.text.tertiary.800]',
      },
      '&:focus': {
        background: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        borderColor: '%[theme--colors.#{variantColor}.500/theme--colors.tertiary.800]',
        boxShadow: 'none',
        color: '%[theme--colors.text.#{variantColor}.500/theme--colors.text.tertiary.800]',
      },
      '&:active': {
        background: '%[theme--colors.#{variantColor}.300/theme--colors.tertiary.600]',
        borderColor: '%[theme--colors.#{variantColor}.300/theme--colors.tertiary.600]',
        color: '%[theme--colors.text.#{variantColor}.300/theme--colors.text.tertiary.600]',
      },
    },
    solid: {
      background: 'theme--colors.#{variantColor}.%[500/900]',
      borderColor: 'theme--colors.#{variantColor}.%[200/700]',
      borderWidth: '0 0 2px',
      color: 'theme--colors.text.#{variantColor}.%[500/900]',
      cursor: 'pointer',
      fontWeight: 'theme--fontWeights.light',
      '&:hover': {
        background: 'theme--colors.#{variantColor}.%[700/800]',
        borderColor: 'theme--colors.#{variantColor}.%[400/600]',
        color: 'theme--colors.text.#{variantColor}.%[500/900]',
      },
      '&:focus': {
        background: 'theme--colors.#{variantColor}.%[900/600]',
        borderColor: 'theme--colors.#{variantColor}.%[600/300]',
        boxShadow: 'none',
        color: 'theme--colors.text.#{variantColor}.%[900/600]',
      },
      '&:active': {
        background: 'theme--colors.#{variantColor}.%[500/800]',
        borderColor: 'theme--colors.#{variantColor}.%[400/700]',
        borderWidth: '2px 0 0',
        color: 'theme--colors.text.#{variantColor}.%[500/800]',
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
