import React from 'react';
export type Theme = 'neural' | 'glass' | 'cyber';
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useTheme: () => ThemeContextType;
export {};
