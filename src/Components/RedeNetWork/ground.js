import * as THREE from 'three';
import { useTexture, MeshReflectorMaterial } from '@react-three/drei';
import { usePlane } from '@react-three/cannon';
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import TEXTURE from './asphaltTexture.jpg'
export function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  
  const roadAshalt = useLoader(TextureLoader, TEXTURE);

  useEffect(() => {
    [roadAshalt].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });
  }, [roadAshalt]);

  return (
    <mesh receiveShadow position={[0, 0, 0]}>
      <planeGeometry args={[1000, 1000]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalScale={[1, 1]}
        roughnessMap={roadAshalt}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[2, 10]}
        mixBlur={30}
        mixStrength={20}
        mixContrast={1}
        resolution={200}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.2}
      />
    </mesh>
  );
}
