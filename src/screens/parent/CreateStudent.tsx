import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Student } from '../../types';
import { useAuth } from '../../context/AuthContext';

export default function CreateStudent({ navigation }: any) {
  const { user, createStudent } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (!name || !email || !password || !dob) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setLoading(true);
    const newStudent: Student = {
      id: `s${Date.now()}`,
      name,
      email,
      password,
      dateOfBirth: dob,
      parentId: user?.userId || '',
      mentorId: '3', // Assign to default mentor
    };
    await createStudent(newStudent);
    setLoading(false);
    Alert.alert('Success', `${name} has been added!`, [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Create Student</Text>
        </View>

        <Input label="Full Name" placeholder="e.g. John Smith" value={name} onChangeText={setName} />
        <Input label="Email" placeholder="student@email.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" placeholder="Set a password" value={password} onChangeText={setPassword} secureTextEntry />
        <Input label="Date of Birth" placeholder="e.g. 2012-05-14" value={dob} onChangeText={setDob} />

        <View style={styles.btnWrapper}>
          <Button title="Create Student" onPress={handleCreate} loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  inner: { padding: 24 },
  header: { marginBottom: 28 },
  back: { color: '#6366f1', fontSize: 15, fontWeight: '600', marginBottom: 12 },
  title: { fontSize: 26, fontWeight: '800', color: '#f1f5f9' },
  btnWrapper: { marginTop: 8 },
});