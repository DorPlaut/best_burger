'use client';
import { OrbitControls } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Burger } from './burger/Burger';
import { Soda } from './Soda';
import { angleToRadians } from '@/utils/angleToRadians';
import { Fries } from './Fries';
import { useSpring, animated } from '@react-spring/three';

const Scene = () => {
  const startValues = {
    elementOpacity: 0,
    sodaPosition: [4, -1, -3],
    friesPosition: [-4, -4.3, -3],
    burgerScale: 1,
    burgerPosition: [0, 0, 0],
    burgerRotation: [0, 0, 0],
  };

  const endValues = {
    elementOpacity: 1,
    sodaPosition: [2.5, -1, -3],
    friesPosition: [-2.5, -4.3, -3],
    burgerScale: 0.9,
    burgerPosition: [0, -0.8, -0.7],
    burgerRotation: [angleToRadians(-20), 0, 0],
  };

  const [
    {
      elementOpacity,
      sodaPosition,
      friesPosition,
      burgerScale,
      burgerPosition,
      burgerRotation,
    },
    api,
  ] = useSpring(() => ({
    elementOpacity: startValues.elementOpacity,
    sodaPosition: startValues.sodaPosition,
    friesPosition: startValues.friesPosition,
    burgerScale: startValues.burgerScale,
    burgerPosition: startValues.burgerPosition,
    burgerRotation: startValues.burgerRotation,
    config: { mass: 1, tension: 280, friction: 120 },
  }));

  const [canvasStyle, setCanvasStyle] = useState({
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '100%',
  });

  // trigger the animation after scrolling full window height
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight - 100) api.start(endValues);
    else api.start(startValues);

    if (window.scrollY >= window.innerHeight)
      setCanvasStyle({
        position: 'absolute',
        top: `100vh`,
      });
    else
      setCanvasStyle({
        position: 'fixed',
        bottom: '0',
        // width: '100%',
        // height: '100%',
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <Canvas className="scene" style={canvasStyle}>
      {/* lighs */}

      {/* <directionalLight position={[5, 3, 3]} /> */}
      <directionalLight position={[0, 0, -10]} intensity={0.5} />
      <directionalLight position={[10, 5, 10]} intensity={1} />
      <ambientLight intensity={0.5} />
      {/* burger */}
      <animated.mesh
        position={burgerPosition}
        rotation={burgerRotation}
        scale={burgerScale}
      >
        <Burger />
      </animated.mesh>
      {/* soda */}
      <animated.mesh position={sodaPosition} scale={3.5} rotation={[0, 0, 0]}>
        <Soda opacity={elementOpacity} />
      </animated.mesh>
      {/* fries */}
      <animated.mesh
        position={friesPosition}
        scale={3}
        rotation={[0, angleToRadians(30), 0]}
      >
        <Fries opacity={elementOpacity} />
      </animated.mesh>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Scene;
