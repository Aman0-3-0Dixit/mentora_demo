import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MentorDashboard from '../screens/mentor/MentorDashboard';
import LessonsList from '../screens/shared/LessonsList';
import LessonDetail from '../screens/shared/LessonDetail';
import SessionDetail from '../screens/shared/SessionDetail';

const Stack = createStackNavigator();

export default function MentorNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MentorDashboard" component={MentorDashboard} />
      <Stack.Screen name="LessonsList" component={LessonsList} />
      <Stack.Screen name="LessonDetail" component={LessonDetail} />
      <Stack.Screen name="SessionDetail" component={SessionDetail} />
    </Stack.Navigator>
  );
}