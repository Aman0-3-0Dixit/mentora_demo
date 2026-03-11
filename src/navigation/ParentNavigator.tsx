import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ParentDashboard from '../screens/parent/ParentDashboard';
import CreateStudent from '../screens/parent/CreateStudent';
import LessonsList from '../screens/shared/LessonsList';
import LessonDetail from '../screens/shared/LessonDetail';
import SessionDetail from '../screens/shared/SessionDetail';

const Stack = createStackNavigator();

export default function ParentNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ParentDashboard" component={ParentDashboard} />
      <Stack.Screen name="CreateStudent" component={CreateStudent} />
      <Stack.Screen name="LessonsList" component={LessonsList} />
      <Stack.Screen name="LessonDetail" component={LessonDetail} />
      <Stack.Screen name="SessionDetail" component={SessionDetail} />
    </Stack.Navigator>
  );
}