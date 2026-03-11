import React, { useState } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';
import Card from '../../components/Card';

export default function MentorDashboard({ navigation }: any) {
const { user, logout, students } = useAuth();
const myStudents = students.filter(s => s.mentorId === user?.userId);

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
        <View style={styles.viewBtn}>
          <Text style={styles.viewBtnText}>View Lessons</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {user?.name?.split(' ')[0]}</Text>
          <Text style={styles.role}>Mentor Dashboard</Text>
        </View>
        <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>{myStudents.length}</Text>
          <Text style={styles.statLabel}>Students</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>3</Text>
          <Text style={styles.statLabel}>Subjects</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNum}>8</Text>
          <Text style={styles.statLabel}>Sessions</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Students</Text>
        <FlatList
          data={myStudents}
          keyExtractor={item => item.id}
          renderItem={renderStudent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No students assigned yet.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, paddingBottom: 16 },
  greeting: { fontSize: 22, fontWeight: '800', color: '#f1f5f9' },
  role: { fontSize: 13, color: '#10b981', fontWeight: '600', marginTop: 2 },
  logoutBtn: { backgroundColor: '#1e293b', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
  logoutText: { color: '#f87171', fontWeight: '600', fontSize: 13 },
  statsRow: { flexDirection: 'row', gap: 12, marginHorizontal: 24, marginBottom: 24 },
  statBox: {
    flex: 1, backgroundColor: '#1e293b', borderRadius: 14,
    padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#334155'
  },
  statNum: { fontSize: 24, fontWeight: '800', color: '#10b981' },
  statLabel: { fontSize: 12, color: '#64748b', marginTop: 4, fontWeight: '600' },
  section: { flex: 1, paddingHorizontal: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#f1f5f9', marginBottom: 14 },
  studentRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#10b98133', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#10b981', fontWeight: '800', fontSize: 18 },
  studentInfo: { flex: 1, marginLeft: 12 },
  studentName: { color: '#f1f5f9', fontWeight: '700', fontSize: 16 },
  studentDob: { color: '#94a3b8', fontSize: 13, marginTop: 2 },
  viewBtn: { backgroundColor: '#10b98122', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  viewBtnText: { color: '#10b981', fontWeight: '700', fontSize: 12 },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyText: { color: '#64748b', fontSize: 15 },
});