import { useEffect, useLayoutEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Mesh } from 'three';

export function Truck() {
  const sceneRef = useRef();
  const materials = useLoader(MTLLoader, 'obj/models/truck_daf.mtl');
  const obj = useLoader(OBJLoader, 'obj/models/truck_daf.obj', (loader) => {
  
    loader.setMaterials(materials);
  });

  useLayoutEffect(() => {
    obj.scale.set(4, 4, 4);
    obj.position.set(10, 20, 0);
    obj.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [obj]);

/*  useFrame((state, delta) => {
     let t = state.clock.getElapsedTime();
     sceneRef.current.rotation.y += t * 2;
  }); */

  return <primitive ref={sceneRef} object={obj} />;
}
