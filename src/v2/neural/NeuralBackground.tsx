import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useSystem } from '../system/SystemContext';
import { NeuralState, NeuralNode, NeuralEdge } from './neural-types';
// @ts-ignore
import vertexShader from './shaders/vertex.glsl?raw';
// @ts-ignore
import fragmentShader from './shaders/fragment.glsl?raw';
// @ts-ignore
import edgeVertexShader from './shaders/edgeVertex.glsl?raw';
// @ts-ignore
import edgeFragmentShader from './shaders/edgeFragment.glsl?raw';

export interface NeuralBackgroundProps {
  mode?: 'fullscreen' | 'contained';
  className?: string;
}

export const NeuralBackground: React.FC<NeuralBackgroundProps> = ({ 
  mode = 'fullscreen', 
  className = "" 
}) => {
  const { engine, theme } = useSystem();
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [fps, setFps] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !engine) return;

    const container = containerRef.current;
    const isFullscreen = mode === 'fullscreen';

    try {
      // 1. Renderer Setup
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      const updateSize = () => {
        const width = isFullscreen ? window.innerWidth : container.clientWidth;
        const height = isFullscreen ? window.innerHeight : container.clientHeight;
        renderer.setSize(width, height);
        return { width, height };
      };

      const initialSize = updateSize();
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(
        -initialSize.width / 2, 
        initialSize.width / 2, 
        initialSize.height / 2, 
        -initialSize.height / 2, 
        0.1, 1000
      );
      camera.position.z = 10;

      // 2. Nodes Material (Custom Shader)
      const pointsGeo = new THREE.BufferGeometry();
      const pointsMat = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uAccent: { value: new THREE.Color(theme === 'mission' ? 0xf2b93b : 0x34d8ff) },
          uGlowIntensity: { value: 2.5 },
          uSize: { value: isFullscreen ? 10.0 : 6.0 }
        }
      });

      const points = new THREE.Points(pointsGeo, pointsMat);
      scene.add(points);

      // 3. Edges Material (Advanced Shader for trails)
      const edgesGeo = new THREE.BufferGeometry();
      const edgesMat = new THREE.ShaderMaterial({
        vertexShader: edgeVertexShader,
        fragmentShader: edgeFragmentShader,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uAccent: { value: new THREE.Color(theme === 'mission' ? 0xf2b93b : 0x34d8ff) }
        }
      });

      const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
      scene.add(edgesMesh);

      // 4. Update Loop Synchronization
      let frameCount = 0;
      let lastFpsUpdate = performance.now();

      const unsubscribe = engine.subscribe((state: NeuralState) => {
        const { nodes, edges, activeEdges } = state;
        const currentSize = renderer.getSize(new THREE.Vector2());

        // Update Node Attributes
        const posArr = new Float32Array(nodes.length * 3);
        const enArr = new Float32Array(nodes.length);
        
        nodes.forEach((n: NeuralNode, i: number) => {
          posArr[i * 3] = n.position[0] - currentSize.x / 2;
          posArr[i * 3 + 1] = n.position[1] - currentSize.y / 2;
          posArr[i * 3 + 2] = n.position[2];
          enArr[i] = n.energy;
        });

        pointsGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
        pointsGeo.setAttribute('aEnergy', new THREE.BufferAttribute(enArr, 1));
        
        // Update Edge Attributes (with activity tracking)
        const edgePosArr = new Float32Array(edges.length * 6);
        const activeArr = new Float32Array(edges.length * 2);

        edges.forEach((edge: NeuralEdge, i: number) => {
          const nodeA = nodes[edge.from];
          const nodeB = nodes[edge.to];
          if (nodeA && nodeB) {
            const idx = i * 6;
            edgePosArr[idx] = nodeA.position[0] - currentSize.x / 2;
            edgePosArr[idx + 1] = nodeA.position[1] - currentSize.y / 2;
            edgePosArr[idx + 2] = nodeA.position[2];
            edgePosArr[idx + 3] = nodeB.position[0] - currentSize.x / 2;
            edgePosArr[idx + 4] = nodeB.position[1] - currentSize.y / 2;
            edgePosArr[idx + 5] = nodeB.position[2];

            const edgeId = [edge.from, edge.to].sort((a, b) => a - b).join('-');
            const isActive = activeEdges.has(edgeId) ? 1.0 : 0.0;
            activeArr[i * 2] = isActive;
            activeArr[i * 2 + 1] = isActive;
          }
        });

        edgesGeo.setAttribute('position', new THREE.BufferAttribute(edgePosArr, 3));
        edgesGeo.setAttribute('aActive', new THREE.BufferAttribute(activeArr, 1));
        
        pointsMat.uniforms.uTime.value = performance.now() * 0.001;
        edgesMat.uniforms.uTime.value = performance.now() * 0.001;
        renderer.render(scene, camera);
        
        frameCount++;
        const now = performance.now();
        if (now - lastFpsUpdate > 1000) {
          setFps(frameCount);
          frameCount = 0;
          lastFpsUpdate = now;
        }
      });

      const handleResize = () => {
        const size = updateSize();
        camera.left = -size.width / 2;
        camera.right = size.width / 2;
        camera.top = size.height / 2;
        camera.bottom = -size.height / 2;
        camera.updateProjectionMatrix();
      };

      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });

      if (isFullscreen) {
        window.addEventListener('resize', handleResize);
      } else {
        resizeObserver.observe(container);
      }

      const handleClick = (e: MouseEvent) => {
        engine.emitPulse(e.clientX, e.clientY, 1.5);
      };
      window.addEventListener('click', handleClick);

      return () => {
        unsubscribe();
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('click', handleClick);
        resizeObserver.disconnect();
        
        // Proper Three.js resource cleanup
        pointsGeo.dispose();
        pointsMat.dispose();
        edgesGeo.dispose();
        edgesMat.dispose();
        
        // Force context loss to prevent WebGL context limit errors on hot reload
        if (rendererRef.current) {
          rendererRef.current.forceContextLoss();
          rendererRef.current.dispose();
          const domElement = rendererRef.current.domElement;
          if (domElement && domElement.parentNode) {
            domElement.parentNode.removeChild(domElement);
          }
        }
      };
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to basic background:", err);
      return () => {};
    }
  }, [engine, theme, mode]);

  const baseClasses = mode === 'fullscreen' 
    ? "fixed inset-0 -z-10 bg-[#020202] pointer-events-none" 
    : "relative w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 jk-glass pointer-events-none";

  return (
    <div ref={containerRef} className={`${baseClasses} ${className}`}>
       {/* Background Noise/Texture */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />
       
       {mode === 'fullscreen' && (
         <div className="absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none">
            SYSTEM_LOAD: {fps} FPS // {theme.toUpperCase()}_MODE
         </div>
       )}
    </div>
  );
};
