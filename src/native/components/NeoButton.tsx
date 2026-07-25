import React from 'react';
import { StyleSheet, Text, Pressable, View, GestureResponderEvent } from 'react-native';
import { useSystem } from '../system/SystemContext';
import { colors } from '../theme/colors';
import { getShadowStyle } from '../theme/tokens';

export interface NeoButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onPress,
  disabled = false,
}) => {
  const { engine, theme } = useSystem();
  const accentColor = colors[theme].accent;

  const handlePress = (e: GestureResponderEvent) => {
    if (engine) {
      const { pageX, pageY } = e.nativeEvent;
      if (pageX !== undefined && pageY !== undefined) {
        engine.emitPulse(pageX, pageY, 1.25);
      }
    }
    if (onPress) onPress(e);
  };

  const getButtonStyles = () => {
    const shadow = getShadowStyle(accentColor, 'soft');

    switch (variant) {
      case 'primary':
        return [
          styles.primary,
          { backgroundColor: accentColor, borderColor: accentColor },
          shadow,
        ];
      case 'secondary':
        return [
          styles.secondary,
          { backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' },
        ];
      case 'outline':
        return [
          styles.outline,
          { borderColor: 'rgba(255, 255, 255, 0.25)' },
        ];
      case 'ghost':
        return [styles.ghost];
    }
  };

  const getTextStyles = () => {
    const isPrimary = variant === 'primary';
    const textBase = [
      styles.text,
      size === 'sm' ? styles.textSm : size === 'lg' ? styles.textLg : styles.textMd,
    ];

    if (isPrimary) {
      return [...textBase, { color: '#000000' }];
    } else if (variant === 'outline') {
      return [...textBase, { color: 'rgba(255, 255, 255, 0.7)' }];
    } else {
      return [...textBase, { color: accentColor }];
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        size === 'sm' ? styles.btnSm : size === 'lg' ? styles.btnLg : styles.btnMd,
        ...getButtonStyles(),
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={getTextStyles()}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnSm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnMd: {
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  btnLg: {
    paddingVertical: 16,
    paddingHorizontal: 36,
  },
  primary: {
    borderWidth: 1,
  },
  secondary: {
    borderWidth: 1,
  },
  outline: {
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  ghost: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  pressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
  },
  textSm: {
    fontSize: 9,
  },
  textMd: {
    fontSize: 11,
  },
  textLg: {
    fontSize: 13,
  },
});
