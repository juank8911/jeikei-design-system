import React, { useState, useEffect, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { SystemContext } from './SystemContext';
import { NeuralEngine } from '../neural/NeuralEngine';
import { ThemeMode } from '../theme/colors';

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('nebula');
  const { width, height } = useWindowDimensions();

  const engine = useMemo(() => {
    return new NeuralEngine(width || 400, height || 800);
  }, []);

  useEffect(() => {
    if (!engine) return;

    let lastTime = Date.now();
    let frame: number;

    const loop = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      const dt = Math.min(delta, 0.1);
      engine.update(dt);
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      engine.destroy();
    };
  }, [engine]);

  useEffect(() => {
    if (engine && width && height) {
      engine.resize(width, height);
    }
  }, [width, height, engine]);

  return (
    <SystemContext value={{ engine, theme, setTheme }}>
      {children}
    </SystemContext>
  );
};
