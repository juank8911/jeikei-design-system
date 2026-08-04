import { NeuralNode, NeuralEdge, NeuralPulse, NeuralEngineAPI, NeuralState } from './neural-types';

export class NeuralEngine implements NeuralEngineAPI {
  private nodes: NeuralNode[] = [];
  private edges: NeuralEdge[] = [];
  private pulses: NeuralPulse[] = [];
  private adjacency: Map<number, number[]> = new Map();
  private activeEdges: Set<string> = new Set();
  private listeners: Set<(state: NeuralState) => void> = new Set();
  
  private width: number;
  private height: number;
  private density: number = 45; // Pixels between nodes

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initialize();
  }

  private initialize() {
    this.nodes = [];
    this.edges = [];
    this.pulses = [];
    this.activeEdges.clear();
    this.adjacency.clear();

    const cols = Math.ceil(this.width / this.density) + 1;
    const rows = Math.ceil(this.height / this.density) + 1;

    // 1. Create Nodes with slight organic jitter
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const id = r * cols + c;
        const x = c * this.density + (Math.random() - 0.5) * 20;
        const y = r * this.density + (Math.random() - 0.5) * 20;
        
        const vx = (Math.random() - 0.5) * 10;
        const vy = (Math.random() - 0.5) * 10;
        
        this.nodes.push({
          id,
          position: [x, y, 0],
          velocity: [vx, vy, 0],
          energy: 0
        });
        this.adjacency.set(id, []);
      }
    }

    // 2. Create Edges & Build Adjacency List
    const addEdge = (from: number, to: number) => {
      const weight = 0.7 + Math.random() * 0.3;
      this.edges.push({ from, to, weight });
      this.adjacency.get(from)?.push(to);
      this.adjacency.get(to)?.push(from);
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        // Connect Right
        if (c < cols - 1) addEdge(i, i + 1);
        // Connect Bottom
        if (r < rows - 1) addEdge(i, i + cols);
        // Diagonal (adds mesh complexity)
        if (c < cols - 1 && r < rows - 1 && Math.random() > 0.7) {
          addEdge(i, i + cols + 1);
        }
      }
    }
  }

  public update(delta: number) {
    // 0. Update Positions (Organic Drift)
    this.updatePositions(delta);

    // Random spontaneous pulses (propio movimiento)
    if (Math.random() < 0.02) { 
      const randomNode = this.nodes[Math.floor(Math.random() * this.nodes.length)];
      if (randomNode) {
        this.emitPulse(randomNode.position[0], randomNode.position[1], 0.6 + Math.random() * 0.4);
      }
    }

    // 1. Process Active Pulses
    const nextPulses: NeuralPulse[] = [];
    this.activeEdges.clear();

    for (const pulse of this.pulses) {
      const node = this.nodes[pulse.nodeId];
      if (!node) continue;

      // Ignite node
      node.energy = Math.min(node.energy + pulse.strength, 1.5);

      // Propagate if pulse has capacity
      if (pulse.life > 1 && pulse.strength > 0.05) {
        const neighbors = this.adjacency.get(pulse.nodeId) || [];
        for (const neighborId of neighbors) {
          // Avoid immediate back-propagation for directional feel
          if (neighborId === pulse.originId) continue;

          // Mark edge as active for visual trails
          const edgeId = [pulse.nodeId, neighborId].sort((a, b) => a - b).join('-');
          this.activeEdges.add(edgeId);

          // Spread energy with decay
          nextPulses.push({
            nodeId: neighborId,
            originId: pulse.nodeId,
            strength: pulse.strength * 0.75, // Higher retention for longer trails
            life: pulse.life - 1
          });
        }
      }
    }

    // 2. Node Energy Dissipation & Passive Recovery
    this.nodes.forEach(node => {
      node.energy *= 0.92; // Slightly slower decay
      if (node.energy < 0.001) node.energy = 0;
    });

    // 3. Swap Pulses & Apply Performance Limit
    this.pulses = nextPulses.length > 600 
      ? nextPulses.sort((a, b) => b.strength - a.strength).slice(0, 600)
      : nextPulses;

    this.notify();
  }

  public emitPulse(x: number, y: number, intensity: number = 1.0) {
    // Find closest node (Spatial hash would be better for high density, but brute force is ok for ~1k nodes)
    let closestId = -1;
    let minDist = Infinity;

    for (const node of this.nodes) {
      const dx = node.position[0] - x;
      const dy = node.position[1] - y;
      const d = dx * dx + dy * dy;
      if (d < minDist) {
        minDist = d;
        closestId = node.id;
      }
    }

    if (closestId !== -1 && minDist < 60000) { // approx 245px radius
      this.pulses.push({
        nodeId: closestId,
        strength: intensity,
        life: 6 // propagation steps
      });
    }
  }

  private updatePositions(delta: number) {
    const speed = 2.5; // Multiplier for drift speed (increased for noticeable movement)
    this.nodes.forEach(node => {
      // Apply velocity
      node.position[0] += node.velocity[0] * delta * speed;
      node.position[1] += node.velocity[1] * delta * speed;

      // Wrap around bounds with margin
      const margin = 100;
      if (node.position[0] < -margin) node.position[0] = this.width + margin;
      if (node.position[0] > this.width + margin) node.position[0] = -margin;
      if (node.position[1] < -margin) node.position[1] = this.height + margin;
      if (node.position[1] > this.height + margin) node.position[1] = -margin;
    });
  }

  public getState(): NeuralState {
    return {
      nodes: this.nodes,
      edges: this.edges,
      pulses: this.pulses,
      activeEdges: this.activeEdges,
      totalEnergy: this.nodes.reduce((sum, n) => sum + n.energy, 0)
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }

  public subscribe(fn: (state: NeuralState) => void) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initialize();
  }

  public destroy() {
    this.listeners.clear();
    this.nodes = [];
    this.edges = [];
    this.pulses = [];
    this.adjacency.clear();
  }
}
