import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.name === 'Database') {
      scene.scene.traverse((child) => {
        if (
          child.isMesh &&
          (child.name === 'ArrowBody_Material001_0' || child.name === 'ArrowHead_Material001_0')
        ) {
          child.material = new THREE.MeshStandardMaterial({ color: 'orange', emissive: new THREE.Color('orange'), 
            emissiveIntensity: 0.5,           
            metalness: 0.3,                   
            roughness: 0.4 })
        }
      })
    }

    if (model.name === 'Interactive Developer') {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' })
        }
      })
    }
  }, [model.name, scene])

  // Only override position for AWS
  const finalPosition = model.name === 'Database' ? [0, -1.5, 0] : [0, 0, 0]

  return (
    <Canvas>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={finalPosition}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
