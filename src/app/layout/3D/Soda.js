import React, { useRef } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';

export function Soda(props) {
  const opacity = props.opacity;
  const { nodes, materials } = useGLTF('/models/Soda.gltf');
  return (
    <Center {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Soda_1.geometry}
          material={materials.White.transparent}
        >
          <animated.meshStandardMaterial
            color={'white'}
            opacity={opacity}
            transparent
          />
        </animated.mesh>
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Soda_2.geometry}
          material={materials.Red.transparent}
        >
          <animated.meshStandardMaterial
            color={'red'}
            opacity={opacity}
            transparent
          />
        </animated.mesh>
      </group>
    </Center>
  );
}

useGLTF.preload('/models/Soda.gltf');
