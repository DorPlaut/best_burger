import React, { useRef } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';

export function SouceBottle(props) {
  const { color, opacity } = props;
  const { nodes, materials } = useGLTF('/models/souce-bottle.glb');

  return (
    <Center {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['17389_Ketchup_bottle_squeezable_v1'].geometry}
        material={nodes['17389_Ketchup_bottle_squeezable_v1'].material}
      >
        <animated.meshStandardMaterial
          color={color}
          transparent
          opacity={opacity}
        />
      </mesh>
    </Center>
  );
}

useGLTF.preload('/models/souce-bottle.glb');
