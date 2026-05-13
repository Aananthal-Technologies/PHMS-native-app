import { StyleSheet } from 'react-native';
import { scaleX, colors, fonts } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextButton: {
    width: scaleX(79),
    height: scaleX(36),
    backgroundColor: colors.buttonBg,
    borderWidth: 0.2,
    borderColor: colors.buttonBorder,
    borderRadius: scaleX(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scaleX(4),
  },

  nextText: {
    fontFamily: fonts.regular,
    fontSize: scaleX(16),
    color: colors.black,
  },
});
