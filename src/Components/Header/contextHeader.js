import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { DDSLoader } from 'three-stdlib';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Suspense, useRef } from 'react';
import { Truck } from './truck';
import { Ground } from './ground';
export default function ContextHeader() {
  return (
    <>
      <OrbitControls target={[0, 1, 0]} />
      <PerspectiveCamera makeDefault fov={50} position={[4, 40, 50]} />
      <color args={[0, 0, 0]} attach="background" />
      <pointLight color="white" intensity={1} position={[3, 2, 5]} />

      <CubeCamera resolution={400} frames={Infinity}>
        {(texture) => (
          <>
            <Environment preset="warehouse" background />
            <Truck />
          </>
        )}
      </CubeCamera>
      <Ground />
    </>
  );
}
