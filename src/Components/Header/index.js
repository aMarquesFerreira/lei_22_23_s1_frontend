import * as THREE from "three";
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {Suspense} from "react";
import ContextHeader from './contextHeader';
import './style.css';

/* THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());
 */
export default function Header() {
    return (
      <>
        <Canvas style={{ width: '100%', height: '500px' }}>
          <Suspense fallback={null}>
            <ContextHeader />
          </Suspense>
        </Canvas>
        <div class="overlay">
          <h2 className="title-header">
            What is Lorem Ipsum?
            <br />
            Lorem Ipsum is simply dummy text
            <br />
            of the printing and typesetting industry
          </h2>
        </div>
      </>
    );
}