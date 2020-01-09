import { addParameters, addDecorator, configure } from '@storybook/react';
import themeDecorator from './themeDecorator';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';

// DECORATORS /////////////////////////////////////////////////////////////////
addDecorator(themeDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);

// PARAMETERS /////////////////////////////////////////////////////////////////
// Background colours
addParameters({
  backgrounds: [
    { name: 'Grey (Light)', value: '#d6d3d0', default: true },
    { name: 'Grey (Medium)', value: '#8a8681' },
    { name: 'Grey (Dark)', value: '#524f4c' },
    { name: 'Black', value: '#191715' },
    { name: 'White', value: '#fff' },
  ],
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#191715' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#d6d3d0' },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    showPanel: true,
    panelPosition: 'right',
  },
  // docs: ({ context }) => (
  //   <DocsPage context={context} descriptionSlot={({ parameters }) => parameters.notes} />
  // ),
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/lib/components', true, /\.story\.js$/), module);
