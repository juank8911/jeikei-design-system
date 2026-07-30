import React, { createContext, use, useState } from 'react';

export type Theme = 'neural' | 'glass' | 'cyber';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('neural');

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <div className={`theme-${theme} min-h-screen bg-[#05070a] text-white`}>
        {children}
      </div>
    </ThemeContext>
  );
};

export const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
