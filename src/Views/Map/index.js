import "./styles.css"
import { Canvas } from "@react-three/fiber";
import Scene  from "./../../Components/ControlsNavigate3d/scene";
import { Physics } from "@react-three/cannon";


export default function Map() {
    return (
        <>
         <Canvas>
      <Physics
        broadphase="SAP"
        gravity={[0, -2.6, 0]}
      >
        <Scene />
      </Physics>
    </Canvas>
        </>
    )
}