import { Vector3 } from 'three';
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {SpotLight } from '@react-three/drei';

function MovingSpot({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
      <SpotLight
          size={[10,20,20]}
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
}
export default MovingSpot;
