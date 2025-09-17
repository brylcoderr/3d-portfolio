"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useState, useEffect, useRef, Suspense, useMemo } from "react"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Text3D, Center, Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { 
  Code, Database, Cloud, Palette, Zap, Layers, 
  Cpu, Smartphone, Globe, Server, Lock, Rocket,
  Sparkles, Star, Target, Lightbulb, Settings,
  Monitor, Wifi, Shield, Binary, Hash
} from "lucide-react"

interface TechIcon {
  id: string
  icon: any
  x: number
  y: number
  z?: number
  rotation: number
  rotationSpeed?: number
  scale: number
  color: string
  category: string
  name: string
  symbol: string
}

// 3D Floating Tech Icon Component
function FloatingTech3D({ icon, position, color, name, symbol }: { icon: TechIcon, position: [number, number, number], color: string, name: string, symbol: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.2 + position[0]) * 0.5
    }
  })

  return (
    <Float
      position={position}
      rotation-y={Math.PI / 4}
      floatIntensity={2}
      speed={1.5}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
        {hovered && (
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.2}
            height={0.02}
            position={[0, -1.5, 0]}
          >
            {name}
            <meshStandardMaterial color="white" />
          </Text3D>
        )}
      </mesh>
      <mesh position={[0, 0, 0.51]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial
          transparent
          opacity={0.9}
          color="white"
        />
      </mesh>
    </Float>
  )
}

// 3D Particle System
function ParticleSystem() {
  const points = useMemo(() => {
    const temp = []
    for (let i = 0; i < 100; i++) {
      temp.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ])
    }
    return temp
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02
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
        size={0.05}
        color="#64748b"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// 3D Scene Component
function Scene3D() {
  const { viewport } = useThree()
  
  const techPositions = useMemo(() => {
    return techIcons.slice(0, 12).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2
      const radius = 8
      return [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 6,
        Math.sin(angle) * radius
      ] as [number, number, number]
    })
  }, [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      
      <ParticleSystem />
      
      {techIcons.slice(0, 12).map((tech, i) => (
        <FloatingTech3D
          key={tech.name}
          icon={tech}
          position={techPositions[i]}
          color={tech.color}
          name={tech.name}
          symbol={tech.symbol}
        />
      ))}
    </>
  )
}

const techIcons = [
  { icon: Code, name: "React", category: "frontend", color: "#61DAFB", symbol: "⚛️" },
  { icon: Database, name: "PostgreSQL", category: "backend", color: "#336791", symbol: "🗄️" },
  { icon: Cloud, name: "AWS", category: "cloud", color: "#FF9900", symbol: "☁️" },
  { icon: Palette, name: "Next.js", category: "frontend", color: "#000000", symbol: "▲" },
  { icon: Zap, name: "Node.js", category: "backend", color: "#339933", symbol: "💚" },
  { icon: Layers, name: "TypeScript", category: "language", color: "#3178C6", symbol: "📘" },
  { icon: Cpu, name: "Python", category: "language", color: "#3776AB", symbol: "🐍" },
  { icon: Smartphone, name: "React Native", category: "mobile", color: "#61DAFB", symbol: "📱" },
  { icon: Globe, name: "JavaScript", category: "language", color: "#F7DF1E", symbol: "⚡" },
  { icon: Server, name: "Docker", category: "devops", color: "#2496ED", symbol: "🐳" },
  { icon: Lock, name: "GraphQL", category: "api", color: "#E10098", symbol: "🔗" },
  { icon: Rocket, name: "Kubernetes", category: "devops", color: "#326CE5", symbol: "☸️" },
  { icon: Sparkles, name: "TensorFlow", category: "ai", color: "#FF6F00", symbol: "🧠" },
  { icon: Star, name: "MongoDB", category: "database", color: "#47A248", symbol: "🍃" },
  { icon: Target, name: "Redis", category: "cache", color: "#DC382D", symbol: "⚡" },
  { icon: Lightbulb, name: "Vue.js", category: "frontend", color: "#4FC08D", symbol: "💚" },
  { icon: Settings, name: "Webpack", category: "build", color: "#8DD6F9", symbol: "📦" },
  { icon: Monitor, name: "Tailwind", category: "css", color: "#06B6D4", symbol: "🎨" },
  { icon: Wifi, name: "Socket.io", category: "realtime", color: "#010101", symbol: "🔌" },
  { icon: Shield, name: "JWT", category: "auth", color: "#000000", symbol: "🔐" },
  { icon: Binary, name: "Git", category: "vcs", color: "#F05032", symbol: "🌿" },
  { icon: Hash, name: "Rust", category: "language", color: "#000000", symbol: "⚙️" },
]

const FloatingTechBackground = () => {
  const [icons, setIcons] = useState<TechIcon[]>([])
  const [draggedIcon, setDraggedIcon] = useState<string | null>(null)
  const [show3D, setShow3D] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize icons with random positions
    const initializeIcons = () => {
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920
      const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080
      
      const initializedIcons = techIcons.map((tech, index) => ({
        id: `tech-${index}`,
        ...tech,
        x: Math.random() * (screenWidth - 100),
        y: Math.random() * (screenHeight - 100),
        z: Math.random() * 1000,
        rotation: Math.random() * 360,
        rotationSpeed: 0.5 + Math.random() * 2,
        scale: 0.8 + Math.random() * 0.4,
      }))
      
      setIcons(initializedIcons)
    }

    initializeIcons()

    // Show 3D mode after delay for performance
    const timer = setTimeout(() => setShow3D(true), 2000)

    // Reinitialize on window resize
    const handleResize = () => {
      if (icons.length === 0) initializeIcons()
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(timer)
      }
    }
  }, [])

  const DraggableIcon = ({ icon }: { icon: TechIcon }) => {
    const x = useMotionValue(icon.x)
    const y = useMotionValue(icon.y)
    const springX = useSpring(x, { stiffness: 300, damping: 30 })
    const springY = useSpring(y, { stiffness: 300, damping: 30 })

    return (
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={containerRef}
        style={{ x: springX, y: springY }}
        initial={{ 
          opacity: 0,
          scale: 0,
          rotate: icon.rotation
        }}
        animate={{ 
          opacity: 0.7,
          scale: icon.scale,
          rotate: [icon.rotation, icon.rotation + 360],
        }}
        transition={{
          opacity: { delay: Math.random() * 2, duration: 1 },
          scale: { delay: Math.random() * 2, duration: 1, type: "spring" },
          rotate: { 
            duration: 20 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }
        }}
        whileHover={{ 
          scale: icon.scale * 1.2,
          opacity: 1,
          transition: { duration: 0.3 }
        }}
        whileDrag={{ 
          scale: icon.scale * 1.3,
          opacity: 1,
          zIndex: 1000,
          transition: { duration: 0.2 }
        }}
        onDragStart={() => setDraggedIcon(icon.id)}
        onDragEnd={() => setDraggedIcon(null)}
        className={`absolute cursor-grab active:cursor-grabbing p-4 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl group ${
          draggedIcon === icon.id ? 'z-50' : 'z-10'
        }`}
        style={{
          background: `linear-gradient(135deg, ${icon.color.split(' ')[1]}/20, ${icon.color.split(' ')[3]}/20)`,
        }}
      >
        {/* Holographic glow effect */}
        <motion.div
          className={`absolute -inset-2 bg-gradient-to-r ${icon.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
        
        {/* Tech icon */}
        <div className="relative z-10">
          <icon.icon 
            size={32} 
            className={`text-transparent bg-gradient-to-r ${icon.color} bg-clip-text drop-shadow-lg`}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))'
            }}
          />
        </div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, y: -50, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900/90 text-white text-xs rounded-lg backdrop-blur-sm border border-white/20"
        >
          {icon.name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900/90" />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 3D Canvas Background */}
      {show3D && (
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 75 }}
            gl={{ alpha: true, antialias: true }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              <Scene3D />
              <Environment preset="city" background={false} />
            </Suspense>
          </Canvas>
        </div>
      )}
      
      {/* Ambient background effects */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 150, 0],
            y: [0, -75, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.3, 0.6, 0.3],
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary/8 to-accent/8 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Enhanced 2D floating tech icons */}
      <div className="absolute inset-0 pointer-events-auto z-20">
        {icons.slice(12).map((icon) => (
          <DraggableIcon key={icon.id} icon={icon} />
        ))}
      </div>

      {/* Enhanced Interactive particles */}
      <div className="absolute inset-0 overflow-hidden z-15">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-1 h-1 bg-primary/40' : 
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-secondary/35' : 
              i % 4 === 2 ? 'w-0.5 h-0.5 bg-accent/45' : 'w-2 h-2 bg-purple-500/30'
            }`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -30, 25, -15, 8, -20],
              x: [null, 15, -12, 8, -10, 18],
              scale: [1, 2, 0.3, 1.5, 0.7, 1],
              opacity: [0.4, 1, 0.2, 0.9, 0.3, 0.6],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 15,
            }}
          />
        ))}
      </div>
      
      {/* Code matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden z-5 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-green-400 font-mono text-xs opacity-60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -100,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 900,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 20,
            }}
          >
            {['const', 'function', 'return', 'import', 'export', 'async', 'await', 'useState', 'useEffect'][Math.floor(Math.random() * 9)]}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FloatingTechBackground