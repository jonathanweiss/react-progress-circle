import { configure } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies

function loadStories() {
  require('../stories'); // eslint-disable-line global-require
}

configure(loadStories, module);
