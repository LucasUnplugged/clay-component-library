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
import Popover, { Meta } from './Popover';
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
} from '../index';

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
      const initialFocusRef = React.useRef();
      return (
        <Grid
          mt='40px'
          p={12}
          rowGap='36px'
          templateColumns='100%'
          templateRows='repeat(auto-fill, minmax(40px, 1fr))'
        >
          <Box>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Basic Popover
            </Heading>
            <Popover
              button={{
                isDisabled: boolean('Show Disabled State', false),
                icon: select('Icon', options.icons, defaultOptions.icons),
                isLoading: boolean('Show Loading State', false),
                mx: 8,
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

          <Box>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Popover w/ Text and Footer
            </Heading>
            <Popover
              button={{
                isDisabled: boolean('Show Disabled State', false),
                icon: select('Icon', options.icons, defaultOptions.icons),
                isLoading: boolean('Show Loading State', false),
                loadingText: 'Loading…',
                mx: 8,
                onClick: action('clicked'),
                text: 'Info',
                variantColor: select('Variant Colour', options.variantColor, defaultOptions.variantColor),
                variant: select('Variant', options.variant, defaultOptions.variant),
              }}
              closeOnBlur={boolean('Close on Blur', false)}
              footer={(
                <Flex align='center' justify='flex-end'>
                  <ButtonGroup>
                    <Button
                      variant='ghost'
                      variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
                    >
                      Cancel
                    </Button>
                    <Button
                      ref={initialFocusRef}
                      variant={select('Variant', options.variant, defaultOptions.variant)}
                      variantColor={select('Variant Colour', options.variantColor, defaultOptions.variantColor)}
                    >
                      Confirm
                    </Button>
                  </ButtonGroup>
                </Flex>
              )}
              initialFocusRef={initialFocusRef}
              hideArrow={boolean('Hide Arrow', false)}
              hideCloseButton={boolean('Hide Close Button', false)}
              lockFocus={true}
              title={(
                <Flex align='center' justify='flex-start'>
                  <Heading
                    as='h4'
                    fontWeight='normal'
                    mr='2'
                    size='sm'
                  >
                    {text('Popover Title', 'Title')}
                  </Heading>
                  <Badge
                    variantColor='neutral'
                  >
                    15
                  </Badge>
                </Flex>
              )}
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
