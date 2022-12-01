import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
  useDepthBuffer
} from '@react-three/drei';
import { Suspense, useEffect, useState, createRef } from 'react';
import MapSvg from './mapSvg';
import { MapControls } from 'three-stdlib';
import { Canvas } from '@react-three/fiber';
import { Nodes, Node } from './nodes';

const Scene = () => {
   const [[a, b, c]] = useState(() => [...Array(5)].map(createRef));
  return (
    <>
      <Suspense fallback={null}>
        <MapSvg />
        <Nodes>
          <Node ref={a} name="Porto" color="#204090" position={[-80, -20, 0]} connectedTo={[b]} />
          <Node ref={b} name="Coimbra" color="#904020" position={[2, -3, 0]} connectedTo={[a]} />
          <Node ref={b} name="Viana" color="#904020" position={[-100, -40, 0]} connectedTo={[a]} />
        </Nodes>
      </Suspense>
    </>
  );
};
export default Scene;
