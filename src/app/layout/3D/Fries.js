import React, { useEffect, useRef } from 'react';
import { Environment, useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';

export function Fries(props) {
  const opacity = props.opacity;
  const { nodes, materials } = useGLTF('/models/French-fries.gltf');

  const yellowMaterialRef = useRef(materials.lambert3SG.clone());
  const redMaterialRef = useRef(materials.lambert2SG.clone());

  // Modify the cloned materials as needed

  // Update materials on opacity change
  useEffect(() => {
    yellowMaterialRef.current.opacity = opacity;
    yellowMaterialRef.current.transparent = true;

    redMaterialRef.current.opacity = opacity;
    redMaterialRef.current.transparent = true;
  }, [opacity]);
  //
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh'].geometry}>
        <animated.meshStandardMaterial
          attach="material"
          args={[{ ...yellowMaterialRef.current }]}
          color="#ffcd43"
          opacity={opacity}
          transparent
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes['Node-Mesh_1'].geometry}>
        <animated.meshStandardMaterial
          attach="material"
          args={[{ ...redMaterialRef.current }]}
          opacity={opacity}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/French-fries.gltf');
