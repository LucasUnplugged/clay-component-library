import React from 'react';
import _ from 'lodash';
import { ThemeProvider, theme } from '@chakra-ui/core';
import clayTheme from '../src/shared/themes/clayTheme';

const combinedTheme = _.merge(
  {},
  theme,
  clayTheme,
);

const themeDecorator = storyFn => (
  <ThemeProvider theme={combinedTheme}>{storyFn()}</ThemeProvider>
);

export default themeDecorator
