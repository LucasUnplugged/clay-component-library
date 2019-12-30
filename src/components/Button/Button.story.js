import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  options,
  number,
  select,
  text,
} from '@storybook/addon-knobs';
import { ThemeProvider, theme } from '@chakra-ui/core';
import { ButtonGroup } from '@chakra-ui/core';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  // decorators: [storyFn => (
  //   <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  // )],
};

export const regular = () => {
  // const options = {
  //   variantColor: [ 'primary', 'secondary', 'tertiary' ],
  // };
  // const defaultOptions = {
  //   variantColor: 'primary',
  // };
  return (
    <ButtonGroup>
      <Button
        onClick={action('clicked')}
        variantColor='primary'
      >
        Button
      </Button>
      <Button
        onClick={action('clicked')}
        variantColor='secondary'
      >
        Button
      </Button>
      <Button
        onClick={action('clicked')}
        variantColor='tertiary'
      >
        Button
      </Button>
    </ButtonGroup>
  );
};
regular.story = {
  name: 'Regular Button',
};
