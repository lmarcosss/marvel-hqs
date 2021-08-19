import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IProps {
  emptyText: string;
}

export function EmptyList({ emptyText }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{emptyText}</Text>
    </View>
  );
}
