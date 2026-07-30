import React from 'react';
export interface NeoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    glow?: boolean;
}
export declare const NeoInput: React.FC<NeoInputProps>;
