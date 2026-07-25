import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import {
  NeoLayout,
  NeoCard,
  NeoButton,
  NeoInput,
  NeoBadge,
  useSystem
} from '../../src/native';

// Inner component to access the system provider context (theme switcher, etc.)
const DashboardScreen: React.FC = () => {
  const { theme, setTheme, engine } = useSystem();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'SYSTEM' | 'AGENTS'>('SYSTEM');

  const toggleTheme = () => {
    setTheme(theme === 'nebula' ? 'mission' : 'nebula');
    if (engine) {
      // Trigger a massive reaction pulse in the center of the screen
      const { width, height } = Dimensions.get('window');
      engine.emitPulse(width / 2, height / 2, 2.0);
    }
  };

  const handleManualPulse = () => {
    if (engine) {
      const { width, height } = Dimensions.get('window');
      // Fire a pulse from the bottom button
      engine.emitPulse(width / 2, height - 120, 1.5);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      {/* 1. Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>PROJECT OVERVIEW</Text>
          <Text style={[styles.subtitle, { color: theme === 'nebula' ? '#34d8ff' : '#f2b93b' }]}>
            MISSION CONTROL // SESSION ACTIVE
          </Text>
        </View>
        <TouchableOpacity
          onPress={toggleTheme}
          style={[
            styles.themeToggle,
            { borderColor: theme === 'nebula' ? 'rgba(52, 216, 255, 0.3)' : 'rgba(242, 185, 59, 0.3)' }
          ]}
        >
          <Text style={[styles.themeToggleText, { color: theme === 'nebula' ? '#34d8ff' : '#f2b93b' }]}>
            {theme.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 2. Global System Status Badge Row */}
      <View style={styles.badgeRow}>
        <NeoBadge label="Kernel: Online" variant="success" />
        <NeoBadge label="Neural Net: Ready" variant="info" />
        <NeoBadge label="Latency: 14ms" variant="warning" />
      </View>

      {/* 3. Search HUD Input */}
      <NeoInput
        label="Search Tactical Node"
        placeholder="ENTER SCAN QUERY..."
        value={search}
        onChangeText={setSearch}
      />

      {/* 4. Stat Grid */}
      <View style={styles.statGrid}>
        <NeoCard
          title="Active Projects"
          value="87"
          trend={{ value: '+12%', direction: 'up' }}
        >
          <Text style={styles.cardDesc}>Neural linkage propagating properly across nodes.</Text>
        </NeoCard>

        <NeoCard
          title="Completed Missions"
          value="1,204"
          trend={{ value: 'OPTIMIZED', direction: 'neutral' }}
        >
          <Text style={styles.cardDesc}>Subsystem kernels running at maximum capacity.</Text>
        </NeoCard>
      </View>

      {/* 5. Tabs System */}
      <View style={styles.tabContainer}>
        {(['SYSTEM', 'AGENTS'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && { borderBottomColor: theme === 'nebula' ? '#34d8ff' : '#f2b93b', borderBottomWidth: 2 }
            ]}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab ? { color: '#ffffff', fontWeight: 'bold' } : { color: 'rgba(255, 255, 255, 0.4)' }
            ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 6. Tabs Content Area */}
      <NeoCard title={activeTab === 'SYSTEM' ? "Subsystem Status Feed" : "Active Tactical Agents"}>
        {activeTab === 'SYSTEM' ? (
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Text style={styles.listKey}>GRID-ALPHA-9</Text>
              <Text style={styles.listValSuccess}>STABLE</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listKey}>QUANTUM-BUS</Text>
              <Text style={styles.listValSuccess}>ACTIVE</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listKey}>BEAM-SENSORS</Text>
              <Text style={styles.listValWarn}>HIGH TEMP</Text>
            </View>
          </View>
        ) : (
          <View style={styles.listContainer}>
            <View style={styles.listItem}>
              <Text style={styles.listKey}>AGENT PHOENIX</Text>
              <Text style={styles.listValSuccess}>ON MISSION</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listKey}>AGENT NOVA</Text>
              <Text style={styles.listValSuccess}>STANDBY</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listKey}>AGENT ORION</Text>
              <Text style={styles.listValAlert}>DE-SYNC</Text>
            </View>
          </View>
        )}
      </NeoCard>

      {/* 7. Manual Interaction Pulse Button */}
      <View style={styles.actionContainer}>
        <NeoButton variant="primary" size="lg" onPress={handleManualPulse}>
          Emit Neural Signal
        </NeoButton>
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NeoLayout>
      <DashboardScreen />
    </NeoLayout>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2.0,
    marginTop: 4,
  },
  themeToggle: {
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
  themeToggleText: {
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  statGrid: {
    marginVertical: 10,
  },
  cardDesc: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 18,
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 16,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  tabText: {
    fontSize: 11,
    letterSpacing: 1.5,
  },
  listContainer: {
    paddingVertical: 4,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  listKey: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  listValSuccess: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#00ff9c',
  },
  listValWarn: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#f2b93b',
  },
  listValAlert: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#f87171',
  },
  actionContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 10,
  },
});
