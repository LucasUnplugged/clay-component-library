import React from 'react';
import PropTypes from 'prop-types';
import { Button, useColorMode, useTheme } from "@chakra-ui/core";

const WrappedButton = props => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  console.warn('theme', theme);
  console.warn('colorMode', colorMode);
  return (
    <Button {...props} variantColor='blue'/>
  );
};

WrappedButton.propTypes = {
  children: PropTypes.node.isRequired,
};

WrappedButton.defaultProps = {};

export default WrappedButton;
