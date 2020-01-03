/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button as InnerButton, useTheme } from '@chakra-ui/core';
import { processThemeCSS } from '../../shared/utils/themeUtil';

const _blurOnMouseUp = () => document.addEventListener('mouseup', () => document.activeElement.blur(), { once: true });

const Button = forwardRef((props, ref) => {
  const { variant } = props;
  const theme = useTheme();
  const { button = {} } = theme;
  const css = processThemeCSS({
    css: {
      transition: 'all 0.25s, border 0s, line-height 0s',
      ...button.base,
      ...button[variant],
    },
    props,
    theme,
  });
  return (
    <InnerButton
      {...props}
      css={css}
      inputRef={ref}
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
  children: PropTypes.node.isRequired,
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
