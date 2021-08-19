import React from 'react';
import { Loader } from '@components';
import TestRenderer from 'react-test-renderer';

it('Send props to Loader component', () => {
  const color = '#000';
  const size = 'large';

  function CallMyComponent() {
    return <Loader color={color} size={size} />;
  }

  const testRenderer = TestRenderer.create(<CallMyComponent />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(Loader).props.color).toBe(color);
  expect(testInstance.findByType(Loader).props.size).toBe(size);
});
