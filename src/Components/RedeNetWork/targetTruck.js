import * as THREE from 'three';
import { useRef, useState } from 'react'
function TargetTruckScene() {
  const [truck, setTruck] = useState<Mesh>(null!)
    const instancesRef = useRef < InstancedMesh > (null!)
    
  //moving dir target
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    sphere.position.x = Math.sin(t) * 3 + Math.cos(t * 2)
    sphere.position.y = Math.cos(t) * 3
  })

  const truckPositions = useTruck(sphere, { length: 5, decay: 5, interval: 6 })
  const n = 1000

  const [planeScne] = useState(() => new Object3D())
  function updateInstances() {
    if (!instancesRef.current) return

  for (let i = 0; i < n; i += 1) {
      const x = truckPositions.current?.slice(i * 3, i * 3 + 3)
   
      planeScne.position.set(...x)

      planeScne.scale.setScalar((i * 10) / n)
      planeScne.updateMatrixWorld()

      instancesRef.current.setMatrixAt(i, o.matrixWorld)
    }

    instancesRef.current.count = n
    instancesRef.current.instanceMatrix.needsUpdate = true
  }

  useFrame(updateInstances)

  return (
    <>
      <Sphere ref={setSphere} args={[0.1, 32, 32]} position-x={0} position-y={3}>
      
      </Sphere>

      <instancedMesh ref={instancesRef} args={[null!, null!, n]}>
      
      </instancedMesh>
    </>
  )
}

