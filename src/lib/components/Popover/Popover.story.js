import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  // options,
  // number,
  select,
  text,
} from '@storybook/addon-knobs';
import {
  Box,
  Button as ButtonInner,
  ButtonGroup,
  Grid,
  Popover as InnerPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/core';
import Popover, { Meta } from './Popover';
import { Button, Heading } from '../index';

storiesOf('Popover', module)
  .add(
    'Default',
    () => {
      const options = {
        icons: [
          'FiMail',
          'FiPhone',
          'MdMailOutline',
          'FiInfo',
        ],
        trigger: [ 'click', 'hover' ],
        placement: [ 'bottom', 'left', 'right', 'top' ],
        variant: ['outline', 'ghost', 'link', 'solid'],
        variantColor: [ 'primary', 'secondary', 'tertiary', 'neutral' ],
      };
      const defaultOptions = {
        icons: 'FiInfo',
        trigger: 'click',
        placement: 'bottom',
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
          <Box>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Default Popover
            </Heading>
            <Popover
              button={{
                disabled: boolean('Show Disabled State', false),
                icon: select('Icon', options.icons, defaultOptions.icons),
                isLoading: boolean('Show Loading State', false),
                mx: 8,
                my: '50px',
                onClick: action('clicked'),
                variantColor: select('Variant Colour', options.variantColor, defaultOptions.variantColor),
                variant: select('Variant', options.variant, defaultOptions.variant),
              }}
              closeOnBlur={boolean('Close on Blur', false)}
              hideArrow={boolean('Hide Arrow', false)}
              hideCloseButton={boolean('Hide Close Button', false)}
              title={text('Popover Title', 'Title')}
              trigger={select('Trigger', options.trigger, defaultOptions.trigger)}
              placement={select('Placement', options.placement, defaultOptions.placement)}
            >
              {text('Popover Contents', 'Some interesting and informative contents.')}
            </Popover>
          </Box>
        </Grid>
      );
    },
    {
      component: Meta,
      componentSubtitle: 'And on-click popover',
    }
  );
