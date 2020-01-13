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
    timestamp: 1578867266,
    motion: { total: 10 },
    transaction: { total: 100 },
  },
  {
    timestamp: 1578876266,
    motion: { total: 40 },
    transaction: { total: 400 },
  },
  {
    timestamp: 1578885266,
    motion: { total: 30 },
    transaction: { total: 300 },
  },
  {
    timestamp: 1578894266,
    motion: { total: 20 },
    transaction: { total: 200 },
  },
  {
    timestamp: 1578903266,
    motion: { total: 50 },
    transaction: { total: 500 },
  },
];
const MULTI_GRAPH_DATA = [
  [
    {
      timestamp: 1578867266,
      motion: { total: 6 },
      transaction: { total: 60 },
    },
    {
      timestamp: 1578876266,
      motion: { total: 8 },
      transaction: { total: 80 },
    },
    {
      timestamp: 1578885266,
      motion: { total: 2 },
      transaction: { total: 20 },
    },
    {
      timestamp: 1578894266,
      motion: { total: 4 },
      transaction: { total: 40 },
    },
    {
      timestamp: 1578903266,
      motion: { total: 10 },
      transaction: { total: 100 },
    },
  ],
  [
    {
      timestamp: 1578867266,
      motion: { total: 51 },
      transaction: { total: 510 },
    },
    {
      timestamp: 1578876266,
      motion: { total: 21 },
      transaction: { total: 210 },
    },
    {
      timestamp: 1578885266,
      motion: { total: 31 },
      transaction: { total: 310 },
    },
    {
      timestamp: 1578894266,
      motion: { total: 11 },
      transaction: { total: 110 },
    },
    {
      timestamp: 1578903266,
      motion: { total: 41 },
      transaction: { total: 410 },
    },
  ],
  [
    {
      timestamp: 1578867266,
      motion: { total: 21 },
      transaction: { total: 210 },
    },
    {
      timestamp: 1578876266,
      motion: { total: 25 },
      transaction: { total: 250 },
    },
    {
      timestamp: 1578885266,
      motion: { total: 23 },
      transaction: { total: 230 },
    },
    {
      timestamp: 1578894266,
      motion: { total: 24 },
      transaction: { total: 240 },
    },
    {
      timestamp: 1578903266,
      motion: { total: 22 },
      transaction: { total: 220 },
    },
  ],
];
const Y_AXIS_LABELS = {
  motion: [ 0, 10, 20, 30, 40, 50, 60, 70, 80 ],
  transaction: [ 0, 100, 200, 300, 400, 500, 600, 700, 800 ],
};
const LABEL = [ 'AAA', 'BBB', 'CCC', 'DDD' ];
const TIME_TO_LABEL = timestamp => {
  if (_.isNaN(timestamp) || !_.isNumber(timestamp)) {
    return 'NaN';
  }
  // return LABEL[index];
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};
const CHART_HEIGHT = 350;
const CHART_WIDTH = 700;
const TIMES = [
  1578858266,
  1578867266,
  1578876266,
  1578885266,
  1578894266,
  1578903266,
];

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
          {
            true &&
              <Box w={CHART_WIDTH}>
                <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={0}>
                  Single Graph
                </Heading>
                <Graph
                  css={{}}
                  data={GRAPH_DATA}
                  direction='horizontal'
                  height={CHART_HEIGHT}
                  horizontalLabels={TIME_TO_LABEL}
                  horizontalProp='timestamp'
                  isMultiGraph={false}
                  type={select('Graph Type', options.type, defaultOptions.type)}
                  verticalLabels={Y_AXIS_LABELS[eventType]}
                  verticalProp={`${eventType}.total`}
                  width={CHART_WIDTH}
                />
              </Box>
          }
          {
            true &&
              <Box w={CHART_WIDTH}>
                <Heading as='h2' size='lg' fontWeight='normal' color='neutral.200' mb={0}>
                  Stacked Graph
                </Heading>
                <Graph
                  css={{}}
                  data={MULTI_GRAPH_DATA}
                  direction='horizontal'
                  height={CHART_HEIGHT}
                  horizontalLabels={TIME_TO_LABEL}
                  horizontalProp='timestamp'
                  isMultiGraph={true}
                  type={select('Graph Type', options.type, defaultOptions.type)}
                  verticalLabels={Y_AXIS_LABELS[eventType]}
                  verticalProp={`${eventType}.total`}
                  width={CHART_WIDTH}
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
