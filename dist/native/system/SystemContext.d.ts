import { NeuralEngineAPI } from '../neural/neural-types';
import { ThemeMode } from '../theme/colors';
export interface SystemContextValue {
    engine: NeuralEngineAPI | null;
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}
export declare const SystemContext: import("react").Context<SystemContextValue | undefined>;
export declare const useSystem: () => SystemContextValue;
