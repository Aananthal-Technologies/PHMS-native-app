import React from 'react';
import { ActivityIndicator } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Farsan_400Regular } from '@expo-google-fonts/farsan';
import { BaskervvilleSC_400Regular } from '@expo-google-fonts/baskervville-sc';
import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({ Farsan_400Regular, BaskervvilleSC_400Regular });

  if (!fontsLoaded) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
}
