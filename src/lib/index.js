import * as components from './components';
import * as themes from './shared/themes';
import * as themeUtil from './shared/utils/themeUtil';
import _ from 'lodash';

_.each({
  ...components,
  ...themes,
  ...themeUtil,
}, (value, key) => {
  exports[key] = value;
});
