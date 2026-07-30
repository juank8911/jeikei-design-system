type Options = {
    keys?: string[];
    onPulse?: (key: string) => void;
};
export declare const useKeyboardPulse: ({ keys, onPulse }?: Options) => void;
export {};
