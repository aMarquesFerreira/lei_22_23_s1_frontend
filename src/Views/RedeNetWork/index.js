import { Canvas } from '@react-three/fiber';
import { Sky, PointerLockControls, KeyboardControls, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';
import './styles.css';
import { Ground } from '../../Components/RedeNetWork/ground';
import { Warehouse } from '../../Components/RedeNetWork/warehouse';

export default function RedeNetWork() {
  return (
    <section className="environment">
      <Canvas camera={{ fov: 45 }} shadows dpr={[1, 2]} gl={{ alpha: false }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics /* gravity={[0, -30, 0] }*/>
          <Ground position={[0, 0, 0]} />
          <Warehouse position={[30, 0, 0]} />
        </Physics>
        <OrbitControls />
      </Canvas>
    </section>
  );
}
