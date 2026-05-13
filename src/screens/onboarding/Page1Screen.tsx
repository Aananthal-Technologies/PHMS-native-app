import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowRightIcon } from '../../assets/icons';
import { OnboardingStackParamList } from '../../navigation';
import { styles } from './Page1Screen.styles';

type Nav = NativeStackNavigationProp<OnboardingStackParamList, 'Page1'>;

export default function Page1Screen() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.nextButton} activeOpacity={0.75} onPress={() => navigation.navigate('Page2')}>
        <Text style={styles.nextText}>Next</Text>
        <ArrowRightIcon />
      </TouchableOpacity>

    </View>
  );
}
