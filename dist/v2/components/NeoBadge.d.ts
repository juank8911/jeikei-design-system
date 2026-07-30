import React from 'react';
export interface NeoBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'accent' | 'glass' | 'danger' | 'warning' | 'success';
    glow?: boolean;
}
export declare const NeoBadge: React.FC<NeoBadgeProps>;
