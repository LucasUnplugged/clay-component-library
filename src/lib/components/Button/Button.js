import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button as InnerButton, useTheme } from '@chakra-ui/core';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const _blurOnMouseUp = () => document.addEventListener('mouseup', () => document.activeElement.blur(), { once: true });

const Button = forwardRef((props, ref) => {
  const { css: propsCss, variant } = props;
  const theme = useTheme();
  const css = processThemeCSS({
    css: mergeCSS(
      propsCss,
      { transition: 'all 0.25s, border 0s, line-height 0s' },
      _.get(theme, 'Button.base'),
      _.get(theme, `Button.${variant}`)
    ),
    props,
    theme,
  });
  return (
    <InnerButton
      {...props}
      css={css}
      ref={ref}
      onMouseDown={_blurOnMouseUp}
    />
  );
});
export default Button;


// STORYBOOK META DATA ////////////////////////////////////////////////////////
/** A basic, customizable button. */
class Meta { render() { return } } export { Meta };
Meta.propTypes = {
  /** The inner contents of the button */
  children: PropTypes.node,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Whether the button is in a loading (inactive) state */
  isLoading: PropTypes.bool,
  /** Name of an icon to show on the left side of the content */
  leftIcon: PropTypes.string,
  /** The text to show while loading, if any */
  loadingText: PropTypes.string,
  /** Triggered by pressing the button */
  onClick: PropTypes.func.isRequired,
  /** Name of an icon to show on the right side of the content */
  rightIcon: PropTypes.string,
  /** The variant to use */
  variant: PropTypes.oneOf([ 'outline', 'ghost', 'link', 'solid' ]),
  /** Color scheme to use */
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
};
Meta.defaultProps = {
  children: null,
  disabled: false,
  isLoading: false,
  leftIcon: null,
  loadingText: null,
  rightIcon: null,
  variant: 'solid',
  variantColor: 'primary',
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Button.propTypes = Meta.propTypes;
Button.defaultProps = Meta.defaultProps;
