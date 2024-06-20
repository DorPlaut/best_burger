'use client';
import React, { useEffect, useRef } from 'react';
import { Center, useGLTF } from '@react-three/drei';
import { angleToRadians } from '@/utils/angleToRadians';
import { useSpring, animated } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { useLayoutStore } from '@/store/layoutStore';

export function Burger(props) {
  const { currentSection } = useLayoutStore((state) => state);
  const { nodes, materials } = useGLTF('/models/burger.glb');

  // Initial positions and rotations
  const initialPositions = {
    upperBunPos: [-0.069, 0.021, -0.8],
    tomatoesPos: [0, 0, -0.45],
    lettucePos: [-0.069, 0.021, 0.2],
    cheesePos: [-0.082, 0.025, -0.05],
    burgerPos: [-0.069, 0.021, 0.5],
    bottomBunPos: [-0.069, 0.021, 0.9],
  };

  const targetPositions = {
    upperBunPos: [-0.069, 0.021, 0.5],
    tomatoesPos: [0, 0, 0.65],
    lettucePos: [-0.069, 0.021, 1.05],
    cheesePos: [-0.082, 0.025, 0.54],
    burgerPos: [-0.069, 0.021, 0.75],
    bottomBunPos: [-0.069, 0.021, 0.9],
  };

  const initialRotations = {
    upperBunRot: [angleToRadians(-90), 0, 0],
    tomatoesRot: [0, 0, 0],
    lettuceRot: [angleToRadians(90), 0, -Math.PI],
    cheeseRot: [angleToRadians(-90), 0, 0],
    burgerRot: [angleToRadians(-90), 0, 0],
    bottomBunRot: [angleToRadians(-90), 0, 0],
  };

  const targetRotations = {
    upperBunRot: [angleToRadians(-90), angleToRadians(30), 0],
    tomatoesRot: [0, 0, angleToRadians(30)],
    lettuceRot: [angleToRadians(90), angleToRadians(-30), -Math.PI],
    cheeseRot: [angleToRadians(-90), angleToRadians(-30), 0],
    burgerRot: [angleToRadians(-90), angleToRadians(30), 0],
    bottomBunRot: [angleToRadians(-90), 0, 0],
  };

  // State to hold the animation values
  const [
    {
      upperBunPos,
      upperBunRot,
      tomatoesPos,
      tomatoesRot,
      lettucePos,
      lettuceRot,
      cheesePos,
      cheeseRot,
      burgerPos,
      burgerRot,
      bottomBunPos,
      bottomBunRot,
    },
    api,
  ] = useSpring(() => ({
    ...initialPositions,
    ...initialRotations,
    // config: { mass: 1, tension: 280, friction: 120 },
  }));

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;
    const maxScroll = screenHeight; // Scroll limit: 1 screen height

    // Ensure scroll progress is capped at 1
    const scrollProgress = Math.min(scrollPosition / maxScroll, 1);

    api.start({
      upperBunPos: initialPositions.upperBunPos.map(
        (pos, i) =>
          pos + (targetPositions.upperBunPos[i] - pos) * scrollProgress
      ),
      tomatoesPos: initialPositions.tomatoesPos.map(
        (pos, i) =>
          pos + (targetPositions.tomatoesPos[i] - pos) * scrollProgress
      ),
      lettucePos: initialPositions.lettucePos.map(
        (pos, i) => pos + (targetPositions.lettucePos[i] - pos) * scrollProgress
      ),
      cheesePos: initialPositions.cheesePos.map(
        (pos, i) => pos + (targetPositions.cheesePos[i] - pos) * scrollProgress
      ),
      burgerPos: initialPositions.burgerPos.map(
        (pos, i) => pos + (targetPositions.burgerPos[i] - pos) * scrollProgress
      ),
      bottomBunPos: initialPositions.bottomBunPos.map(
        (pos, i) =>
          pos + (targetPositions.bottomBunPos[i] - pos) * scrollProgress
      ),

      upperBunRot: initialRotations.upperBunRot.map(
        (rot, i) =>
          rot + (targetRotations.upperBunRot[i] - rot) * scrollProgress
      ),
      tomatoesRot: initialRotations.tomatoesRot.map(
        (rot, i) =>
          rot + (targetRotations.tomatoesRot[i] - rot) * scrollProgress
      ),
      lettuceRot: initialRotations.lettuceRot.map(
        (rot, i) => rot + (targetRotations.lettuceRot[i] - rot) * scrollProgress
      ),
      cheeseRot: initialRotations.cheeseRot.map(
        (rot, i) => rot + (targetRotations.cheeseRot[i] - rot) * scrollProgress
      ),
      burgerRot: initialRotations.burgerRot.map(
        (rot, i) => rot + (targetRotations.burgerRot[i] - rot) * scrollProgress
      ),
      bottomBunRot: initialRotations.bottomBunRot.map(
        (rot, i) =>
          rot + (targetRotations.bottomBunRot[i] - rot) * scrollProgress
      ),
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

  // add spining animation to the whole element
  const burgerRef = useRef();
  useFrame(() => {
    if (currentSection == 1) burgerRef.current.rotation.z += 0.003;
  });

  return (
    <Center {...props} dispose={null}>
      <animated.group
        ref={burgerRef}
        position={[0.139, 1.047, 0]}
        rotation={[angleToRadians(100), 0, 0]}
        scale={2.5}
      >
        <animated.group
          position={upperBunPos}
          rotation={upperBunRot}
          scale={[0.472, 0.501, 0.478]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.bred}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.sumsum}
          />
        </animated.group>
        <animated.group position={tomatoesPos} rotation={tomatoesRot}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tomato004.geometry}
            material={materials.tomato}
            position={[0.167, 0.398, -0.054]}
            rotation={[-1.525, -0.572, -0.02]}
            scale={[0.291, 0.054, 0.291]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tomato005.geometry}
            material={materials.tomato}
            position={[-0.412, 0.132, -0.083]}
            rotation={[-1.523, 0.033, 0.107]}
            scale={[0.266, 0.05, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tomato006.geometry}
            material={materials.tomato}
            position={[-0.358, -0.31, -0.073]}
            rotation={[-1.647, 0.013, 0.067]}
            scale={[0.266, 0.05, 0.266]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tomato007.geometry}
            material={materials.tomato}
            position={[0.259, -0.269, -0.075]}
            rotation={[-1.69, 0, -0.043]}
            scale={[0.266, 0.05, 0.266]}
          />
        </animated.group>
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.green_002.geometry}
          material={materials.green}
          position={lettucePos}
          rotation={lettuceRot}
          scale={0.714}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.chees}
          position={cheesePos}
          rotation={cheeseRot}
          scale={0.566}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.meat001.geometry}
          material={materials.meat}
          position={burgerPos}
          rotation={burgerRot}
          scale={[0.521, 0.139, 0.521]}
        />
        <animated.mesh
          castShadow
          receiveShadow
          geometry={nodes.bred_down001.geometry}
          material={materials.bred}
          position={bottomBunPos}
          rotation={bottomBunRot}
          scale={[0.627, 0.11, 0.591]}
        />
      </animated.group>
    </Center>
  );
}

useGLTF.preload('/models/burger.glb');
