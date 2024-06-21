'use client';
import { OrbitControls } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { SouceBottle } from './SouceBottle';
import { useSpring, animated } from '@react-spring/three';
import { angleToRadians } from '@/utils/angleToRadians';

const FooterScene = () => {
  const startValues = {
    elementOpacity: 0,
    meshPositionRight: [7.5, -0.5, -5],
    meshRotationRight: [0, angleToRadians(10), 0],
    meshPositionLeft: [-7.5, -0.5, -5],
    meshRotationLeft: [0, angleToRadians(-10), 0],
  };

  const endValues = {
    elementOpacity: 1,
    meshPositionRight: [5, -0.5, -5],
    meshRotationRight: [0, 0, 0],
    meshPositionLeft: [-5, -0.5, -5],
    meshRotationLeft: [0, 0, 0],
  };

  const [
    {
      elementOpacity,
      meshPositionRight,
      meshRotationRight,
      meshPositionLeft,
      meshRotationLeft,
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

  // trigger the animation after scrolling full window height

  // const canvasRef = useRef();
  // const handleScroll = () => {
  //   if (canvasRef.current) {
  //     console.log(canvasRef);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  // useEffect(() => {
  //   handleScroll();
  // }, []);

  const canvasRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // adjust as needed
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Trigger your animations here when canvas is visible
      api.start(endValues);
    } else {
      // Optionally handle case when canvas is not visible
      api.start(startValues);
    }
  }, [isVisible, api, startValues, endValues]);

  //
  //
  return (
    <Canvas
      ref={canvasRef}
      className="scene"
      camera={{ fov: 40, position: [0, 0, 10], near: 0.1, far: 1000 }}
    >
      {/* lighs */}
      {/* <directionalLight position={[5, 3, 3]} /> */}
      <directionalLight position={[0, 0, -10]} intensity={0.5} />
      <directionalLight position={[10, 5, 10]} intensity={1} />
      <ambientLight intensity={1} />
      {/* bottles */}
      <animated.mesh position={meshPositionRight} rotation={meshRotationRight}>
        <mesh position={[1, 0, -2]}>
          <SouceBottle color={'#c00000'} scale={0.7} opacity={elementOpacity} />
        </mesh>
        <mesh position={[0, 0, -5]}>
          <SouceBottle color={'yellow'} scale={0.7} opacity={elementOpacity} />
        </mesh>
      </animated.mesh>
      <animated.mesh position={meshPositionLeft} rotation={meshRotationLeft}>
        <mesh position={[-1, 0, -2]}>
          <SouceBottle color={'#c00000'} scale={0.7} opacity={elementOpacity} />
        </mesh>
        <mesh position={[0, 0, -5]}>
          <SouceBottle color={'yellow'} scale={0.7} opacity={elementOpacity} />
        </mesh>
      </animated.mesh>
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  );
};

export default FooterScene;
