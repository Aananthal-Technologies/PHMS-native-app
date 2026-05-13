import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from '../../assets/icons';
import { OnboardingStackParamList } from '../../navigation';
import { images } from '../../styles/global';
import { styles } from './Page2Screen.styles';

type Nav = NativeStackNavigationProp<OnboardingStackParamList, 'Page2'>;

export default function Page2Screen() {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>

      {/* ── Back button: left 35, top 65 ── */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeftIcon />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* ── Title: centered, width 367 ── */}
      <Text style={styles.title}>
        So what's the squad looking like — dog, cat, bird?
      </Text>

      {/* ── Dropdown: width 283 ── */}
      <TouchableOpacity style={styles.dropdown} activeOpacity={0.8}>
        <Text style={styles.dropdownPlaceholder}>Select species</Text>
        <ChevronDownIcon size={20} />
      </TouchableOpacity>

      {/* ── Next button: right of dropdown ── */}
      <TouchableOpacity style={styles.nextButton} activeOpacity={0.75}>
        <Text style={styles.nextText}>Next</Text>
        <ArrowRightIcon />
      </TouchableOpacity>

      {/* ── Images: width 378, height 364, opacity 0.3 ── */}
      <View style={styles.imagesGroup} pointerEvents="none">
        <Image source={images.page2Image1} style={styles.image1} resizeMode="contain" />
        <Image source={images.page2Image2} style={styles.image2} resizeMode="contain" />
      </View>

    </View>
  );
}
