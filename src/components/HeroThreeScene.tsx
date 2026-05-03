import React, { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Center, useGLTF, Resize } from "@react-three/drei";
import * as THREE from "three";

class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}, {hasError: boolean}> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/* ------------------------------------------------------------------ */
/*  GLTF Model (loaded via useGLTF hook)                               */
/* ------------------------------------------------------------------ */
function GLTFModel({ path, scaleMultiplier = 1.5 }: { path: string; scaleMultiplier?: number }) {
  const { scene } = useGLTF(path);
  // Clone the scene to prevent bounding box calculation bugs when switching back and forth
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    clonedScene.traverse((node: any) => {
      // 1. Turn off any lights that came baked inside the GLB
      if (node.isLight) {
        node.intensity = 0;
      }
      
      // 2. Neutralize any purple materials (emissive or base color)
      if (node.isMesh && node.material) {
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        
        for (const mat of materials) {
          // Fix Emissive
          if (mat.emissive) {
            const { r, g, b } = mat.emissive;
            if (b > 0.3 && r > 0.1 && g < 0.3) {
              mat.emissive.setHex(0x111111);
            }
          }
          // Fix Base Color
          if (mat.color) {
            const { r, g, b } = mat.color;
            if (b > 0.3 && r > 0.1 && g < 0.3) {
              mat.color.setHex(0x111111);
            }
          }
          
          // Force camera lenses to be dark if named accordingly
          const matName = mat.name ? mat.name.toLowerCase() : "";
          if (matName.includes('camera') || matName.includes('lens')) {
             mat.color.setHex(0x050505);
             if (mat.emissive) mat.emissive.setHex(0x000000);
          }
        }
      }
    });
  }, [clonedScene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Resize scale={scaleMultiplier}>
        <Center>
          <primitive object={clonedScene} />
        </Center>
      </Resize>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Loading spinner (3D torus)                                         */
/* ------------------------------------------------------------------ */
function SpinnerMesh() {
  return null;
}

/* ------------------------------------------------------------------ */
/*  Placeholder phone box (when model file is missing)                 */
/* ------------------------------------------------------------------ */
function PlaceholderDevice({ brand }: { brand: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const emissiveColor = brand === "iphone" ? "#3b82f6" : "#8b5cf6";

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 2, 0.1]} />
      <meshStandardMaterial
        color="#1a1a1a"
        metalness={0.85}
        roughness={0.15}
        emissive={emissiveColor}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Model loader — loads the model and handles errors                  */
/* ------------------------------------------------------------------ */
function ModelLoader({ brand }: { brand: string }) {
  const path = brand === "iphone" ? "/models/iphone.glb" : "/models/samsung.glb";
  
  // Custom scales: if iphone's bounding box has invisible garbage making it small,
  // we boost its scale relative to samsung.
  const scaleMultiplier = brand === "iphone" ? 2.2 : 2.1;

  return (
    <ErrorBoundary fallback={<PlaceholderDevice brand={brand} />}>
      <Suspense fallback={<SpinnerMesh />}>
        <GLTFModel key={path} path={path} scaleMultiplier={scaleMultiplier} />
      </Suspense>
    </ErrorBoundary>
  );
}

/* ------------------------------------------------------------------ */
/*  Exported Three.js scene                                            */
/* ------------------------------------------------------------------ */
export function HeroThreeScene({ brand }: { brand: string }) {
  const [contextLost, setContextLost] = useState(false);

  if (contextLost) {
    return (
      <div className="hero-3d-canvas flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="hero-phone-silhouette">
            <div className="hero-phone-screen" />
            <div className="hero-phone-notch" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
            3D preview · visit in-store
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-3d-canvas">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
        camera={{ position: [0, 0.5, 3.5], fov: 45 }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            setContextLost(true);
          });
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />
        <spotLight position={[0, 8, 0]} intensity={0.6} angle={0.5} penumbra={0.5} />
        <Environment preset="studio" />

        <ModelLoader brand={brand} />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
}
