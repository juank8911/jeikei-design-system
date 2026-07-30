import React, { useState, useEffect, useMemo } from 'react';
import { SystemContext, ThemeMode } from './SystemContext';
import { NeuralEngine } from '../neural/NeuralEngine';
import { getColorVars } from '../theme/colors';

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('nebula');
  
  const engine = useMemo(() => {
    if (typeof window === 'undefined') return null;
    // Ensure size is valid before init
    const w = window.innerWidth || 1920;
    const h = window.innerHeight || 1080;
    return new NeuralEngine(w, h);
  }, []);

  useEffect(() => {
    if (!engine) return;

    let lastTime = performance.now();
    let frame: number;

    const loop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      const dt = Math.min(delta, 0.1);
      engine.update(dt);
      frame = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      engine.resize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      engine.destroy();
    };
  }, [engine]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const styleVars = useMemo(() => getColorVars(theme), [theme]);

  return (
    <SystemContext value={{ engine, theme, setTheme }}>
      <div className={`jk-system-root jk-theme-${theme}`} style={styleVars}>
        {children}
      </div>
    </SystemContext>
  );
};
