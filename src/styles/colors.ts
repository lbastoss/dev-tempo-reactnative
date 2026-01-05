export const colors = {
  // Cores principais
  primary: '#4A90E2',
  primaryDark: '#357ABD',

  // Background
  background: '#F5F5F5',
  cardBackground: '#FFFFFF',

  // Texto
  text: '#333333',
  textSecondary: '#666666',
  textLight: '#999999',

  // Status
  error: '#E74C3C',
  success: '#2ECC71',
  warning: '#F39C12',

  // Bordas
  border: '#E0E0E0',
  shadow: '#000000',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: '700' as const,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
  },
};