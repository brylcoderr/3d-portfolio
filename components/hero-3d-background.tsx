"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Text3D, Environment, PerspectiveCamera, Stars, Trail } from '@react-three/drei'
import { useState, useRef, useMemo, Suspense } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Interactive 3D Code Snippet
function FloatingCodeSnippet({ position, code, delay = 0 }: { position: [number, number, number], code: string, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + delay
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3
    }
  })

  return (
    <Float
      position={position}
      rotation-y={Math.PI / 6}
      floatIntensity={3}
      speed={2}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial
          transparent
          opacity={hovered ? 0.9 : 0.6}
          color={hovered ? "#64748b" : "#334155"}
          emissive="#1e293b"
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.8, 0.8]} />
        <meshBasicMaterial
          transparent
          opacity={0.8}
          color="#0f172a"
        />
      </mesh>
      {hovered && (
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.08}
          height={0.01}
          position={[-0.8, 0.2, 0.02]}
        >
          {code}
          <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.2} />
        </Text3D>
      )}
    </Float>
  )
}

// Geometric Shapes with Physics
function FloatingGeometry({ position, shape, color, scale = 1 }: { 
  position: [number, number, number], 
  shape: 'box' | 'sphere' | 'octahedron' | 'torus',
  color: string,
  scale?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
    }
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box': return <boxGeometry args={[1, 1, 1]} />
      case 'sphere': return <sphereGeometry args={[0.6, 16, 16]} />
      case 'octahedron': return <octahedronGeometry args={[0.7]} />
      case 'torus': return <torusGeometry args={[0.5, 0.2, 8, 16]} />
      default: return <boxGeometry args={[1, 1, 1]} />
    }
  }, [shape])

  return (
    <Float position={position} floatIntensity={2} speed={1}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? scale * 1.2 : scale}
      >
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.4 : 0.1}
          transparent
          opacity={hovered ? 0.9 : 0.7}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

// Interactive Particle Field
function InteractiveParticleField() {
  const points = useMemo(() => {
    const temp = []
    for (let i = 0; i < 200; i++) {
      temp.push([
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 30
      ])
    }
    return temp
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)
  const { mouse, viewport } = useThree()

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      // React to mouse movement
      pointsRef.current.rotation.x = (mouse.y * viewport.height) / 50
      pointsRef.current.rotation.z = (mouse.x * viewport.width) / 50
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#64748b"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Neural Network Connections
function NeuralNetwork() {
  const linesRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        if (line instanceof THREE.Line) {
          const material = line.material as THREE.LineBasicMaterial
          material.opacity = 0.2 + Math.sin(state.clock.elapsedTime + i) * 0.2
        }
      })
    }
  })

  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      )
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      )
      lines.push({ start, end })
    }
    return lines
  }, [])

  return (
    <group ref={linesRef}>
      {connections.map((connection, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                connection.start.x, connection.start.y, connection.start.z,
                connection.end.x, connection.end.y, connection.end.z
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#22d3ee" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  )
}

// Main 3D Scene
function Hero3DScene() {
  const codeSnippets = [
    "const hero = () => {",
    "  return (",
    "    <div>Welcome</div>",
    "  )",
    "}",
    "export default hero"
  ]

  const geometries = [
    { shape: 'box' as const, color: '#6366f1', position: [-8, 2, -5] as [number, number, number] },
    { shape: 'sphere' as const, color: '#8b5cf6', position: [6, -1, -3] as [number, number, number] },
    { shape: 'octahedron' as const, color: '#ec4899', position: [-4, -3, -8] as [number, number, number] },
    { shape: 'torus' as const, color: '#10b981', position: [8, 3, -6] as [number, number, number] },
    { shape: 'box' as const, color: '#f59e0b', position: [2, -4, -4] as [number, number, number] },
    { shape: 'sphere' as const, color: '#ef4444', position: [-6, 4, -7] as [number, number, number] }
  ]

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
      <spotLight position={[0, 20, 0]} intensity={0.5} color="#8b5cf6" />
      
      {/* Background Elements */}
      <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} fade />
      <InteractiveParticleField />
      <NeuralNetwork />
      
      {/* Code Snippets */}
      {codeSnippets.map((code, i) => (
        <FloatingCodeSnippet 
          key={i} 
          code={code} 
          position={[-10 + i * 2, 2 - i * 0.5, -5 - i]} 
          delay={i * 0.5} 
        />
      ))}
      
      {/* Geometric Shapes */}
      {geometries.map((geo, i) => (
        <FloatingGeometry
          key={i}
          position={geo.position}
          shape={geo.shape}
          color={geo.color}
          scale={0.8 + Math.random() * 0.4}
        />
      ))}
    </>
  )
}

// Loading component
function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <motion.div
        className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

// Main Hero 3D Background Component
export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Hero3DScene />
          <Environment preset="night" background={false} />
        </Suspense>
      </Canvas>
      
      {/* Overlay gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-100/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-base-100/10 via-transparent to-base-100/10 pointer-events-none" />
    </div>
  )
}