import React from 'react';
import { GestureResponderEvent } from 'react-native';
export interface NeoButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
}
export declare const NeoButton: React.FC<NeoButtonProps>;
