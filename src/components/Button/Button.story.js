import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  // options,
  // number,
  select,
  // text,
} from '@storybook/addon-knobs';
import {
  ButtonGroup,
  Grid,
} from '@chakra-ui/core';
import Button, { Meta } from './Button';
import { Heading } from '../index';

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
          p='24px'
          rowGap='36px'
          templateColumns='100%'
          templateRows='repeat(auto-fill, minmax(40px, 1fr))'
        >
          <ButtonGroup>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Button Sizing
            </Heading>
            <Button
              isLoading={boolean('Show Loading State')}
              onClick={action('clicked')}
              size='xs'
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Button
            </Button>
            <Button
              isLoading={boolean('Show Loading State')}
              loadingText='Loading…'
              onClick={action('clicked')}
              size='sm'
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Button
            </Button>
            <Button
              isLoading={boolean('Show Loading State')}
              onClick={action('clicked')}
              size='md'
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Button
            </Button>
            <Button
              isLoading={boolean('Show Loading State')}
              loadingText='Loading…'
              onClick={action('clicked')}
              size='lg'
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Button
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Icon Buttons
            </Heading>
            <Button
              leftIcon='FiMail'
              isLoading={boolean('Show Loading State')}
              loadingText='Fetching…'
              onClick={action('clicked')}
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Email
            </Button>
            <Button
              rightIcon='FiPhone'
              isLoading={boolean('Show Loading State')}
              loadingText='Fetching…'
              onClick={action('clicked')}
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Call us
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Prioritizing Via Emphasis
            </Heading>
            <Button
              isLoading={boolean('Show Loading State')}
              loadingText='Cancelling…'
              onClick={action('clicked')}
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant='ghost'
            >
              Cancel
            </Button>
            <Button
              isLoading={boolean('Show Loading State')}
              loadingText='Saving…'
              onClick={action('clicked')}
              variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
              variant={select('Variant', options.variant, defaultOptions.variant)}
            >
              Save
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
