import { StyleSheet } from 'react-native';
import { scaleX, scaleY, colors, fonts } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  // ─── Back (left: 35, top: 65) ──────────────────────────────
  backButton: {
    position: 'absolute',
    left: scaleX(35),
    top: scaleY(65),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaleX(4),
  },

  backText: {
    fontFamily: fonts.regular,
    fontSize: scaleX(16),
    lineHeight: scaleX(22),
    color: colors.black,
    textAlign: 'center',
  },

  // ─── Title (width: 367, text-align: center) ────────────────
  // Centered horizontally on screen, positioned below back button
  title: {
    position: 'absolute',
    width: scaleX(367),
    left: scaleX((390 - 367) / 2),
    top: scaleY(130),
    fontFamily: fonts.title,
    fontSize: scaleX(24),
    lineHeight: scaleX(28),
    color: colors.black,
    textAlign: 'center',
  },

  // ─── Group 6: dropdown (width: 283, height: 33) ───────────
  dropdown: {
    position: 'absolute',
    width: scaleX(283),
    height: scaleX(33),
    left: scaleX(18),
    top: scaleY(210),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: scaleX(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleX(10),
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },

  dropdownPlaceholder: {
    fontFamily: fonts.regular,
    fontSize: scaleX(16),
    lineHeight: scaleX(22),
    color: colors.black,
    opacity: 0.3,
    textAlign: 'center',
  },

  // ─── Next button (right of dropdown) ───────────────────────
  nextButton: {
    position: 'absolute',
    width: scaleX(79),
    height: scaleX(36),
    left: scaleX(18 + 283 + 10),
    top: scaleY(208),
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
    lineHeight: scaleX(22),
    color: colors.black,
  },

  // ─── Group 1: images (width: 378, height: 364, opacity: 0.3)
  imagesGroup: {
    position: 'absolute',
    width: scaleX(378),
    height: scaleY(364),
    left: scaleX((390 - 378) / 2),
    top: scaleY(420),
    opacity: 0.3,
  },

  // image 1: 215.58 × 343.49
  image1: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: scaleX(215),
    height: scaleY(344),
  },

  // image 2: 215.38 × 343.81
  image2: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: scaleX(215),
    height: scaleY(344),
  },
});
