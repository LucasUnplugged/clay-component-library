import React from 'react';
import _ from 'lodash';
import {
  CSSReset,
  theme: chakraTheme,
  ThemeProvider: ChakraThemeProvider,
} from '@chakra-ui/core';
import { getClayTheme } from '../src/shared/themes/clayTheme';

export const toggleDarkMode = enable => {
  const isDark = !_.isNil(enable) ? !!enable : localStorage.getItem('darkMode') === 'true';
  localStorage.setItem('darkMode', isDark);
};

export const ThemeProvider = ({ children, theme }) => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  const colorMode = isDark ? 'dark' : 'light';
  const combinedTheme = _.merge(
    { colorMode },
    chakraTheme,
    { icons: null }, // Remove Chakra UI icons, as they throw errors
    getClayTheme(),
    theme,
  );
  return (
    <ChakraThemeProvider theme={combinedTheme}>
      <CSSReset />
      {children}
    </ChakraThemeProvider>
  );
};
