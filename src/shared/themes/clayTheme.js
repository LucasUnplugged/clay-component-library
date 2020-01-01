import { generateColors } from '../utils/themeUtil';

const clayTheme = {
  button: {
    ghost: {
      borderWidth: 0,
      cursor: 'pointer',
    },
    link: {
      cursor: 'pointer',
    },
    outline: {
      borderColor: 'theme--colors.#{variantColor}.200',
      color: 'theme--colors.#{variantColor}.400',
      cursor: 'pointer',
      '&:hover': {
        background: 'theme--colors.#{variantColor}.500',
        borderColor: 'theme--colors.#{variantColor}.500',
        color: 'theme--colors.text.#{variantColor}.500',
      },
      '&:focus': {
        background: 'theme--colors.#{variantColor}.500',
        borderColor: 'theme--colors.#{variantColor}.500',
        boxShadow: 'none',
        color: 'theme--colors.text.#{variantColor}.500',
      },
      '&:active': {
        background: 'theme--colors.#{variantColor}.300',
        borderColor: 'theme--colors.#{variantColor}.300',
        color: 'theme--colors.text.#{variantColor}.300',
      },
    },
    solid: {
      borderWidth: '0 0 2px',
      borderColor: 'theme--colors.#{variantColor}.200',
      color: 'theme--colors.text.#{variantColor}.500',
      cursor: 'pointer',
      '&:hover': {
        background: 'theme--colors.#{variantColor}.700',
        borderColor: 'theme--colors.#{variantColor}.400',
        color: 'theme--colors.text.#{variantColor}.500',
      },
      '&:focus': {
        background: 'theme--colors.#{variantColor}.900',
        borderColor: 'theme--colors.#{variantColor}.600',
        boxShadow: 'none',
        color: 'theme--colors.text.#{variantColor}.900',
      },
      '&:active': {
        borderWidth: '2px 0 0',
        background: 'theme--colors.#{variantColor}.500',
        borderColor: 'theme--colors.#{variantColor}.400',
        color: 'theme--colors.text.#{variantColor}.500',
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
