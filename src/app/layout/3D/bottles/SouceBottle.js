import React, { useRef } from 'react';
import { Center, Html, useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import Image from 'next/image';
import { easing, geometry } from 'maath';
import { extend } from '@react-three/fiber';
import { angleToRadians } from '@/utils/angleToRadians';

extend(geometry);

export function SouceBottle(props) {
  const { color, opacity } = props;
  const { nodes, materials } = useGLTF('/models/souce-bottle.glb');

  const ref = useRef();
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  return (
    <Center {...props} dispose={null} ref={ref}>
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
      <Html
        position={[0, 7, 1.9125]}
        rotation={[0, 0, 0]}
        transform
        occlude="blending"
        geometry={<roundedPlaneGeometry args={[1.2, 1, 0.1]} />}
      >
        <div className="model-sticker flex">
          <Image src="/images/logo.svg" alt="BBLogo" width={38} height={26} />
        </div>
      </Html>
    </Center>
  );
}

useGLTF.preload('/models/souce-bottle.glb');
