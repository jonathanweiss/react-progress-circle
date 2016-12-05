import React from 'react';
import renderer from 'react-test-renderer';

import ReactProgressCircle from '../lib/index';

test('Status changes the text', () => {
  const component = renderer.create(<ReactProgressCircle />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
