import React from 'react';
export interface NeoGridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: {
        base?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: 'sm' | 'md' | 'lg' | 'none';
    variant?: 'neural' | 'standard';
}
export declare const NeoGrid: React.FC<NeoGridProps>;
