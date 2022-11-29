import * as THREE from "three";
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {Environment, OrbitControls} from "@react-three/drei";
import {DDSLoader} from "three-stdlib";
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'
import {Suspense, useRef} from "react";


THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
    const sceneRef = useRef();
    const materials = useLoader(MTLLoader, "obj/models/truck_daf.mtl");
    const obj = useLoader(OBJLoader, "obj/models/truck_daf.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    // useFrame(() => (sceneRef.current.rotation.y += 0.01));

    console.log(obj);
    return <primitive ref={sceneRef} object={obj} scale={0.2}/>;
};

export default function Header() {
    return (
        <div className="App">
            <Canvas style={{width: "100%", height: "500px"}} camera={{position:[-5,2,10], fov:60}}>
                <pointLight color="white" intensity={1} position={[10, 10, 10]}/>

                <Suspense fallback={null}>
                    <Scene/>
                    <OrbitControls/>
                    <Environment preset="city" background/>
                </Suspense>
            </Canvas>
        </div>
    );
}