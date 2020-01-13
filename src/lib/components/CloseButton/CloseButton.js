import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { CloseButton as InnerCloseButton, useTheme } from '@chakra-ui/core';
import { mergeCSS, processThemeCSS } from '../../shared/utils/themeUtil';

const _blurOnMouseUp = () => document.addEventListener('mouseup', () => document.activeElement.blur(), { once: true });

const CloseButton = forwardRef((props, ref) => {
  const { css: propsCss } = props;
  const theme = useTheme();
  const css = processThemeCSS({
    css: mergeCSS(
      propsCss,
      { transition: 'all 0.25s, border 0s, line-height 0s' },
      _.get(theme, 'Button.base'),
      _.get(theme, `Button.ghost`),
      _.get(theme, 'CloseButton.base'),
      _.get(theme, `CloseButton.ghost`)
    ),
    props,
    theme,
  });
  console.warn('css', css);
  return (
    <InnerCloseButton
      {...props}
      css={css}
      ref={ref}
      onMouseDown={_blurOnMouseUp}
    />
  );
});
export default CloseButton;


// STORYBOOK META DATA ////////////////////////////////////////////////////////
/** A basic, customizable button. */
class Meta { render() { return } } export { Meta };
Meta.propTypes = {
  /** Custom styling for this component */
  css: PropTypes.object,
  /** Whether the button is disabled */
  isDisabled: PropTypes.bool,
  /** Whether the button is in a loading (inactive) state */
  isLoading: PropTypes.bool,
  /** The text to show while loading, if any */
  loadingText: PropTypes.string,
  /** Triggered by pressing the button */
  onClick: PropTypes.func,
  /** Size of the button */
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  /** The variant to use */
  variant: PropTypes.oneOf([ 'outline', 'ghost', 'link', 'solid' ]),
  /** Color scheme to use */
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
};
Meta.defaultProps = {
  css: null,
  isDisabled: false,
  isLoading: false,
  loadingText: null,
  onClick: () => {},
  size: 'md',
  variant: 'ghost',
  variantColor: 'neutral',
};

// COMPONENT PROPS ////////////////////////////////////////////////////////////
CloseButton.propTypes = Meta.propTypes;
CloseButton.defaultProps = Meta.defaultProps;
