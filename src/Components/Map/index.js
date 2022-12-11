import './styles.css';
import { Canvas } from '@react-three/fiber';
import Scene from '../ControlsNavigate3d/scene';
import { Physics } from '@react-three/cannon';
import { MapControls } from '@react-three/drei';
import { Suspense } from 'react';
import { OrbitControls } from 'three-stdlib';

export default function Map() {
  return (
    <Canvas
      style={{ height: '300px', margin: '20px 20px' }}
      className="section-map-svg"
      frameloop="demand"
      orthographic
      camera={{ position: [0, 0, 50], zoom: 2, far: 10000 }}>
      <fog attach="fog" args={['white', 0, 500]} />
      <Scene />
      <MapControls enableRotate={true} />
    </Canvas>
  );
}
