import React from 'react';
export interface NeoCardProps {
    title?: string;
    value?: string;
    trend?: {
        value: string;
        direction: 'up' | 'down' | 'neutral';
    };
    children?: React.ReactNode;
    className?: string;
    glow?: boolean;
}
export declare const NeoCard: React.FC<NeoCardProps>;
