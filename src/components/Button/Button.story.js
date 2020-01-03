import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  // boolean,
  // options,
  // number,
  select,
  // text,
} from '@storybook/addon-knobs';
import { ButtonGroup, Grid } from '@chakra-ui/core';
import Button, { Meta } from './Button';
// import { ThemeProvider, theme } from '@chakra-ui/core';

storiesOf('Button', module)
  .add(
    'Default',
    () => {
      const options = {
        variant: ['outline', 'ghost', 'link', 'solid'],
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
              leftIcon='arrow-back'
              onClick={action('clicked')}
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Loading
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
    },
    {
      component: Meta,
      componentSubtitle: 'Themed Examples',
    }
  );
