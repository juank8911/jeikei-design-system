import React from 'react';
import { GestureResponderEvent } from 'react-native';
export interface NeoCardProps {
    title?: string;
    value?: string;
    trend?: {
        value: string;
        direction: 'up' | 'down' | 'neutral';
    };
    children?: React.ReactNode;
    glow?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
export declare const NeoCard: React.FC<NeoCardProps>;
