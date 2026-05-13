import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const scaleX = (px: number) => (px / 390) * width;
export const scaleY = (px: number) => (px / 844) * height;

export const fonts = {
  regular: 'Farsan_400Regular',
  title: 'BaskervvilleSC_400Regular',
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  iconStroke: '#1E1E1E',
  buttonBg: '#D9D9D9',
  buttonBorder: '#000000',
};

// Swap these require paths whenever you change the images
export const images = {
  page2Image1: require('../assets/images/page2_image1.png'),
  page2Image2: require('../assets/images/page2_image2.png'),
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
