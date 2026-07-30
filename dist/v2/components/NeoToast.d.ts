import React from 'react';
export interface NeoToastProps {
    message: string;
    description?: string;
    variant?: 'info' | 'success' | 'warning' | 'error';
    duration?: number;
    onClose: () => void;
    actionLabel?: string;
    onAction?: () => void;
}
export declare const NeoToast: React.FC<NeoToastProps>;
