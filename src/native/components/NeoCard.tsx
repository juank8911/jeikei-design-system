import React from 'react';
import { StyleSheet, Text, View, Platform, Pressable, GestureResponderEvent } from 'react-native';
import { useSystem } from '../system/SystemContext';
import { colors } from '../theme/colors';
import { getShadowStyle } from '../theme/tokens';

// Robust dynamic loading of expo-blur for maximum safety
let BlurView: any = null;
try {
  BlurView = require('expo-blur').BlurView;
} catch {
  // Fallback to semi-transparent view
}

export interface NeoCardProps {
  title?: string;
  value?: string;
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  children?: React.ReactNode;
  glow?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

export const NeoCard: React.FC<NeoCardProps> = ({
  title,
  value,
  trend,
  children,
  glow = true,
  onPress,
}) => {
  const { engine, theme } = useSystem();
  const accentColor = colors[theme].accent;

  const handlePress = (e: GestureResponderEvent) => {
    if (engine) {
      const { pageX, pageY } = e.nativeEvent;
      if (pageX !== undefined && pageY !== undefined) {
        engine.emitPulse(pageX, pageY, 0.6); // Atmospheric atmospheric pulse
      }
    }
    if (onPress) onPress(e);
  };

  const trendColorStyle = () => {
    if (!trend) return {};
    if (trend.direction === 'up') return { color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)' };
    if (trend.direction === 'down') return { color: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.1)' };
    return { color: accentColor, backgroundColor: 'rgba(52, 216, 255, 0.1)' };
  };

  const cardShadow = glow ? getShadowStyle(accentColor, 'soft') : {};

  const renderContent = () => (
    <View style={styles.contentContainer}>
      {/* HUD Corner Decor (Top-Right) */}
      <View style={[styles.hudCornerHoriz, { backgroundColor: 'rgba(255, 255, 255, 0.15)' }]} />
      <View style={[styles.hudCornerVert, { backgroundColor: 'rgba(255, 255, 255, 0.15)' }]} />

      {/* Title */}
      {title && (
        <Text style={[styles.title, { color: 'rgba(255, 255, 255, 0.5)' }]}>
          {title.toUpperCase()}
        </Text>
      )}

      {/* Main Metric Value */}
      {value !== undefined && (
        <View style={styles.metricRow}>
          <Text style={styles.valueText}>{value}</Text>
          {trend && (
            <Text style={[styles.trendBadge, trendColorStyle()]}>
              {trend.value}
            </Text>
          )}
        </View>
      )}

      {/* Inner Children */}
      {children && (
        <View style={styles.childrenContainer}>
          {children}
        </View>
      )}
    </View>
  );

  const containerStyles = [
    styles.card,
    cardShadow,
  ];

  const CardWrapper = onPress ? Pressable : View;

  const renderSpecularHighlight = () => (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={styles.specularTop} />
      <View style={styles.specularLeft} />
    </View>
  );

  if (BlurView && Platform.OS === 'ios') {
    return (
      <CardWrapper
        onPress={onPress ? handlePress : undefined}
        style={onPress
          ? (({ pressed }: any) => [
              ...containerStyles,
              pressed && styles.pressed,
              { overflow: 'hidden', backgroundColor: pressed ? 'rgba(255,255,255,0.05)' : 'transparent' }
            ])
          : [
              ...containerStyles,
              { overflow: 'hidden', backgroundColor: 'transparent' }
            ]
        }
      >
        <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFill} />
        {renderSpecularHighlight()}
        {renderContent()}
      </CardWrapper>
    );
  }

  // Android & Web Fallback (uses high contrast glass style with precise transparent gradient color)
  return (
    <CardWrapper
      onPress={onPress ? handlePress : undefined}
      style={onPress
        ? (({ pressed }: any) => [
            ...containerStyles,
            pressed && styles.pressed,
            { backgroundColor: pressed ? 'rgba(11, 15, 21, 0.65)' : 'rgba(11, 15, 21, 0.5)' }
          ])
        : [
            ...containerStyles,
            { backgroundColor: 'rgba(11, 15, 21, 0.5)' }
          ]
      }
    >
      {renderSpecularHighlight()}
      {renderContent()}
    </CardWrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 24,
    marginVertical: 10,
    position: 'relative',
  },
  specularTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  specularLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  contentContainer: {
    zIndex: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  valueText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: -1,
    marginRight: 12,
  },
  trendBadge: {
    fontSize: 9,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 3,
    overflow: 'hidden',
  },
  childrenContainer: {
    marginTop: 4,
  },
  pressed: {
    transform: [{ scale: 0.99 }],
  },
  hudCornerHoriz: {
    position: 'absolute',
    top: -24,
    right: -24,
    width: 32,
    height: 1,
    zIndex: 20,
  },
  hudCornerVert: {
    position: 'absolute',
    top: -24,
    right: -24,
    width: 1,
    height: 16,
    zIndex: 20,
  },
});
