import { NeuralEngineAPI, NeuralState } from './neural-types';
export declare class NeuralEngine implements NeuralEngineAPI {
    private nodes;
    private edges;
    private pulses;
    private adjacency;
    private activeEdges;
    private listeners;
    private width;
    private height;
    private density;
    constructor(width: number, height: number);
    private initialize;
    update(delta: number): void;
    emitPulse(x: number, y: number, intensity?: number): void;
    private updatePositions;
    getState(): NeuralState;
    private notify;
    subscribe(fn: (state: NeuralState) => void): () => boolean;
    resize(width: number, height: number): void;
    destroy(): void;
}
