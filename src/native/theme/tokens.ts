import { Platform } from 'react-native';

export const tokens = {
  radius: {
    neo: 20,
    soft: 12,
    md: 12,
    lg: 18,
  },
  spacing: {
    neo: 24,
    wide: 32,
    normal: 16,
    tight: 8,
  }
};

export const getShadowStyle = (color: string, intensity: 'soft' | 'strong' | 'accent' = 'soft') => {
  if (Platform.OS === 'ios') {
    const radius = intensity === 'soft' ? 12 : intensity === 'strong' ? 24 : 8;
    const opacity = intensity === 'soft' ? 0.35 : intensity === 'strong' ? 0.6 : 0.45;
    return {
      shadowColor: color,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: opacity,
      shadowRadius: radius,
    };
  } else {
    // Android elevation (limited colors, but we can set elevation)
    return {
      elevation: intensity === 'soft' ? 4 : intensity === 'strong' ? 8 : 2,
    };
  }
};
