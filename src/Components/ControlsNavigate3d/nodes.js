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
import { useFrame, useThree } from '@react-three/fiber';
import { QuadraticBezierLine, Text } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';

const context = createContext();
/* eslint-disable react/display-name */
const Circle = forwardRef(
  ({ children, opacity = 1, radius = 2, segments = 32, color = '#ff1050', ...props }, ref) => (
    <mesh ref={ref} {...props}>
      <circleGeometry args={[radius, segments]} />
      <meshBasicMaterial transparent={opacity < 1} opacity={opacity} color={color} />
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
            start: start.clone().add({ x: 0.35, y: 0, z: 0 }),
            end: end.clone().add({ x: -0.35, y: 0, z: 0 })
          })
        );
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
          <group key={index}>
            <QuadraticBezierLine
              key={index}
              {...line}
              color="#000000"
              dashed
              dashScale={2.0}
              gapSize={1}
            />
            <QuadraticBezierLine
              key={index}
              {...line}
              color="#000000"
              lineWidth={5}
              transparent
              opacity={0.5}
            />
          </group>
        ))}
      </group>
      {children}
      {lines.map(({ start, end }, index) => (
        <group key={index} position-z={1}>
          <Circle position={start} />
          <Circle position={end} />
        </group>
      ))}
    </context.Provider>
  );
}
/* eslint-disable react/display-name */
export const Node = forwardRef(
  ({ color = 'black', name, connectedTo = [], position = [0, 0, 0], ...props }, ref) => {
    const set = useContext(context);
    const { size, camera } = useThree();
    const [pos, setPos] = useState(() => new THREE.Vector3(...position));
    const state = useMemo(() => ({ position: pos, connectedTo }), [pos, connectedTo]);
    // Register this node on mount, unregister on unmount
    useLayoutEffect(() => {
      set((nodes) => [...nodes, state]);
      return () => void set((nodes) => nodes.filter((n) => n !== state));
    }, [state, pos]);


    return (
      <Circle ref={ref} opacity={0.2} sizes={50} radius={1} color={color} position={pos} {...props}>
        <Circle radius={10} position={[0, 0, 0.1]} color={'#5f9ea0'}>
          <Text position={[0, 0, 1]} fontSize={20} color={'#000000'}>
            {name}
          </Text>
        </Circle>
      </Circle>
    );
  }
);
