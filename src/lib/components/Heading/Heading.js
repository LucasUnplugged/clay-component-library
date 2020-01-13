import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Heading as InnerHeading, useTheme } from '@chakra-ui/core';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const Heading = forwardRef((props, ref) => {
  const { css: propsCss } = props;
  const theme = useTheme();
  const css = processThemeCSS({
    css: mergeCSS(
      propsCss,
      _.get(theme, 'Heading.base')
    ),
    props,
    theme,
  });
  return (
    <InnerHeading
      {...props}
      css={css}
      ref={ref}
    />
  );
});
export default Heading;


// STORYBOOK META DATA ////////////////////////////////////////////////////////
/** A generic, multi-size heading. */
class Meta { render() { return } } export { Meta };
Meta.propTypes = {
  /** The heading text */
  children: PropTypes.node,
  /** Custom styling for this component */
  css: PropTypes.object,
};
Meta.defaultProps = {
  children: null,
  css: null,
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Heading.propTypes = Meta.propTypes;
Heading.defaultProps = Meta.defaultProps;
