import Vue from 'vue';
import { configure } from '@storybook/vue';
import { themes } from '@storybook/theming';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fab);

Vue.component('fa', FontAwesomeIcon);
configure(require.context('../components', true, /\.stories\.js$/), module);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  }
}