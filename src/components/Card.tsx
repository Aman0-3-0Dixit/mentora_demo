import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  children: ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export default function Card({ children, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b', borderRadius: 16, padding: 16,
    marginBottom: 12, borderWidth: 1, borderColor: '#334155'
  },
});