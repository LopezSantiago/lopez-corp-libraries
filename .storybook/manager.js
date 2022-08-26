import { addons } from '@storybook/addons';
import dbTheme from './db-theme';

addons.setConfig({
  theme: dbTheme,
  sortStoriesByKind: true
});
