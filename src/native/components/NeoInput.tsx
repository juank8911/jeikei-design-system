import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, Text, Platform } from 'react-native';
import { useSystem } from '../system/SystemContext';
import { colors } from '../theme/colors';
import { getShadowStyle } from '../theme/tokens';

export interface NeoInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const NeoInput: React.FC<NeoInputProps> = ({
  label,
  error,
  style,
  onFocus,
  onBlur,
  placeholderTextColor,
  ...props
}) => {
  const { engine, theme } = useSystem();
  const [isFocused, setIsFocused] = useState(false);
  const accentColor = colors[theme].accent;

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (engine) {
      // Atmospheric focus pulse! Let's emit a pulse on screen
      engine.emitPulse(100, 100, 0.4);
    }
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const getBorderColor = () => {
    if (error) return '#f87171';
    if (isFocused) return accentColor;
    return 'rgba(255, 255, 255, 0.15)';
  };

  const focusShadow = isFocused && !error ? getShadowStyle(accentColor, 'soft') : {};

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: isFocused ? accentColor : 'rgba(255, 255, 255, 0.4)' }]}>
          {label.toUpperCase()}
        </Text>
      )}

      <View style={[styles.inputWrapper, { borderColor: getBorderColor() }, focusShadow]}>
        <TextInput
          style={[
            styles.input,
            { color: '#ffffff' },
            style,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={placeholderTextColor || 'rgba(255, 255, 255, 0.3)'}
          keyboardAppearance="dark"
          {...props}
        />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  label: {
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 6,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
  },
  input: {
    height: 48,
    paddingHorizontal: 16,
    fontSize: 13,
  },
  errorText: {
    color: '#f87171',
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
  },
});
