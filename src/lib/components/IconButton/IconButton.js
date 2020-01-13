import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { IconButton as InnerIconButton, useTheme } from '@chakra-ui/core';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const _blurOnMouseUp = () => document.addEventListener('mouseup', () => document.activeElement.blur(), { once: true });

const IconButton = forwardRef((props, ref) => {
  const { css: propsCss, variant } = props;
  const theme = useTheme();
  const css = processThemeCSS({
    css: mergeCSS(
      propsCss,
      { transition: 'all 0.25s, border 0s, line-height 0s' },
      _.get(theme, 'Button.base'),
      _.get(theme, `Button.${variant}`),
      _.get(theme, 'IconButton.base'),
      _.get(theme, `IconButton.${variant}`)
    ),
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
  /** Custom styling for this component */
  css: PropTypes.object,
  /** Name of an icon to show on the left side of the content */
  icon: PropTypes.string,
  /** Whether the button is disabled */
  isDisabled: PropTypes.bool,
  /** Whether the button is in a loading (inactive) state */
  isLoading: PropTypes.bool,
  /** The text to show while loading, if any */
  loadingText: PropTypes.string,
  /** Triggered by pressing the button */
  onClick: PropTypes.func,
  /** The variant to use */
  variant: PropTypes.oneOf([ 'outline', 'ghost', 'link', 'solid' ]),
  /** Color scheme to use */
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
};
Meta.defaultProps = {
  css: null,
  icon: null,
  isDisabled: false,
  isLoading: false,
  loadingText: null,
  onClick: () => {},
  variant: 'solid',
  variantColor: 'primary',
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
IconButton.propTypes = Meta.propTypes;
IconButton.defaultProps = Meta.defaultProps;
