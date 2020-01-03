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
  /** Triggered by pressing the button */
  onClick: PropTypes.func.isRequired,
  /** The variant to use */
  variant: PropTypes.oneOf([ 'outline', 'ghost', 'link', 'solid' ]),
  /** Color scheme to use */
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
};
Meta.defaultProps = {
  variant: 'solid',
  variantColor: 'primary',
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
Button.propTypes = Meta.propTypes;
Button.defaultProps = Meta.defaultProps;
