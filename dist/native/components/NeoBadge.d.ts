import React from 'react';
export interface NeoBadgeProps {
    label: string;
    variant?: 'success' | 'warning' | 'error' | 'info';
}
export declare const NeoBadge: React.FC<NeoBadgeProps>;
