import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StudentDashboard from '../screens/student/StudentDashboard';
import LessonDetail from '../screens/shared/LessonDetail';
import SessionDetail from '../screens/shared/SessionDetail';

const Stack = createStackNavigator();

export default function StudentNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
      <Stack.Screen name="LessonDetail" component={LessonDetail} />
      <Stack.Screen name="SessionDetail" component={SessionDetail} />
    </Stack.Navigator>
  );
}