"use client"

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Text3D, Environment, OrbitControls, Html } from '@react-three/drei'
import { useState, useRef, useMemo, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

interface TechData {
  name: string
  category: string
  color: string
  description: string
  proficiency: number
  icon: string
  experience: string
}

const techData: TechData[] = [
  { name: "React", category: "Frontend", color: "#61DAFB", description: "Modern UI library for building interactive user interfaces", proficiency: 95, icon: "⚛️", experience: "4+ years" },
  { name: "TypeScript", category: "Language", color: "#3178C6", description: "Type-safe JavaScript for scalable applications", proficiency: 90, icon: "📘", experience: "3+ years" },
  { name: "Next.js", category: "Framework", color: "#000000", description: "Full-stack React framework with SSR/SSG capabilities", proficiency: 92, icon: "▲", experience: "3+ years" },
  { name: "Node.js", category: "Backend", color: "#339933", description: "JavaScript runtime for scalable backend applications", proficiency: 88, icon: "💚", experience: "4+ years" },
  { name: "Python", category: "Language", color: "#3776AB", description: "Versatile programming language for AI/ML and backend", proficiency: 85, icon: "🐍", experience: "5+ years" },
  { name: "AWS", category: "Cloud", color: "#FF9900", description: "Comprehensive cloud platform for scalable infrastructure", proficiency: 80, icon: "☁️", experience: "2+ years" },
  { name: "Docker", category: "DevOps", color: "#2496ED", description: "Containerization platform for consistent deployments", proficiency: 82, icon: "🐳", experience: "2+ years" },
  { name: "PostgreSQL", category: "Database", color: "#336791", description: "Powerful relational database for complex applications", proficiency: 87, icon: "🗄️", experience: "3+ years" },
  { name: "GraphQL", category: "API", color: "#E10098", description: "Query language for efficient data fetching", proficiency: 78, icon: "🔗", experience: "2+ years" },
  { name: "MongoDB", category: "Database", color: "#47A248", description: "NoSQL database for flexible document storage", proficiency: 83, icon: "🍃", experience: "3+ years" },
  { name: "Tailwind", category: "CSS", color: "#06B6D4", description: "Utility-first CSS framework for rapid UI development", proficiency: 94, icon: "🎨", experience: "3+ years" },
  { name: "TensorFlow", category: "AI/ML", color: "#FF6F00", description: "Machine learning framework for AI applications", proficiency: 75, icon: "🧠", experience: "1+ years" }
]

// 3D Tech Sphere
function TechSphere({ tech, position, isSelected, onSelect }: { 
  tech: TechData, 
  position: [number, number, number], 
  isSelected: boolean,
  onSelect: () => void 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      if (!isSelected) {
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.3
      }
    }
  })

  const scale = isSelected ? 1.8 : hovered ? 1.3 : 1

  return (
    <Float 
      position={position} 
      floatIntensity={isSelected ? 0 : 2} 
      speed={isSelected ? 0 : 1.5}
      rotationIntensity={isSelected ? 0 : 0.5}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onSelect}
        scale={scale}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={tech.color}
          emissive={tech.color}
          emissiveIntensity={hovered || isSelected ? 0.4 : 0.1}
          transparent
          opacity={hovered || isSelected ? 0.9 : 0.7}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      
      {/* Tech Icon/Symbol in 3D */}
      <Html center distanceFactor={5}>
        <div className={`text-4xl transition-all duration-300 ${isSelected || hovered ? 'scale-150' : ''}`}>
          {tech.icon}
        </div>
      </Html>
      
      {/* Orbital Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.3, 32]} />
        <meshBasicMaterial
          color={tech.color}
          transparent
          opacity={hovered || isSelected ? 0.6 : 0.2}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Tech Name Label */}
      {(hovered || isSelected) && !isSelected && (
        <Html center distanceFactor={8}>
          <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
            {tech.name}
          </div>
        </Html>
      )}
    </Float>
  )
}

// Connecting Lines Between Spheres
function ConnectionLines({ positions }: { positions: [number, number, number][] }) {
  const linesRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        if (line instanceof THREE.Line) {
          const material = line.material as THREE.LineBasicMaterial
          material.opacity = 0.1 + Math.sin(state.clock.elapsedTime + i * 0.5) * 0.1
        }
      })
    }
  })

  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (Math.random() > 0.7) { // Only connect some spheres
          lines.push({
            start: new THREE.Vector3(...positions[i]),
            end: new THREE.Vector3(...positions[j])
          })
        }
      }
    }
    return lines
  }, [positions])

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
          <lineBasicMaterial color="#64748b" transparent opacity={0.2} />
        </line>
      ))}
    </group>
  )
}

// Main 3D Scene
function TechScene3D({ selectedTech, onTechSelect }: { 
  selectedTech: TechData | null, 
  onTechSelect: (tech: TechData) => void 
}) {
  // Arrange tech spheres in a 3D formation
  const techPositions = useMemo(() => {
    const positions: [number, number, number][] = []
    const radius = 6
    
    techData.forEach((_, i) => {
      const angle = (i / techData.length) * Math.PI * 2
      const height = Math.sin(i) * 2
      positions.push([
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ])
    })
    
    return positions
  }, [])

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ec4899" />
      <spotLight position={[0, 15, 0]} intensity={0.6} color="#8b5cf6" />
      
      {/* Connection Lines */}
      <ConnectionLines positions={techPositions} />
      
      {/* Tech Spheres */}
      {techData.map((tech, i) => (
        <TechSphere
          key={tech.name}
          tech={tech}
          position={techPositions[i]}
          isSelected={selectedTech?.name === tech.name}
          onSelect={() => onTechSelect(tech)}
        />
      ))}
    </>
  )
}

// Tech Details Panel
function TechDetailsPanel({ tech, onClose }: { tech: TechData, onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:w-96 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 z-50"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{tech.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white">{tech.name}</h3>
            <p className="text-sm text-gray-400">{tech.category}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {tech.description}
      </p>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-400">Proficiency</span>
            <span className="text-white font-medium">{tech.proficiency}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${tech.proficiency}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: tech.color }}
            />
          </div>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-400 text-sm">Experience</span>
          <span className="text-white font-medium text-sm">{tech.experience}</span>
        </div>
      </div>
    </motion.div>
  )
}

// Main Tech Showcase Component
export default function TechShowcase3D() {
  const [selectedTech, setSelectedTech] = useState<TechData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleTechSelect = (tech: TechData) => {
    setSelectedTech(selectedTech?.name === tech.name ? null : tech)
  }

  return (
    <div className="relative h-screen w-full">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        onCreated={() => setIsLoading(false)}
      >
        <Suspense fallback={null}>
          <TechScene3D 
            selectedTech={selectedTech} 
            onTechSelect={handleTechSelect} 
          />
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 2.5}
          />
          <Environment preset="night" background={false} />
        </Suspense>
      </Canvas>
      
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40"
          >
            <motion.div
              className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Instructions */}
      {!selectedTech && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-8 left-8 right-8 text-center z-30"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Interactive Tech Stack
          </h2>
          <p className="text-gray-400">
            Click on any technology sphere to learn more • Drag to rotate the view
          </p>
        </motion.div>
      )}
      
      {/* Tech Details Panel */}
      <AnimatePresence>
        {selectedTech && (
          <TechDetailsPanel 
            tech={selectedTech} 
            onClose={() => setSelectedTech(null)} 
          />
        )}
      </AnimatePresence>
      
      {/* Category Legend */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute top-8 left-8 z-30 hidden lg:block"
        >
          <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-3">Categories</h3>
            <div className="space-y-2 text-sm">
              {Array.from(new Set(techData.map(t => t.category))).map(category => (
                <div key={category} className="text-gray-400">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  )
}