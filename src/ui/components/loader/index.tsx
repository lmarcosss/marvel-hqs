import React from 'react';
import { ActivityIndicator } from 'react-native';

interface IProps {
  size?: 'small' | 'large';
  color?: string;
}

export function Loader({ size = 'small', color = '#F0131E' }: IProps) {
  return <ActivityIndicator size={size} color={color} />;
}
