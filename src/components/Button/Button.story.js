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
import { ButtonGroup, Grid } from '@chakra-ui/core';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  // decorators: [storyFn => (
  //   <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  // )],
};

export const regular = () => {
  const options = {
    variant: ['outline', 'ghost', 'unstyled', 'link', 'solid'],
    variantColor: [ 'primary', 'secondary', 'tertiary', 'neutral' ],
  };
  const defaultOptions = {
    variant: 'solid',
    variantColor: 'primary',
  };
  return (
    <Grid
      p='12px'
      rowGap='12px'
      templateColumns='100%'
      templateRows='repeat(auto-fill, minmax(40px, 1fr))'
    >
      <ButtonGroup>
        <Button
          onClick={action('clicked')}
          size='xs'
          variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
          variant={select('Variant', options.variant, defaultOptions.variant)}
        >
          Button
        </Button>
        <Button
          onClick={action('clicked')}
          size='sm'
          variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
          variant={select('Variant', options.variant, defaultOptions.variant)}
        >
          Button
        </Button>
        <Button
          onClick={action('clicked')}
          size='md'
          variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
          variant={select('Variant', options.variant, defaultOptions.variant)}
        >
          Button
        </Button>
        <Button
          onClick={action('clicked')}
          size='lg'
          variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
          variant={select('Variant', options.variant, defaultOptions.variant)}
        >
          Button
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          leftIcon='email'
          onClick={action('clicked')}
          variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
          variant={select('Variant', options.variant, defaultOptions.variant)}
        >
          Email
        </Button>
        <Button
          rightIcon='arrow-forward'
          onClick={action('clicked')}
          variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
          variant={select('Variant', options.variant, defaultOptions.variant)}
        >
          Call us
        </Button>
      </ButtonGroup>
    </Grid>
  );
};
regular.story = {
  name: 'Regular Button',
};
