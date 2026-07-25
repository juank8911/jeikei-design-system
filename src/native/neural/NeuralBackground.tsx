import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Canvas, Path, Points, vec, Skia, SkPath } from '@shopify/react-native-skia';
import { useSystem } from '../system/SystemContext';
import { colors } from '../theme/colors';

export interface NeuralBackgroundProps {
  className?: string; // For compatibility
}

export const NeuralBackground: React.FC<NeuralBackgroundProps> = () => {
  const { engine, theme } = useSystem();

  const [nodePoints, setNodePoints] = useState<any[]>([]);
  const [activeNodePoints, setActiveNodePoints] = useState<any[]>([]);
  const [edgesPath, setEdgesPath] = useState<SkPath | null>(null);
  const [activeEdgesPath, setActiveEdgesPath] = useState<SkPath | null>(null);
  const [fps, setFps] = useState(60);

  // Theme colors
  const activeColor = colors[theme].accent;
  const inactiveColor = 'rgba(255, 255, 255, 0.1)';
  const nodeColor = 'rgba(255, 255, 255, 0.2)';
  const activeNodeColor = colors[theme].accent;

  useEffect(() => {
    if (!engine) return;

    let frameCount = 0;
    let lastFpsUpdate = Date.now();

    const unsubscribe = engine.subscribe((state) => {
      const { nodes, edges, activeEdges } = state;

      // 1. Prepare Node Points
      const standardPoints: any[] = [];
      const energizedPoints: any[] = [];

      nodes.forEach((n) => {
        const pt = vec(n.position[0], n.position[1]);
        if (n.energy > 0.2) {
          energizedPoints.push(pt);
        } else {
          standardPoints.push(pt);
        }
      });

      // 2. Prepare Edges Paths
      const baseSkPath = Skia.Path.Make();
      const activeSkPath = Skia.Path.Make();

      edges.forEach((edge) => {
        const nodeA = nodes[edge.from];
        const nodeB = nodes[edge.to];
        if (nodeA && nodeB) {
          const edgeId = [edge.from, edge.to].sort((a, b) => a - b).join('-');
          if (activeEdges.has(edgeId)) {
            activeSkPath.moveTo(nodeA.position[0], nodeA.position[1]);
            activeSkPath.lineTo(nodeB.position[0], nodeB.position[1]);
          } else {
            baseSkPath.moveTo(nodeA.position[0], nodeA.position[1]);
            baseSkPath.lineTo(nodeB.position[0], nodeB.position[1]);
          }
        }
      });

      // 3. Update States
      setNodePoints(standardPoints);
      setActiveNodePoints(energizedPoints);
      setEdgesPath(baseSkPath);
      setActiveEdgesPath(activeSkPath);

      // FPS tracking
      frameCount++;
      const now = Date.now();
      if (now - lastFpsUpdate > 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsUpdate = now;
      }
    });

    return () => {
      unsubscribe();
    };
  }, [engine]);

  const bgStyle = useMemo(() => {
    return {
      backgroundColor: colors[theme].bg,
    };
  }, [theme]);

  return (
    <View style={[StyleSheet.absoluteFillObject, bgStyle]}>
      <Canvas style={StyleSheet.absoluteFillObject}>
        {/* Passive Edges */}
        {edgesPath && (
          <Path
            path={edgesPath}
            color={inactiveColor}
            style="stroke"
            strokeWidth={1}
          />
        )}

        {/* Active Energized Edges (Glow effect) */}
        {activeEdgesPath && (
          <Path
            path={activeEdgesPath}
            color={activeColor}
            style="stroke"
            strokeWidth={2}
          />
        )}

        {/* Standard Nodes */}
        {nodePoints.length > 0 && (
          <Points
            points={nodePoints}
            mode="points"
            color={nodeColor}
            strokeWidth={2}
          />
        )}

        {/* Energized Active Nodes */}
        {activeNodePoints.length > 0 && (
          <Points
            points={activeNodePoints}
            mode="points"
            color={activeNodeColor}
            strokeWidth={4.5}
          />
        )}
      </Canvas>

      {/* Futuristic HUD overlay info */}
      <View style={styles.hudContainer}>
        <Text style={[styles.hudText, { color: activeColor }]}>
          SYSTEM_LOAD: {fps} FPS // {theme.toUpperCase()}_NATIVE_MODE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hudContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    opacity: 0.4,
  },
  hudText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 9,
    letterSpacing: 1.5,
  },
});
