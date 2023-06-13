'use client'
import {
  MeshReflectorMaterial,
  PerspectiveCamera,
  Stage,
  useGLTF,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { CanvasLoader } from './CanvasLoader'

const AlienCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', (e) => {
      setIsMobile(e.matches)
    })

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', (e) => {
        setIsMobile(e.matches)
      })
    }
  }, [])

  return (
    <Canvas
      style={{
        position: `relative`,
        height: '20rem',
        width: '100%',
        maxWidth: '80rem',
      }}
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 1.5]}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 10, 50]}
        fov={75}
        far={1000}
      />
      <Plane />
      <Suspense fallback={<CanvasLoader />}>
        <Stage environment="city" intensity={0.6} shadows={false}>
          <Alien isMobile={isMobile} />
        </Stage>
      </Suspense>
    </Canvas>
  )
}

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial
        mirror={1}
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#05060d"
        metalness={0.5}
      />
    </mesh>
  )
}

const Alien = ({ isMobile }: { isMobile: boolean }) => {
  const group = useRef()

  const { scene /* animations */ } = useGLTF('Alien.gltf')
  // const { actions, mixer } = useAnimations(animations, scene)

  // useEffect(() => {
  //   if (actions) {
  //     actions.Dance?.play()
  //   }

  //   return () => {
  //     mixer.stopAllAction()
  //   }
  // }, [mixer, actions])

  // useFrame((_, delta) => {
  //   mixer?.update(delta)
  // })

  return (
    <mesh>
      <hemisphereLight intensity={0.45} groundColor="black" />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        ref={group}
        object={scene}
        scale={0.3}
        position={[0, 5, -10]}
      />
    </mesh>
  )
}

export { AlienCanvas }
