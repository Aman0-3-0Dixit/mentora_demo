import React from 'react';
import {
  View, Text, FlatList, StyleSheet,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';
import Card from '../../components/Card';

export default function ParentDashboard({ navigation }: any) {
  const { user, logout, students } = useAuth();
  const myStudents = students.filter(s => s.parentId === user?.userId);

  const renderStudent = ({ item }: { item: Student }) => (
    <Card onPress={() => navigation.navigate('LessonsList', { studentName: item.name })}>
      <View style={styles.studentRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name[0]}</Text>
        </View>
        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{item.name}</Text>
          <Text style={styles.studentDob}>Born: {item.dateOfBirth}</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.name?.split(' ')[0]} 👋</Text>
          <Text style={styles.role}>Parent Dashboard</Text>
        </View>
        <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Students ({myStudents.length})</Text>
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => navigation.navigate('CreateStudent')}
          >
            <Text style={styles.addBtnText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={myStudents}
          keyExtractor={item => item.id}
          renderItem={renderStudent}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No students yet.</Text>
              <Text style={styles.emptySubText}>Tap "+ Add" to create one.</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, paddingBottom: 12 },
  greeting: { fontSize: 22, fontWeight: '800', color: '#f1f5f9' },
  role: { fontSize: 13, color: '#6366f1', fontWeight: '600', marginTop: 2 },
  logoutBtn: { backgroundColor: '#1e293b', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
  logoutText: { color: '#f87171', fontWeight: '600', fontSize: 13 },
  section: { flex: 1, padding: 24, paddingTop: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#f1f5f9' },
  addBtn: { backgroundColor: '#6366f1', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 },
  addBtnText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  studentRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#6366f1', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#fff', fontWeight: '800', fontSize: 18 },
  studentInfo: { flex: 1, marginLeft: 12 },
  studentName: { color: '#f1f5f9', fontWeight: '700', fontSize: 16 },
  studentDob: { color: '#94a3b8', fontSize: 13, marginTop: 2 },
  arrow: { color: '#6366f1', fontSize: 18, fontWeight: '700' },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyText: { color: '#f1f5f9', fontSize: 16, fontWeight: '600' },
  emptySubText: { color: '#64748b', fontSize: 13, marginTop: 4 },
});