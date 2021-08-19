import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { searchImage, closeImage } from '@images';
import styles from './styles';

interface IProps {
  placeholder: string;
  inputRef: React.RefObject<TextInput>;
  value: string;
  onChangeValue: (value: string) => void;
}

export function SearchInput({
  placeholder,
  inputRef,
  value,
  onChangeValue,
}: IProps) {
  function onFocusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function onCleanInput() {
    onChangeValue('');
  }

  const valueIsEmpty = value.length === 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFocusInput} style={styles.containerImage}>
        <Image style={styles.image} source={searchImage} />
      </TouchableOpacity>
      <TextInput
        value={value}
        onChangeText={onChangeValue}
        ref={inputRef}
        placeholderTextColor="#000"
        style={styles.input}
        placeholder={placeholder}
      />
      {!valueIsEmpty && (
        <TouchableOpacity
          onPress={onCleanInput}
          style={styles.containerCloseImage}
        >
          <Image style={styles.closeImage} source={closeImage} />
        </TouchableOpacity>
      )}
    </View>
  );
}
