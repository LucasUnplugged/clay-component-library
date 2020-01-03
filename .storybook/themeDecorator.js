import React from 'react';
import _ from 'lodash';
import {
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/core';
import clayTheme from '../src/shared/themes/clayTheme';
import { select, withKnobs } from '@storybook/addon-knobs';
import { forceReRender } from '@storybook/react';

const _setColorMode = colorMode => {
  const isDark = colorMode === 'dark';
  const isDarkStorage = localStorage.getItem('darkMode') === 'true';
  if (isDark !== isDarkStorage) {
    localStorage.setItem('darkMode', isDark);
  }
};

const combinedTheme = _.merge(
  {},
  theme,
  { icons: null }, // Remove Chakra UI icons, as they throw errors
  clayTheme,
);
console.log('combinedTheme', combinedTheme);

const themeDecorator = (storyFn, context) => {
  const storyWithKnobs = withKnobs(storyFn, context) // explicitly add withKnobs
  const isDark = localStorage.getItem('darkMode') === 'true';
  const colorMode = select('Theme', ['light', 'dark'], isDark ? 'dark' : 'light');
  _setColorMode(colorMode);
  return (
    <ThemeProvider theme={{ ...combinedTheme, colorMode }}>
      <CSSReset />
      {storyWithKnobs}
    </ThemeProvider>
  );
};

export default themeDecorator
