import React from 'react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IconButton as InnerIconButton, useTheme } from '@chakra-ui/core';
import { processThemeCSS } from '../../shared/utils/themeUtil';

const _blurOnMouseUp = () => document.addEventListener('mouseup', () => document.activeElement.blur(), { once: true });

const IconButton = forwardRef((props, ref) => {
  const { css: propsCss, variant } = props;
  const theme = useTheme();
  const { button = {} } = theme;
  const css = processThemeCSS({
    css: {
      ...propsCss,
      transition: 'all 0.25s, border 0s, line-height 0s',
      ...button.base,
      ...button[variant],
    },
    props,
    theme,
  });
  return (
    <InnerIconButton
      {...props}
      css={css}
      ref={ref}
      onMouseDown={_blurOnMouseUp}
    />
  );
});
export default IconButton;


// STORYBOOK META DATA ////////////////////////////////////////////////////////
/** A basic, customizable button. */
class Meta { render() { return } } export { Meta };
Meta.propTypes = {
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Name of an icon to show on the left side of the content */
  icon: PropTypes.string,
  /** Whether the button is in a loading (inactive) state */
  isLoading: PropTypes.bool,
  /** The text to show while loading, if any */
  loadingText: PropTypes.string,
  /** Triggered by pressing the button */
  onClick: PropTypes.func.isRequired,
  /** The variant to use */
  variant: PropTypes.oneOf([ 'outline', 'ghost', 'link', 'solid' ]),
  /** Color scheme to use */
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
};
Meta.defaultProps = {
  disabled: false,
  icon: null,
  isLoading: false,
  loadingText: null,
  variant: 'solid',
  variantColor: 'primary',
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
IconButton.propTypes = Meta.propTypes;
IconButton.defaultProps = Meta.defaultProps;
