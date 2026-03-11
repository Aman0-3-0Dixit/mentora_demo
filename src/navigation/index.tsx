import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/auth/LoginScreen';
import ParentNavigator from './ParentNavigator';
import StudentNavigator from './StudentNavigator';
import MentorNavigator from './MentorNavigator';

const Stack = createStackNavigator();

export default function RootNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : user.role === 'parent' ? (
          <Stack.Screen name="ParentApp" component={ParentNavigator} />
        ) : user.role === 'student' ? (
          <Stack.Screen name="StudentApp" component={StudentNavigator} />
        ) : (
          <Stack.Screen name="MentorApp" component={MentorNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}