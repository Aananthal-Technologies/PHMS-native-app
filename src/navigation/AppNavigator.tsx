import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1Screen from '../screens/onboarding/Page1Screen';
import Page2Screen from '../screens/onboarding/Page2Screen';

export type OnboardingStackParamList = {
  Page1: undefined;
  Page2: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Page1" component={Page1Screen} />
      <Stack.Screen name="Page2" component={Page2Screen} />
    </Stack.Navigator>
  );
}
