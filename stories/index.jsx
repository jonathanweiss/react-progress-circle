/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, number, color } from '@kadira/storybook-addon-knobs';

import ProgressCircle from '../lib/index';

const stories = storiesOf('Storybook Knobs', module);

const statusRange = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

stories
  .addDecorator(withKnobs)
  .add('empty', () => (
    <ProgressCircle />
  ))
  .add('with all props', () => (
    <ProgressCircle
      backgroundColor={color('Background Color', '#404040')}
      color={color('Color', '#339900')}
      label={text('Label template', '%s%')}
      labelColor={color('Label color', '#111111')}
      labelSize={text('Label size', '16px')}
      size={number('Size', 100)}
      status={number('Status', 0, statusRange)}
    />
  ));

/* eslint-enable import/no-extraneous-dependencies */
