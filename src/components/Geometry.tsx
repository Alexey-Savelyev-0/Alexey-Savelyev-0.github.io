import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';

const AnimatedTorusKnot = () => {
  const knotRef = useRef<any>();

  useFrame(() => {
    if (knotRef.current) {
      knotRef.current.rotation.x += 0.005;
      knotRef.current.rotation.y += 0.005;
    }
  });

  return (
    <TorusKnot ref={knotRef} args={[1, 0.4, 100, 16]} position={[1, .4, 0]} scale={1.5}>
      <meshStandardMaterial color="#9f1239" wireframe />
    </TorusKnot>
  );
};

const Geometry = () => {
  return (
    <div style={{ zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <AnimatedTorusKnot />
      </Canvas>
    </div>
  );
};

export default Geometry;
