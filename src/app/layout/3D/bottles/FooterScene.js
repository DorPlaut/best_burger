'use client';
import { OrbitControls } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { SouceBottle } from './SouceBottle';
import { useSpring, animated } from '@react-spring/three';
import { angleToRadians } from '@/utils/angleToRadians';
import { useLayoutStore } from '@/store/layoutStore';

const FooterScene = () => {
  const { isMobile } = useLayoutStore((state) => state);
  const startValues = {
    elementOpacity: 0,
    meshPositionRight: [9, -0.5, -10],
    meshRotationRight: [0, 0, angleToRadians(-40)],
    meshPositionLeft: [-9, -0.5, -10],
    meshRotationLeft: [0, 0, angleToRadians(40)],
  };

  const endValues = {
    elementOpacity: 1,
    meshPositionRight: [isMobile ? 5 : 8, -0.5, -10],
    meshRotationRight: [0, 0, angleToRadians(-10)],
    meshPositionLeft: [isMobile ? -5 : -8, -0.5, -10],
    meshRotationLeft: [0, 0, angleToRadians(10)],
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

  // trigger the animation

  const canvasRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 } // adjust as needed
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

      <Bottle
        color={'yellow'}
        opacity={elementOpacity}
        position={meshPositionRight}
        rotation={meshRotationRight}
      />
      <Bottle
        color={'#c00000'}
        opacity={elementOpacity}
        position={meshPositionLeft}
        rotation={meshRotationLeft}
      />

      {/* <animated.mesh position={meshPositionRight} rotation={meshRotationRight}>
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
      </animated.mesh> */}

      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  );
};

export default FooterScene;

const Bottle = ({ color, opacity, position, rotation }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.02;
  });
  return (
    <animated.mesh position={position} rotation={rotation} ref={ref}>
      <mesh position={[0, -0.5, 0]}>
        <SouceBottle color={color} scale={0.7} opacity={opacity} />
      </mesh>
    </animated.mesh>
  );
};
