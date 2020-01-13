import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useTheme } from '@chakra-ui/core';
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryBoxPlot,
  VictoryCandlestick,
  VictoryChart,
  VictoryErrorBar,
  VictoryGroup,
  VictoryLine,
  VictoryPie,
  VictoryPolarAxis,
  VictoryScatter,
  VictoryStack,
  VictoryTheme,
  VictoryVoronoi,
} from 'victory';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const CHART_TYPES = {
  area: VictoryArea,
  bar: VictoryBar,
  boxPlot: VictoryBoxPlot,
  candlestick: VictoryCandlestick,
  errorBar: VictoryErrorBar,
  line: VictoryLine,
  pie: VictoryPie,
  polarAxis: VictoryPolarAxis,
  scatter: VictoryScatter,
  voronoi: VictoryVoronoi,
};

const axisLabelGetter = tick => _.get(tick, 'label', tick);
// VictoryAxis
// VictoryGroup
// VictoryStack

const Graph = forwardRef((props, ref) => {
  const {
    axisLabels,
    css: propsCss,
    data,
    direction,
    horizontalLabels,
    isMultiGraph,
    type,
    verticalLabels,
    xProp,
    yProp,
  } = props;
  console.warn('props', props);

  const theme = useTheme();
  const css = processThemeCSS({ css: mergeCSS(propsCss, _.get(theme, 'Graph.base')), props, theme });
  const Chart = CHART_TYPES[type];

  const xAxisProps = {
    ...direction === 'vertical' ? { dependentAxis: true } : {},
    tickFormat: horizontalLabels,
  };
  const yAxisProps = {
    ...direction === 'horizontal' ? { dependentAxis: true } : {},
    tickFormat: verticalLabels,
  };
  console.warn('xAxisProps', xAxisProps);
  console.warn('yAxisProps', yAxisProps);

  return (
    <VictoryChart
      css={css}
      domainPadding={40}
      ref={ref}
      theme={VictoryTheme.material}
    >
      <VictoryAxis {...yAxisProps}/>
      <VictoryAxis {...xAxisProps}/>
      {
        isMultiGraph && _.each(data, (dataset, key) => {
          <Chart
            data={dataset}
            key={key}
            x={xProp}
            y={yProp}
          />
        })
      }
      {
        !isMultiGraph &&
          <Chart
            data={data}
            x={xProp}
            y={yProp}
          />
      }
    </VictoryChart>
  );
});
export default Graph;


// STORYBOOK META DATA ////////////////////////////////////////////////////////
/** A generic, multi-size heading. */
class Meta { render() { return } } export { Meta };
Meta.propTypes = {
  /** Custom styling for this component */
  css: PropTypes.object,
  /** The graph's dataset */
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  /** Defines which axis the data runs across */
  direction: PropTypes.oneOf([ 'horizontal', 'vertical' ]),
  /** Whether the graph has multiple charts inside it */
  isMultiGraph: PropTypes.bool,
  /** The type of graph */
  type: PropTypes.oneOf([
    'area',
    'bar',
    'boxPlot',
    'candlestick',
    'errorBar',
    'line',
    'pie',
    'polarAxis',
    'scatter',
    'voronoi',
  ]),
  /** Labels for the horizontal axis */
  horizontalLabels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  /** Labels for the vertical axis */
  verticalLabels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  xProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  yProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
};
Meta.defaultProps = {
  css: null,
  data: null,
  direction: 'horizontal',
  isMultiGraph: false,
  type: 'bar',
  horizontalLabels: axisLabelGetter,
  verticalLabels: axisLabelGetter,
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Graph.propTypes = Meta.propTypes;
Graph.defaultProps = Meta.defaultProps;
