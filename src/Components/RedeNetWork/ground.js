import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { usePlane } from '@react-three/cannon';

export function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh receiveShadow position={[0, 0, 0]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}
