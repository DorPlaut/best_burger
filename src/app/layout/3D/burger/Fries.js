'use client';
import React, { useEffect, useRef } from 'react';
import { Environment, Html, useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import Image from 'next/image';
import { easing, geometry } from 'maath';
import { extend } from '@react-three/fiber';

extend(geometry);

export function Fries(props) {
  const { opacity, htmlOpacity } = props;
  const { nodes, materials } = useGLTF('/models/French-fries.gltf');

  // create custom matiriel from original material
  const yellowMaterialRef = useRef(materials.lambert3SG.clone());
  const redMaterialRef = useRef(materials.lambert2SG.clone());

  // handle html logo opacity
  const htmlRef = useRef();

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

        <Html
          position={[0.05, 0.6, 0.26]}
          transform
          occlude="blending"
          geometry={<roundedPlaneGeometry args={[0.5, 0.3, 0.1]} />}
        >
          <div className="model-sticker flex" style={{ opacity: htmlOpacity }}>
            <Image src="/images/logo.svg" alt="BBLogo" width={15} height={10} />
          </div>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/French-fries.gltf');
