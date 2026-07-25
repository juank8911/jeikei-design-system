import { createContext, useContext } from 'react';
import { NeuralEngineAPI } from '../neural/neural-types';
import { ThemeMode } from '../theme/colors';

export interface SystemContextValue {
  engine: NeuralEngineAPI | null;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

export const SystemContext = createContext<SystemContextValue | undefined>(undefined);

export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error('useSystem must be used within a Neural Native SystemProvider');
  }
  return context;
};
