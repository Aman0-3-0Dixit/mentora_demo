import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function Button({ title, onPress, loading, variant = 'primary' }: Props) {
  return (
    <TouchableOpacity
      style={[styles.btn, variant === 'secondary' && styles.secondary]}
      onPress={onPress}
      disabled={loading}
    >
      {loading
        ? <ActivityIndicator color="#fff" />
        : <Text style={styles.text}>{title}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#6366f1', borderRadius: 12, padding: 15, alignItems: 'center' },
  secondary: { backgroundColor: '#1e293b', borderWidth: 1, borderColor: '#334155' },
  text: { color: '#fff', fontWeight: '700', fontSize: 15 },
});