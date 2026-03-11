import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/Card';
import { LESSONS } from '../../data/mockData';

const SUBJECT_ICONS: Record<string, string> = {
  math: '📐',
  physics: '⚛️',
  english: '📖',
};

const SUBJECT_COLORS: Record<string, string> = {
  math: '#6366f1',
  physics: '#06b6d4',
  english: '#10b981',
};

export default function StudentDashboard({ navigation }: any) {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, {user?.name?.split(' ')[0]}</Text>
            <Text style={styles.role}>Student Dashboard</Text>
          </View>
          <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>{LESSONS.length}</Text>
            <Text style={styles.statLabel}>Subjects</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>
              {LESSONS.reduce((acc, l) => acc + l.sessions.length, 0)}
            </Text>
            <Text style={styles.statLabel}>Sessions</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>✓</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>My Subjects</Text>

        {LESSONS.map(lesson => (
          <Card
            key={lesson.id}
            onPress={() => navigation.navigate('LessonDetail', { lesson })}
          >
            <View style={styles.lessonRow}>
              <View style={[styles.iconBox, { backgroundColor: SUBJECT_COLORS[lesson.subject] + '22' }]}>
                <Text style={styles.icon}>{SUBJECT_ICONS[lesson.subject]}</Text>
              </View>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.sessionCount}>{lesson.sessions.length} sessions available</Text>
              </View>
              <Text style={[styles.arrow, { color: SUBJECT_COLORS[lesson.subject] }]}>→</Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  inner: { padding: 24 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  greeting: { fontSize: 22, fontWeight: '800', color: '#f1f5f9' },
  role: { fontSize: 13, color: '#06b6d4', fontWeight: '600', marginTop: 2 },
  logoutBtn: { backgroundColor: '#1e293b', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
  logoutText: { color: '#f87171', fontWeight: '600', fontSize: 13 },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 28 },
  statBox: {
    flex: 1, backgroundColor: '#1e293b', borderRadius: 14,
    padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#334155'
  },
  statNum: { fontSize: 24, fontWeight: '800', color: '#6366f1' },
  statLabel: { fontSize: 12, color: '#64748b', marginTop: 4, fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#f1f5f9', marginBottom: 14 },
  lessonRow: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 48, height: 48, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  icon: { fontSize: 22 },
  lessonInfo: { flex: 1, marginLeft: 14 },
  lessonTitle: { color: '#f1f5f9', fontWeight: '700', fontSize: 17 },
  sessionCount: { color: '#64748b', fontSize: 13, marginTop: 3 },
  arrow: { fontSize: 18, fontWeight: '700' },
});