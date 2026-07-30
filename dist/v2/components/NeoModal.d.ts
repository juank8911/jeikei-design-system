import React from 'react';
export interface NeoModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const NeoModal: React.FC<NeoModalProps>;
