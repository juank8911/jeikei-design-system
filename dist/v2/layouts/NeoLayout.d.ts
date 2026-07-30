import React from 'react';
import '../styles/globals.css';
import '../styles/effects.css';
export interface NeoLayoutProps {
    children: React.ReactNode;
    showScanlines?: boolean;
}
/**
 * NeoLayout — Self-contained layout with Neural Engine + Glass UI system.
 *
 * Wraps children in SystemProvider automatically so consumers don't need to
 * manually add it. If you already have a SystemProvider higher in the tree,
 * use NeoLayoutInner directly to avoid double provider.
 *
 * Usage:
 *   <NeoLayout>
 *     <YourApp />
 *   </NeoLayout>
 */
export declare const NeoLayout: React.FC<NeoLayoutProps>;
