import React, { useEffect, useRef } from 'react'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/human/developer.glb')

  // Load FBX animations
  const idle = useFBX('/models/human/idle.fbx')
  const rally = useFBX('/models/human/rally.fbx')
  const fist = useFBX('/models/human/fist.fbx')
  const salute = useFBX('/models/human/salute.fbx')

  // Name the animations properly
  idle.animations[0].name = 'idle'
  rally.animations[0].name = 'rally'
  fist.animations[0].name = 'fist'
  salute.animations[0].name = 'salute'

  // Combine all animations into one array
  const allAnimations = [
    idle.animations[0],
    rally.animations[0],
    fist.animations[0],
    salute.animations[0],
  ]

  const { actions } = useAnimations(allAnimations, group)

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play()
    }

    return () => {
      if (actions && actions[animationName]) {
        actions[animationName].fadeOut(0.5)
      }
    }
  }, [actions, animationName])

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/models/human/developer.glb')
useFBX.preload('/models/human/idle.fbx')
useFBX.preload('/models/human/rally.fbx')
useFBX.preload('/models/human/fist.fbx')
useFBX.preload('/models/human/salute.fbx')

export default Developer
