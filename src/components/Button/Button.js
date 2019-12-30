/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, useTheme } from '@chakra-ui/core';

let _refocusTimer;

const _refocusOnButton = ({ key, button, count = 0 }) => {
  const actionKeys = [ 13, 32 ];
  if (actionKeys.includes(key)) {
    setTimeout(() => {
      if (button && button.focus) {
        if (document.activeElement === button && count < 200) {
          clearTimeout(_refocusTimer);
          _refocusTimer = setTimeout(() => {
            _refocusOnButton({ key, button, count: count + 1 });
          }, 25);
        } else {
          button.focus();
        }
      }
    });
  }
};

const WrappedButton = props => {
  const { onClick, variantColor } = props;
  const theme = useTheme();
  const {
    button,
    button: { css },
    colors,
  } = theme;
  const color = colors[variantColor];
  const textColor = colors.text[variantColor];
  return (
    <Button
      {...props}
      css={css}
      onClick={input => (document.activeElement.blur(), onClick(input))}
      onKeyDown={event => _refocusOnButton({ key: event.keyCode, button: document.activeElement })}
      borderColor={`${variantColor}.200`}
      color={`text.${variantColor}.500`}
      _active={{
        background: color[500],
        borderColor: color[400],
        color: textColor[500],
      }}
      _focus={{
        background: color[800],
        borderColor: color[500],
        boxShadow: 'none',
        color: textColor[800],
      }}
      _hover={{
        background: color[700],
        borderColor: color[400],
        // color: textColor[800],
        cursor: 'pointer',
      }}
    />
  );
};

WrappedButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variantColor: PropTypes.oneOf([ 'primary', 'secondary', 'tertiary' ]),
};

WrappedButton.defaultProps = {
  variantColor: 'primary',
};

export default WrappedButton;
