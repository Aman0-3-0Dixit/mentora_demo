import React from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../../components/Card';
import { Session } from '../../types';

export default function LessonDetail({ navigation, route }: any) {
  const { lesson } = route.params;

  const renderSession = ({ item, index }: { item: Session; index: number }) => (
    <Card onPress={() => navigation.navigate('SessionDetail', { session: item, lessonTitle: lesson.title })}>
      <View style={styles.sessionRow}>
        <View style={styles.numberBadge}>
          <Text style={styles.numberText}>{index + 1}</Text>
        </View>
        <View style={styles.sessionInfo}>
          <Text style={styles.topic}>{item.topic}</Text>
          <Text style={styles.date}>📅 {item.date}</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.subtitle}>{lesson.sessions.length} Sessions</Text>
      </View>

      <FlatList
        data={lesson.sessions}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={renderSession}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No sessions yet.</Text>
          </View>
        }
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
  sessionRow: { flexDirection: 'row', alignItems: 'center' },
  numberBadge: {
    width: 36, height: 36, borderRadius: 10,
    backgroundColor: '#6366f122', justifyContent: 'center', alignItems: 'center'
  },
  numberText: { color: '#6366f1', fontWeight: '800', fontSize: 15 },
  sessionInfo: { flex: 1, marginLeft: 14 },
  topic: { color: '#f1f5f9', fontWeight: '700', fontSize: 16 },
  date: { color: '#64748b', fontSize: 13, marginTop: 3 },
  arrow: { color: '#6366f1', fontSize: 18 },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyText: { color: '#64748b', fontSize: 15 },
});