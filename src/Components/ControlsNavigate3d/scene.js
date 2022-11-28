import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import BoundMap  from './boundMapBox';

const Scene = () => {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

  useEffect(() => {
    function keydownHandler(e) {
      if (e.key == 'k') {
        if (thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
        setThirdPerson(!thirdPerson);
      }
    }

    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, [thirdPerson]);

  return (
    <Suspense fallback={null}>
      <Environment files={process.env.PUBLIC_URL + 'obj/textures/envmap.hdr'} background={'both'} />

      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      {!thirdPerson && <OrbitControls target={[100, -0.71, 0.03]} />}
      <BoundMap />
    </Suspense>
  );
}
export default Scene;