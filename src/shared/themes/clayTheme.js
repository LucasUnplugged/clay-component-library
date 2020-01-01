import { generateColors } from '../utils/themeUtil';

const clayTheme = {
  button: {
    ghost: {},
    link: {},
    outline: {
      borderColor: 'colors--#{variantColor}.200',
      color: 'colors--#{variantColor}.400',
      '&:active': {
        background: 'colors--#{variantColor}.300',
        borderColor: 'colors--#{variantColor}.300',
        color: 'colors--text.#{variantColor}.300',
      },
      '&:focus': {
        background: 'colors--#{variantColor}.900',
        borderColor: 'colors--#{variantColor}.900',
        boxShadow: 'none',
        color: 'colors--text.#{variantColor}.900',
      },
      '&:hover': {
        background: 'colors--#{variantColor}.500',
        borderColor: 'colors--#{variantColor}.500',
        color: 'colors--text.#{variantColor}.500',
        cursor: 'pointer',
      },
    },
    solid: {
      borderWidth: '0 0 2px',
      borderColor: 'colors--#{variantColor}.200',
      color: 'colors--text.#{variantColor}.500',
      '&:active': {
        borderWidth: '2px 0 0',
        background: 'colors--#{variantColor}.500',
        borderColor: 'colors--#{variantColor}.400',
        color: 'colors--text.#{variantColor}.500',
      },
      '&:focus': {
        background: 'colors--#{variantColor}.900',
        borderColor: 'colors--#{variantColor}.600',
        boxShadow: 'none',
        color: 'colors--text.#{variantColor}.900',
      },
      '&:hover': {
        background: 'colors--#{variantColor}.700',
        borderColor: 'colors--#{variantColor}.400',
        color: 'colors--text.#{variantColor}.500',
        cursor: 'pointer',
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
