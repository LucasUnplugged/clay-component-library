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
const GROUPING_TYPES = {
  group: VictoryGroup,
  stack: VictoryStack,
};

const axisLabelGetter = tick => _.get(tick, 'label', tick);

const Graph = forwardRef((props, ref) => {
  const {
    axisLabels,
    css: propsCss,
    data,
    direction,
    height,
    horizontalLabels,
    horizontalProp,
    horizontalTicks,
    isMultiGraph,
    multiGraphType,
    type,
    verticalLabels,
    verticalProp,
    verticalTicks,
    width,
  } = props;
  console.warn('props', props);

  const theme = useTheme();
  const css = processThemeCSS({ css: mergeCSS(propsCss, _.get(theme, 'Graph.base')), props, theme });
  const Chart = CHART_TYPES[type];
  const Grouping = GROUPING_TYPES[multiGraphType];

  const xAxisProps = {
    ...direction === 'vertical' ? { dependentAxis: true } : {},
    tickFormat: horizontalLabels,
    tickValues: horizontalTicks,
  };
  const yAxisProps = {
    ...direction === 'horizontal' ? { dependentAxis: true } : {},
    tickFormat: verticalLabels,
    tickValues: verticalTicks,
  };

  return (
    <VictoryChart
      css={css}
      domainPadding={{ x: [40, 40], y: [0, 10] }}
      height={height}
      ref={ref}
      theme={VictoryTheme.material}
      width={width}
    >
      <VictoryAxis {...yAxisProps}/>
      <VictoryAxis {...xAxisProps}/>
      {
        isMultiGraph &&
          <Grouping>
            {
              _.map(data, (dataset, key) => (
                <Chart
                  data={dataset}
                  key={key}
                  x={horizontalProp}
                  y={verticalProp}
                />
              ))
            }
          </Grouping>
      }
      {
        !isMultiGraph &&
          <Chart
            data={data}
            x={horizontalProp}
            y={verticalProp}
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
  /** Chart height */
  height: PropTypes.number,
  /** Labels along the horizontal axis */
  horizontalLabels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  /** The (nested) data property to use along the horizontal axis */
  horizontalProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  /** Tick values along the horizontal axis */
  horizontalTicks: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  /** Whether the graph has multiple charts inside it */
  isMultiGraph: PropTypes.bool,
  /** Type of grouping for multi-chart graphs */
  multiGraphType: PropTypes.oneOf([ 'group', 'stack' ]),
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
  /** Labels along the vertical axis */
  verticalLabels: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  /** Tick values along the vertical axis */
  verticalTicks: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  /** The (nested) data property to use along the vertical axis */
  verticalProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]).isRequired,
  /** Chart width */
  width: PropTypes.number,
};
Meta.defaultProps = {
  css: null,
  data: null,
  direction: 'horizontal',
  height: undefined,
  horizontalLabels: axisLabelGetter,
  horizontalTicks: null,
  isMultiGraph: false,
  multiGraphType: 'stack',
  type: 'bar',
  verticalLabels: axisLabelGetter,
  verticalTicks: null,
  width: undefined,
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Graph.propTypes = Meta.propTypes;
Graph.defaultProps = Meta.defaultProps;
