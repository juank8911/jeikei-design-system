import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { SystemProvider } from '../system/SystemProvider';
import { NeuralBackground } from '../neural/NeuralBackground';

export interface NeoLayoutProps {
  children: React.ReactNode;
}

const NeoLayoutInner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* The animated Neural mesh background */}
      <NeuralBackground />

      {/* Elegant dark overlay to keep high visual readability on content */}
      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </View>
  );
};

export const NeoLayout: React.FC<NeoLayoutProps> = ({ children }) => {
  return (
    <SystemProvider>
      <NeoLayoutInner>
        {children}
      </NeoLayoutInner>
    </SystemProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  safeArea: {
    flex: 1,
    zIndex: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
