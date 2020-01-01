/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import PropTypes from 'prop-types';
import { Button, useTheme } from '@chakra-ui/core';
import { processThemeCSS } from '../../shared/utils/themeUtil';

const _blurOnMouseUp = () => {
  document.addEventListener('mouseup', () => document.activeElement.blur(), { once: true });
}

const WrappedButton = props => {
  const { onClick, variant, variantColor } = props;
  const theme = useTheme();
  const { button = {} } = theme;
  const css = processThemeCSS({ css: button[variant], props, theme });
  return (
    <Button
      {...props}
      css={css}
      onMouseDown={_blurOnMouseUp}
    />
  );
};

WrappedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([ 'outline', 'ghost', 'unstyled', 'link', 'solid' ]),
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary', 'neutral' ]),
};

WrappedButton.defaultProps = {
  variant: 'solid',
  variantColor: 'primary',
};

export default WrappedButton;
