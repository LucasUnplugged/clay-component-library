import React from 'react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Heading as InnerHeading, useTheme } from '@chakra-ui/core';
import { processThemeCSS } from '../../shared/utils/themeUtil';

const Heading = forwardRef((props, ref) => {
  const theme = useTheme();
  const { heading = {} } = theme;
  const css = processThemeCSS({
    css: {
      ...heading.base,
    },
    props,
    theme,
  });
  return (
    <InnerHeading
      {...props}
      css={css}
      inputRef={ref}
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
};
Meta.defaultProps = {
  children: null,
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Heading.propTypes = Meta.propTypes;
Heading.defaultProps = Meta.defaultProps;
