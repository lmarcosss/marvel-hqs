import React from 'react';
import { EmptyList } from '@components';
import TestRenderer from 'react-test-renderer';

it('Send prop to EmptyList component', () => {
  const emptyText = 'empty list';
  function CallMyComponent() {
    return <EmptyList emptyText={emptyText} />;
  }

  const testRenderer = TestRenderer.create(<CallMyComponent />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(EmptyList).props.emptyText).toBe(emptyText);
});
