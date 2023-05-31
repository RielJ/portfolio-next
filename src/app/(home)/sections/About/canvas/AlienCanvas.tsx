'use client'
import { OrbitControls, useGLTF } from '@react-three/drei'
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
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      frameloop="demand"
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 1, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Alien isMobile={isMobile} />
        {/* <axesHelper /> */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
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
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 10, 10]}
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
        scale={isMobile ? 0.7 : 1.2}
        position={isMobile ? [0, -3, -2.2] : [0, -1.25, -1.5]}
      />
    </mesh>
  )
}

export { AlienCanvas }
