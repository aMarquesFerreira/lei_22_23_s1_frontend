import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import { Suspense, useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { SVGLoader } from 'three-stdlib';
import { MapControls } from '@react-three/drei';
import MapCell from './mapCell';

export default function MapSvg() {

  const { paths } = useLoader(SVGLoader, './pt.svg');
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    useLayoutEffect(() => {
        if (paths.current) {
            mapRef.current.update();
            return;
        }
    });

  const shapes = useMemo(
    () =>
      paths.flatMap((p) =>
        p
          .toShapes(true)
          .map((shape) => ({ shape, color: p.color, fillOpacity: p.userData.style.fillOpacity }))
      ),
    [paths]
  );

  const ref = useRef();
  useLayoutEffect(() => {
    const sphere = new THREE.Box3()
      .setFromObject(ref.current)
      .getBoundingSphere(new THREE.Sphere());
    ref.current.position.set(-sphere.center.x, -sphere.center.y, 0);
  }, []);

  return (
    <group ref={ref}>
      {shapes.map((props, index) => (
        <MapCell key={props.shape.uuid} {...props} />
      ))}
    </group>
  );
}
