import React from 'react';
import PropTypes from 'prop-types';
import { Button, useTheme } from "@chakra-ui/core";

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
  const color = theme.colors[variantColor];
  const textColor = theme.colors.text[variantColor];
  return (
    <Button
      {...props}
      onClick={input => (document.activeElement.blur(), onClick(input))}
      onKeyDown={event => _refocusOnButton({ key: event.keyCode, button: document.activeElement })}
      borderWidth='0 0 2px'
      borderColor={color[100]}
      color={textColor[500]}
      _active={{
        background: color[500],
        color: textColor[500],
      }}
      _focus={{
        background: color[900],
        borderColor: color[700],
        boxShadow: 'none',
        color: textColor[900],
      }}
      _hover={{
        background: color[800],
        borderColor: color[600],
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
