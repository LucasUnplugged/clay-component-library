import { generateColors } from '../utils/themeUtil';

export default {
  Button: {
    base: {
      cursor: 'pointer',
      fontWeight: '!<fontWeights.light>',
    },
    ghost: {
      borderWidth: 0,
      color: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      fontWeight: '!<fontWeights.normal>',
      '&:hover': {
        background: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.800>]',
        color: '%[!<colors.text.#{variantColor}.400>/!<colors.text.tertiary.800>]',
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
      '&:disabled, &[aria-disabled=true], &:disabled:hover, &[aria-disabled=true]:hover, &:disabled:active, &[aria-disabled=true]:active': {
        background: 'none',
        color: '%[!<colors.neutral.200>/!<colors.neutral.900>]',
        opacity: 1,
      },
    },
    link: {
      borderBottomColor: 'transparent',
      borderBottomWidth: '1px',
      borderRadius: 0,
      color: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      fontWeight: '!<fontWeights.normal>',
      '&:hover, &:focus, &:active': {
        background: 'none',
        boxShadow: 'none',
        textDecoration: 'none',
      },
      '&:hover, &:focus': {
        borderBottomColor: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.900>]',
        color: '%[!<colors.#{variantColor}.300>/!<colors.tertiary.900>]',
      },
      '&:active': {
        borderBottomColor: '%[!<colors.#{variantColor}.100>/!<colors.tertiary.800>]',
        color: '%[!<colors.#{variantColor}.100>/!<colors.tertiary.800>]',
      },
      '&:disabled, &[aria-disabled=true], &:disabled:hover, &[aria-disabled=true]:hover, &:disabled:active, &[aria-disabled=true]:active': {
        borderBottomColor: 'transparent',
        color: '%[!<colors.neutral.200>/!<colors.neutral.900>]',
        opacity: 1,
      },
    },
    outline: {
      borderColor: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      color: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.900>]',
      fontWeight: '!<fontWeights.normal>',
      '&:hover, &:focus': {
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
      '&:disabled, &[aria-disabled=true], &:disabled:hover, &[aria-disabled=true]:hover, &:disabled:active, &[aria-disabled=true]:active': {
        background: 'none',
        borderColor: '%[!<colors.neutral.200>/!<colors.neutral.900>]',
        color: '%[!<colors.neutral.200>/!<colors.neutral.900>]',
        opacity: 1,
      },
    },
    solid: {
      background: '%[!<colors.#{variantColor}.500>/!<colors.tertiary.800>]',
      borderColor: '%[!<colors.#{variantColor}.200>/!<colors.tertiary.600>]',
      borderWidth: '0 0 2px',
      color: '%[!<colors.text.#{variantColor}.500>/!<colors.text.tertiary.800>]',
      '&:hover': {
        background: '%[!<colors.#{variantColor}.700>/!<colors.tertiary.700>]',
        borderColor: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.500>]',
        color: '%[!<colors.text.#{variantColor}.500>/!<colors.text.tertiary.800>]',
      },
      '&:focus': {
        background: '%[!<colors.#{variantColor}.900>/!<colors.tertiary.600>]',
        borderColor: '%[!<colors.#{variantColor}.600>/!<colors.tertiary.300>]',
        boxShadow: 'none',
        color: '%[!<colors.text.#{variantColor}.900>/!<colors.text.tertiary.600>]',
      },
      '&:active': {
        background: '%[!<colors.#{variantColor}.400>/!<colors.tertiary.600>]',
        borderColor: '%[!<colors.#{variantColor}.200>/!<colors.tertiary.300>]',
        borderWidth: '2px 0 0',
        color: '%[!<colors.text.#{variantColor}.400>/!<colors.text.tertiary.600>]',
      },
      '&:disabled, &[aria-disabled=true], &:disabled:hover, &[aria-disabled=true]:hover, &:disabled:active, &[aria-disabled=true]:active': {
        background: '%[!<colors.neutral.600>/!<colors.neutral.800>]',
        borderColor: '%[!<colors.neutral.400>/!<colors.neutral.600>]',
        borderWidth: '0 0 2px',
        color: '%[!<colors.text.neutral.600>/!<colors.text.neutral.800>]',
        opacity: 1,
      },
    },
  },
  Heading: {
    base: {
      color: '%[!<colors.neutral.200>/!<colors.neutral.800>]',
    },
  },
  IconButton: {
    link: {
      minWidth: 0,
      '&:hover': {
        borderBottomColor: 'transparent',
        color: '%[!<colors.#{variantColor}.200>/!<colors.white>]',
      },
      '&:focus': {
        borderBottomColor: 'transparent',
        color: '%[!<colors.#{variantColor}.100>/!<colors.white>]',
      },
      '&:active': {
        borderBottomColor: 'transparent',
        color: '%[!<colors.#{variantColor}.50>/!<colors.tertiary.700>]',
      },
      '&:disabled, &[aria-disabled=true], &:disabled:hover, &[aria-disabled=true]:hover, &:disabled:active, &[aria-disabled=true]:active': {
        borderBottomColor: 'transparent',
        color: '%[!<colors.neutral.200>/!<colors.neutral.900>]',
        opacity: 1,
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
