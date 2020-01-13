import React from 'react';
import _ from 'lodash';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  // options,
  // number,
  select,
  text,
} from '@storybook/addon-knobs';
import Graph, { Meta } from './Graph';
import {
  Box,
  // Button,
  // ButtonGroup,
  // Flex,
  Grid,
  Heading,
} from '../index';

const GRAPH_DATA = [
  {
    motion: { total: 1 },
    timestamp: 1578867266,
    transaction: { total: 10 },
  },
  {
    motion: { total: 2 },
    timestamp: 1578876266,
    transaction: { total: 20 },
  },
  {
    motion: { total: 3 },
    timestamp: 1578885266,
    transaction: { total: 30 },
  },
  {
    motion: { total: 4 },
    timestamp: 1578894266,
    transaction: { total: 40 },
  },
  {
    motion: { total: 5 },
    timestamp: 1578903266,
    transaction: { total: 50 },
  },
];
const MULTI_GRAPH_DATA = [
  [
    {
      motion: { total: 1 },
      timestamp: 1578867266,
      transaction: { total: 10 },
    },
    {
      motion: { total: 2 },
      timestamp: 1578876266,
      transaction: { total: 20 },
    },
    {
      motion: { total: 3 },
      timestamp: 1578885266,
      transaction: { total: 30 },
    },
    {
      motion: { total: 4 },
      timestamp: 1578894266,
      transaction: { total: 40 },
    },
    {
      motion: { total: 5 },
      timestamp: 1578903266,
      transaction: { total: 50 },
    },
  ],
  [
    {
      motion: { total: 11 },
      timestamp: 1578867266,
      transaction: { total: 110 },
    },
    {
      motion: { total: 21 },
      timestamp: 1578876266,
      transaction: { total: 210 },
    },
    {
      motion: { total: 31 },
      timestamp: 1578885266,
      transaction: { total: 310 },
    },
    {
      motion: { total: 41 },
      timestamp: 1578894266,
      transaction: { total: 410 },
    },
    {
      motion: { total: 51 },
      timestamp: 1578903266,
      transaction: { total: 510 },
    },
  ],
  [
    {
      motion: { total: 21 },
      timestamp: 1578867266,
      transaction: { total: 210 },
    },
    {
      motion: { total: 22 },
      timestamp: 1578876266,
      transaction: { total: 220 },
    },
    {
      motion: { total: 23 },
      timestamp: 1578885266,
      transaction: { total: 230 },
    },
    {
      motion: { total: 24 },
      timestamp: 1578894266,
      transaction: { total: 240 },
    },
    {
      motion: { total: 25 },
      timestamp: 1578903266,
      transaction: { total: 250 },
    },
  ],
];
const Y_AXIS_LABELS = {
  motion: [ 5, 10, 15, 20, 25, 30, 35, 40, 45 ],
  transaction: [ 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700 ],
};
const LABEL = [ 'AAA', 'BBB', 'CCC', 'DDD' ];
const TIME_TO_LABEL = timestamp => {
  console.warn('timestamp', timestamp);
  if (_.isNaN(timestamp) || !_.isNumber(timestamp)) {
    return 'NaN';
  }
  // return LABEL[index];
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};

storiesOf('Graph', module)
  .add(
    'Default',
    () => {
      const options = {
        eventTypes: [ 'motion', 'transaction' ],
        type: [ 'area', 'bar', 'line' ],
      };
      const defaultOptions = {
        eventTypes: 'transaction',
        type: 'bar',
      };
      const initialFocusRef = React.useRef();
      const eventType = select('Event Type', options.eventTypes, defaultOptions.eventTypes)
      return (
        <Grid
          p='24px'
          rowGap='36px'
          templateColumns='100%'
          templateRows='repeat(auto-fill, minmax(40px, 1fr))'
        >
          <Box w={500}>
            <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
              Single Graph
            </Heading>
            <Graph
              css={{}}
              data={GRAPH_DATA}
              direction='horizontal'
              isMultiGraph={false}
              type={select('Graph Type', options.type, defaultOptions.type)}
              horizontalLabels={TIME_TO_LABEL}
              verticalLabels={[ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]}
              xProp='timestamp'
              yProp={`${eventType}.total`}
            />
          </Box>
          {
            false &&
              <Box>
                <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={4}>
                  Stacked Graph
                </Heading>
                <Graph
                  css={{}}
                  data={MULTI_GRAPH_DATA}
                  direction='horizontal'
                  isMultiGraph={true}
                  type={select('Graph Type', options.type, defaultOptions.type)}
                  horizontalLabels={TIME_TO_LABEL}
                  verticalLabels={Y_AXIS_LABELS[eventType]}
                  xProp='timestamp'
                  yProp={`${eventType}.total`}
                />
              </Box>
          }
        </Grid>
      );
    },
    {
      component: Meta,
      componentSubtitle: 'Examples of various graph types',
    }
  );
