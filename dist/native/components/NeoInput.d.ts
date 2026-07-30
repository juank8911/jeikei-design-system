import React from 'react';
import { TextInputProps } from 'react-native';
export interface NeoInputProps extends TextInputProps {
    label?: string;
    error?: string;
}
export declare const NeoInput: React.FC<NeoInputProps>;
