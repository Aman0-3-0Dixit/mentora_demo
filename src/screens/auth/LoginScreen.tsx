import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    if (!success) {
      Alert.alert('Login Failed', 'Invalid email or password.\n\nTry:\nparent@test.com\nstudent@test.com\nmentor@test.com\n\nPassword: 123456');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.inner}>
        <Text style={styles.logo}>mentora</Text>
        <Text style={styles.tagline}>Learning, connected.</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Email or Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  inner: { flex: 1, justifyContent: 'center', padding: 24 },
  logo: { fontSize: 42, fontWeight: '800', color: '#6366f1', textAlign: 'center', letterSpacing: -1 },
  tagline: { fontSize: 14, color: '#94a3b8', textAlign: 'center', marginBottom: 40, marginTop: 4 },
  card: { backgroundColor: '#1e293b', borderRadius: 20, padding: 24 },
  label: { color: '#cbd5e1', fontSize: 13, fontWeight: '600', marginBottom: 6, marginTop: 14 },
  input: {
    backgroundColor: '#0f172a', borderRadius: 10, padding: 14,
    color: '#f1f5f9', fontSize: 15, borderWidth: 1, borderColor: '#334155'
  },
  forgot: { color: '#6366f1', fontSize: 13, textAlign: 'right', marginTop: 10 },
  button: {
    backgroundColor: '#6366f1', borderRadius: 12, padding: 16,
    alignItems: 'center', marginTop: 24
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});