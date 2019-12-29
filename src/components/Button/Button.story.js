import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  options,
  number,
  select,
  text,
} from '@storybook/addon-knobs';
// import { ThemeProvider, theme } from '@chakra-ui/core';
import Button from './Button';

export default {
  title: 'Button',
};

export const regular = () => {
  const options = {
    variantColor: [ 'primary', 'secondary', 'tertiary' ],
  };
  const defaultOptions = {
    variantColor: 'primary',
  };
  return (
    <Button
      onClick={action('clicked')}
      variantColor={select('Color Variant', options.variantColor, defaultOptions.variantColor)}
    >
      Button
    </Button>
  );
};

regular.story = {
  // decorators: [storyFn => (
  //   <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  // )],
  name: 'Regular Button',
};
