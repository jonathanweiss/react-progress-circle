const path = require('path');

module.exports = {
  root: true,
  extends: 'ak-base',
  env: {
    browser: true,
    mocha: true,
  },
  rules: {
      'max-len': [2, 180, 2, {
        ignoreUrls: true,
        ignoreComments: false
      }],
      'arrow-body-style': [0]
  },
};
