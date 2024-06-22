import React, { useRef } from 'react';
import { Center, Html, useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import Image from 'next/image';
import { angleToRadians } from '@/utils/angleToRadians';
import { easing, geometry } from 'maath';
import { extend } from '@react-three/fiber';

extend(geometry);

export function Soda(props) {
  const { opacity, htmlOpacity } = props;
  const { nodes, materials } = useGLTF('/models/Soda.gltf');
  return (
    <Center {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
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
        </mesh>
        <mesh
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
        </mesh>
      </group>
      <Html
        position={[-0.14, 0.9, 0.35]}
        rotation={[0, angleToRadians(-20), 0]}
        transform
        occlude="blending"
        geometry={<roundedPlaneGeometry args={[0.25, 0.17, 0.05]} />}
      >
        <div className="model-sticker flex" style={{ opacity: htmlOpacity }}>
          <Image src="/images/logo.svg" alt="BBLogo" width={8} height={5} />
        </div>
      </Html>
    </Center>
  );
}

useGLTF.preload('/models/Soda.gltf');
