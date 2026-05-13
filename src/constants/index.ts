export const APP_NAME = 'PHMS';

export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'https://api.phms.com';

export const COLORS = {
  primary: '#2563EB',
  secondary: '#7C3AED',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
  background: '#F9FAFB',
  surface: '#FFFFFF',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
};

export const STORAGE_KEYS = {
  authToken: '@phms/auth_token',
  user: '@phms/user',
  settings: '@phms/settings',
};
