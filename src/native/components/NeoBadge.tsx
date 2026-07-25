import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { useSystem } from '../system/SystemContext';
import { colors } from '../theme/colors';

export interface NeoBadgeProps {
  label: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
}

export const NeoBadge: React.FC<NeoBadgeProps> = ({
  label,
  variant = 'info',
}) => {
  const { theme } = useSystem();

  const getColors = () => {
    switch (variant) {
      case 'success':
        return {
          text: '#00ff9c',
          bg: 'rgba(0, 255, 156, 0.08)',
          border: 'rgba(0, 255, 156, 0.3)',
          dot: '#00ff9c',
        };
      case 'warning':
        return {
          text: colors[theme].accent,
          bg: `${colors[theme].accent}15`, // append alpha
          border: 'rgba(242, 185, 59, 0.3)',
          dot: colors[theme].accent,
        };
      case 'error':
        return {
          text: '#f87171',
          bg: 'rgba(248, 113, 113, 0.08)',
          border: 'rgba(248, 113, 113, 0.3)',
          dot: '#f87171',
        };
      case 'info':
      default:
        return {
          text: '#34d8ff',
          bg: 'rgba(52, 216, 255, 0.08)',
          border: 'rgba(52, 216, 255, 0.3)',
          dot: '#34d8ff',
        };
    }
  };

  const badgeColors = getColors();

  return (
    <View style={[
      styles.badge,
      {
        backgroundColor: badgeColors.bg,
        borderColor: badgeColors.border,
      }
    ]}>
      {/* Indicator Dot */}
      <View style={[styles.dot, { backgroundColor: badgeColors.dot }]} />

      <Text style={[styles.text, { color: badgeColors.text }]}>
        {label.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  text: {
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
});
