import React from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LESSONS } from '../../data/mockData';
import Card from '../../components/Card';

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

export default function LessonsList({ navigation, route }: any) {
  const studentName = route?.params?.studentName || 'Student';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lessons</Text>
        <Text style={styles.subtitle}>{studentName}</Text>
      </View>

      <FlatList
        data={LESSONS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card onPress={() => navigation.navigate('LessonDetail', { lesson: item })}>
            <View style={styles.lessonRow}>
              <View style={[styles.iconBox, { backgroundColor: SUBJECT_COLORS[item.subject] + '22' }]}>
                <Text style={styles.icon}>{SUBJECT_ICONS[item.subject]}</Text>
              </View>
              <View style={styles.lessonInfo}>
                <Text style={styles.lessonTitle}>{item.title}</Text>
                <Text style={styles.sessionCount}>{item.sessions.length} sessions</Text>
              </View>
              <View style={[styles.badge, { backgroundColor: SUBJECT_COLORS[item.subject] + '33' }]}>
                <Text style={[styles.badgeText, { color: SUBJECT_COLORS[item.subject] }]}>
                  View
                </Text>
              </View>
            </View>
          </Card>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  header: { padding: 24, paddingBottom: 12 },
  back: { color: '#6366f1', fontSize: 15, fontWeight: '600', marginBottom: 12 },
  title: { fontSize: 28, fontWeight: '800', color: '#f1f5f9' },
  subtitle: { fontSize: 14, color: '#94a3b8', marginTop: 4 },
  list: { padding: 24, paddingTop: 8 },
  lessonRow: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 48, height: 48, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  icon: { fontSize: 22 },
  lessonInfo: { flex: 1, marginLeft: 14 },
  lessonTitle: { color: '#f1f5f9', fontWeight: '700', fontSize: 17 },
  sessionCount: { color: '#64748b', fontSize: 13, marginTop: 3 },
  badge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  badgeText: { fontWeight: '700', fontSize: 13 },
});