import { usePlane } from '@react-three/cannon';
import { MeshReflectorMaterial, PerspectiveCamera } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Light } from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export function Ground() {
 /*  const [ref] = usePlane(
    () => ({
      type: 'Static',
      rotation: [-Math.PI / 2, 0, 0]
    }),
    useRef(null)
  ); */

  const meshRef = useRef(null);

  useEffect(() => {
    if (!meshRef.current) return;

    var uvs = meshRef.current.geometry.attributes.uv.array;
    meshRef.current.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2));
  }, [meshRef.current]);

  return (
    <>
      <mesh position={[2.285, 0.015, 1.325]}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <pointLight position={[2, 1, 10]} intensity={1.5} />
        <meshLambertMaterial
          color={['#84fa84']}
        />
        <meshPhongMaterial attach="material" color={['#84fa84']} />
        <meshStandardMaterial attach="material" color={['#84fa84']} />
        <meshPhysicalMaterial attach="material" color={['#84fa84']} />
      </mesh>
    </>
  );
}
