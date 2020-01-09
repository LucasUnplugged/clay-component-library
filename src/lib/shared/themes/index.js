import React from 'react';
import _ from 'lodash';
import {
  CSSReset,
  theme as chakraTheme,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/core';
import { getIcons } from '../utils/themeUtil';
import clayTheme from './clayTheme';

export const toggleDarkMode = enable => {
  const isDark = !_.isNil(enable) ? !!enable : localStorage.getItem('darkMode') === 'true';
  localStorage.setItem('darkMode', isDark);
};

export const ThemeProvider = ({ children, excludeIcons, includeIcons, theme }) => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  const colorMode = isDark ? 'dark' : 'light';
  const icons = _.get(theme, 'icons') ? {} : {
    icons: getIcons({
      exclude: excludeIcons,
      include: includeIcons,
      size: 24,
      weight: 1,
    }),
  };
  const combinedTheme = _.merge(
    { colorMode },
    chakraTheme,
    { icons: null }, // Remove Chakra UI icons, as they throw errors
    clayTheme,
    icons,
    theme,
  );
  return (
    <ChakraThemeProvider theme={combinedTheme}>
      <CSSReset />
      {children}
    </ChakraThemeProvider>
  );
};
