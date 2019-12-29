import { addParameters, addDecorator, configure } from '@storybook/react';
import themeDecorator from './themeDecorator';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from "@storybook/addon-knobs";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

// DECORATORS /////////////////////////////////////////////////////////////////
addDecorator(themeDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);

// PARAMETERS /////////////////////////////////////////////////////////////////
// Background colours
addParameters({
  backgrounds: [
    { name: 'Grey (Light)', value: '#d6d3d0', default: true },
    { name: 'Grey (Medium)', value: '#999590' },
    { name: 'Grey (Dark)', value: '#66635f' },
    { name: 'Black', value: '#191715' },
    { name: 'White', value: '#fff' },
  ],
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
configure(require.context('../src/components', true, /\.story\.js$/), module);
