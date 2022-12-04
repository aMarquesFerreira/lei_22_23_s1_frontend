import React, { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshReflectorMaterial,useDepthBuffer } from '@react-three/drei';
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three';
import MovingSpot from '../ControlsNavigate3d/MovingSpot';

export function Ground() {

  const [roughness, normal] = useLoader(TextureLoader, [
   'obj/textures/terrain-roughness.jpg',
  'obj/textures/terrain-normal.jpg'
  ]);
 const depthBuffer = useDepthBuffer({ frames: 1 });
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });

    normal.encoding = LinearEncoding;
  }, [normal, roughness]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.128;
    roughness.offset.set(0, t % 1);
    normal.offset.set(0, t % 1);
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[2000, 2000]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[2, 2]}
        roughnessMap={roughness}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
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
