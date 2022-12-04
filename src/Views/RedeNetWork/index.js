import { Canvas } from '@react-three/fiber';
import {
  Sky,
  PointerLockControls,
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera
} from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Suspense, useState, createRef } from 'react';
import './styles.css';
import { Ground } from '../../Components/RedeNetWork/ground';
import { Nodes, Warehouse } from '../../Components/RedeNetWork/warehouse';

export default function RedeNetWork() {
  const [[a, b, c]] = useState(() => [...Array(5)].map(createRef));
  return (
    <section className="environment">
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false }}>
        <Suspense fallback={null}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.3} />
          <pointLight
            shadow-camera-left={-20}
            castShadow
            intensity={0.8}
            position={[100, 100, 100]}
          />
          <Physics gravity={[0, -30, 0]}>
            <Ground position={[0, 0, 0]} />
            <Nodes>
              <Warehouse
                ref={a}
                name="Porto"
                color="#204090"
                position={[100, 8, 250]}
                connectedTo={[b]}
              />
              <Warehouse
                ref={b}
                name="Coimbra"
                color="#904020"
                position={[200, 8, 100]}
                connectedTo={[a, c]}
              />
              <Warehouse
                ref={c}
                name="Aveiro"
                color="#904020"
                position={[-100, 15, 0]}
                connectedTo={[a, c, b]}
              />
              <Warehouse
                ref={c}
                name="Espinho"
                color="#904020"
                position={[20, 80, 2]}
                connectedTo={[a]}
              />
              <Warehouse
                ref={c}
                name="Lisboa"
                color="#904020"
                position={[100, 50, 6]}
                connectedTo={[a]}
              />
            </Nodes>
       
          </Physics>
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={false} minPolarAngle={0} makeDefault />
        <PerspectiveCamera makeDefault position={[30, 0, 120]} fov={35} />
      </Canvas>
    </section>
  );
}
