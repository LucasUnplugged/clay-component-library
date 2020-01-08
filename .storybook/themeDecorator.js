import React from 'react';
import _ from 'lodash';
import {
  CSSReset,
  theme,
  ThemeProvider,
} from '@chakra-ui/core';
import clayTheme from '../src/shared/themes/clayTheme';
import { getIcons } from '../src/shared/utils/themeUtil';
import { select, withKnobs } from '@storybook/addon-knobs';
import { forceReRender } from '@storybook/react';
import { Global, css } from '@emotion/core'

const _setColorMode = colorMode => {
  const isDark = colorMode === 'dark';
  const isDarkStorage = localStorage.getItem('darkMode') === 'true';
  if (isDark !== isDarkStorage) {
    localStorage.setItem('darkMode', isDark);
    forceReRender();
  }
};

const themeDecorator = (storyFn, context) => {
  const storyWithKnobs = withKnobs(storyFn, context) // explicitly add withKnobs
  const isDark = localStorage.getItem('darkMode') === 'true';
  const colorMode = select('Theme', ['light', 'dark'], isDark ? 'dark' : 'light');
  _setColorMode(colorMode);
  const combinedTheme = _.merge(
    { colorMode },
    theme,
    { icons: null }, // Remove Chakra UI icons, as they throw errors
    clayTheme,
    {
      icons: getIcons({
        include: [
          'FiMail',
          'FiPhone',
          'MdMailOutline',
        ],
        size: 24,
        weight: 1,
      }),
    }
  );
  console.log('combinedTheme', combinedTheme);

  const background = isDark
    ? _.get(context, 'parameters.backgrounds[2].value', '#524f4c')
    : _.get(context, 'parameters.backgrounds[0].value', '#d6d3d0');

  return (
    <ThemeProvider theme={combinedTheme}>
      <Global
        styles={css({
          html: {
            background,
            height: '100%',
          },
        })}
      />
      <CSSReset />
      {storyWithKnobs}
    </ThemeProvider>
  );
};

export default themeDecorator
