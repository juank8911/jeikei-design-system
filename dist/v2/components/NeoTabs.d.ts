import React from 'react';
export type TabInfo = {
    id: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
};
export interface NeoTabsProps {
    tabs: TabInfo[];
    value?: string;
    defaultValue?: string;
    onChange?: (id: string) => void;
    className?: string;
}
export declare const NeoTabs: React.FC<NeoTabsProps>;
