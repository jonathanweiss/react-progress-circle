import React from 'react';
import ProgressCircle from '../lib/index';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('ProgressCircle', module)
  .add('empty', () => (
    <ProgressCircle />
  ))
  .add('with status', () => (
    <ProgressCircle status="45" />
  ));
