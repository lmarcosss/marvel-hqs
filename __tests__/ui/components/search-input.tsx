import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TextInput } from 'react-native';
import { SearchInput } from '@components';

it('Send props to SearchInput component', () => {
  const placeholder = 'placeholder text';
  const inputRef = {} as React.RefObject<TextInput>;
  const value = '';

  function onChangeValue() {}

  function CallMyComponent() {
    return (
      <SearchInput
        placeholder={placeholder}
        value={value}
        onChangeValue={onChangeValue}
        inputRef={inputRef}
      />
    );
  }

  const testRenderer = TestRenderer.create(<CallMyComponent />);
  const testInstance = testRenderer.root;

  expect(testInstance.findByType(SearchInput).props.placeholder).toBe(
    placeholder,
  );
  expect(testInstance.findByType(SearchInput).props.value).toBe(value);
  expect(testInstance.findByType(SearchInput).props.onChangeValue).toBe(
    onChangeValue,
  );
  expect(testInstance.findByType(SearchInput).props.inputRef).toBe(inputRef);
});
