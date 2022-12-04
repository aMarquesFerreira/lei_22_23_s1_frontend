import * as THREE from 'three';
import {
  createContext,
  useMemo,
  useRef,
  useState,
  useContext,
  useLayoutEffect,
  forwardRef,
  useEffect
} from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { MeshReflectorMaterial, QuadraticBezierLine, Text } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';
import TEXTURE from './asphaltTexture.jpg';
import { TextureLoader } from 'three';

const context = createContext();
/* eslint-disable react/display-name */
const Cube = forwardRef(
  (
    {
      children,
      attach = 'geometry',
      opacity = 1,
      weight = 32,
      height = 32,
      Breadth = 32,
      color = 'orange',
      map = '',
      ...props
    },
    ref
  ) => (
    <mesh ref={ref} {...props}>
      <boxGeometry attach={attach} args={[weight, height, Breadth]} />
      <MeshReflectorMaterial map={map} opacity={opacity} color={color} />
      {children}
    </mesh>
  )
);

export function Nodes({ children }) {
  const group = useRef();
  const [nodes, set] = useState([]);
  const lines = useMemo(() => {
    const lines = [];
    for (let node of nodes)
      node.connectedTo
        .map((ref) => [node.position, ref.current.position])
        .forEach(([start, end]) =>
          lines.push({
            start: start.clone().add({ x: 1, y: 0, z: 0 }),
            end: end.clone().add({ x: -1, y: 0, z: 0 })
          })
      );
    if (nodes.z > nodes.x) {
      lines.push({
        color: new color(node.color = "#ffff")
      });
    }
    return lines;
  }, [nodes]);
  useFrame((_, delta) =>
    group.current.children.forEach(
      (group) => (group.children[0].material.uniforms.dashOffset.value -= delta * 10)
    )
    
  );
  return (
    <context.Provider value={set}>
      <group ref={group}>
        {lines.map((line, index) => (
          <group key={index.toLocaleString()}>
            <QuadraticBezierLine {...line} color="#93ccea" dashed dashScale={2.0} gapSize={1} />
            <QuadraticBezierLine
              {...line}
              color="#93ccea"
              lineWidth={15}
              transparent
              opacity={0.5}
            />
          </group>
        ))}
      </group>
      {children}
      {lines.map(({ start, end }, index) => (
        <group key={index} position-z={1}>
          <Cube position={start} />
          <Cube position={end} />
        </group>
      ))}
    </context.Provider>
  );
}
/* eslint-disable react/display-name */
export const Warehouse = forwardRef(
  ({ color = 'black', name, connectedTo = [], position = [0, 0, 0], ...props }, ref) => {
    const set = useContext(context);
    const { size, camera } = useThree();
    const [pos, setPos] = useState(() => new THREE.Vector3(...position));
    const state = useMemo(() => ({ position: pos, connectedTo }), [pos, connectedTo]);
    const roadAshalt = useLoader(TextureLoader, TEXTURE);
    const material = useMemo(() => new THREE.MeshStandardMaterial({ roadAshalt }), [color]);
    useFrame(() => {
      /* setPos(new THREE.Vector3(...position)); */
      camera.lookAt(new THREE.Vector3(...pos));
    });

    useLayoutEffect(() => {
      set((nodes) => [...nodes, state]);
      return () => void set((nodes) => nodes.filter((n) => n !== state));
    }, [state, pos]);

    useEffect(() => {
      [roadAshalt].forEach((t) => {
        t.repeat.set(5, 5);
        t.offset.set(0, 0);
      });
    }, [roadAshalt]);

    return (
      <Cube
        material={material}
        ref={ref}
        opacity={0.2}
        sizes={50}
        weight={1}
        color={color}
        position={pos}
        {...props}>
        <Cube weight={20} height={20} Breadth={20} position={[0, 0, 0.1]} color={'#5f9ea0'}>
          <Text position={[0, 0, 25]} fontSize={20} color={'#ffff'}>
            {name}
          </Text>
        </Cube>
      </Cube>
    );
  }
);
