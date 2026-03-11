import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SessionDetail({ navigation, route }: any) {
  const { session, lessonTitle } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.topicBadge}>
          <Text style={styles.topicBadgeText}>{lessonTitle}</Text>
        </View>

        <Text style={styles.topic}>{session.topic}</Text>
        <Text style={styles.date}>📅 {session.date}</Text>

        <View style={styles.divider} />

        <Text style={styles.summaryLabel}>Session Summary</Text>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryText}>{session.summary}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a' },
  inner: { padding: 24 },
  back: { color: '#6366f1', fontSize: 15, fontWeight: '600', marginBottom: 24 },
  topicBadge: {
    alignSelf: 'flex-start', backgroundColor: '#6366f122',
    paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginBottom: 16
  },
  topicBadgeText: { color: '#6366f1', fontWeight: '700', fontSize: 13 },
  topic: { fontSize: 28, fontWeight: '800', color: '#f1f5f9', lineHeight: 34 },
  date: { color: '#94a3b8', fontSize: 14, marginTop: 10 },
  divider: { height: 1, backgroundColor: '#1e293b', marginVertical: 24 },
  summaryLabel: { color: '#64748b', fontSize: 13, fontWeight: '700', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 },
  summaryBox: {
    backgroundColor: '#1e293b', borderRadius: 16,
    padding: 20, borderWidth: 1, borderColor: '#334155'
  },
  summaryText: { color: '#cbd5e1', fontSize: 16, lineHeight: 26 },
});