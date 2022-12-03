import { useRef, useState } from 'react';
import { useBox } from '@react-three/cannon';

export function Warehouse(props) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[15, 15, 15]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
