import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

export default function Input({ label, ...props }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#64748b"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 },
  label: { color: '#cbd5e1', fontSize: 13, fontWeight: '600', marginBottom: 6 },
  input: {
    backgroundColor: '#0f172a', borderRadius: 10, padding: 14,
    color: '#f1f5f9', fontSize: 15, borderWidth: 1, borderColor: '#334155'
  },
});