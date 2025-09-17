"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PerformanceContextType {
  isLowPerformance: boolean
  is3DEnabled: boolean
  enableAnimations: boolean
  deviceType: 'mobile' | 'tablet' | 'desktop'
  connectionSpeed: 'slow' | 'fast'
  enable3D: () => void
  disable3D: () => void
  setAnimations: (enabled: boolean) => void
}

const PerformanceContext = createContext<PerformanceContextType | null>(null)

export const usePerformance = () => {
  const context = useContext(PerformanceContext)
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider')
  }
  return context
}

interface PerformanceProviderProps {
  children: ReactNode
}

export function PerformanceProvider({ children }: PerformanceProviderProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  const [is3DEnabled, setIs3DEnabled] = useState(true)
  const [enableAnimations, setEnableAnimations] = useState(true)
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast')

  useEffect(() => {
    const detectPerformance = () => {
      // Detect device type
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)
      
      if (isMobile) {
        setDeviceType('mobile')
      } else if (isTablet) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }

      // Check memory (if available)
      const memory = (navigator as any).deviceMemory
      const isLowMemory = memory && memory < 4

      // Check hardware concurrency
      const cores = navigator.hardwareConcurrency
      const isLowCores = cores && cores < 4

      // Check connection
      const connection = (navigator as any).connection
      if (connection) {
        const isSlowConnection = connection.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType)
        setConnectionSpeed(isSlowConnection ? 'slow' : 'fast')
      }

      // Determine if we should run in low performance mode
      const shouldUseLowPerformance = isMobile || isLowMemory || isLowCores || connection?.effectiveType === 'slow-2g'
      setIsLowPerformance(shouldUseLowPerformance)
      
      if (shouldUseLowPerformance) {
        setIs3DEnabled(false)
        setEnableAnimations(false)
      }
    }

    detectPerformance()
  }, [])

  const enable3D = () => setIs3DEnabled(true)
  const disable3D = () => setIs3DEnabled(false)
  const setAnimationsEnabled = (enabled: boolean) => setEnableAnimations(enabled)

  return (
    <PerformanceContext.Provider 
      value={{
        isLowPerformance,
        is3DEnabled,
        enableAnimations,
        deviceType,
        connectionSpeed,
        enable3D,
        disable3D,
        setAnimations: setAnimationsEnabled
      }}
    >
      {children}
    </PerformanceContext.Provider>
  )
}

// Loading Component with Performance Optimizations
interface SmartLoaderProps {
  isLoading: boolean
  loadingText?: string
  showPerformanceHint?: boolean
}

export function SmartLoader({ 
  isLoading, 
  loadingText = "Loading amazing experience...",
  showPerformanceHint = true 
}: SmartLoaderProps) {
  const { isLowPerformance, deviceType, connectionSpeed } = usePerformance()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <div className="text-center space-y-6">
            {/* Adaptive Loading Animation */}
            <motion.div className="relative">
              {/* Main Spinner */}
              <motion.div
                className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{
                  duration: isLowPerformance ? 2 : 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Secondary Ring - only on good performance */}
              {!isLowPerformance && (
                <motion.div
                  className="absolute inset-0 w-20 h-20 border-2 border-secondary/30 border-b-secondary rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
              
              {/* Pulsing Center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: isLowPerformance ? [1, 1.1, 1] : [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{
                  duration: isLowPerformance ? 2 : 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
              </motion.div>
            </motion.div>
            
            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-bold text-white">
                {loadingText}
              </h3>
              
              {/* Animated Progress Dots */}
              <div className="flex justify-center space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Performance Hint */}
            {showPerformanceHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-sm text-gray-400 max-w-md mx-auto"
              >
                {isLowPerformance ? (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                    <p className="text-yellow-300 mb-1">🚀 Performance Mode</p>
                    <p>Optimized for {deviceType} • {connectionSpeed === 'slow' ? 'Slower connection detected' : 'Fast loading'}</p>
                  </div>
                ) : (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <p className="text-green-300 mb-1">⚡ High Performance</p>
                    <p>Full experience loading with 3D effects and animations</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Performance Toggle Component
export function PerformanceToggle() {
  const { 
    isLowPerformance, 
    is3DEnabled, 
    enableAnimations, 
    deviceType,
    enable3D, 
    disable3D, 
    setAnimations 
  } = usePerformance()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <div className="glass-morphism rounded-2xl p-4 border border-white/20 space-y-3">
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold text-white">Performance</div>
          <div className={`w-2 h-2 rounded-full ${isLowPerformance ? 'bg-yellow-400' : 'bg-green-400'}`} />
        </div>
        
        <div className="space-y-2 text-xs">
          <button
            onClick={() => is3DEnabled ? disable3D() : enable3D()}
            className={`w-full px-3 py-1 rounded-lg text-left transition-colors ${
              is3DEnabled ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/70'
            }`}
          >
            🌌 3D Effects
          </button>
          
          <button
            onClick={() => setAnimations(!enableAnimations)}
            className={`w-full px-3 py-1 rounded-lg text-left transition-colors ${
              enableAnimations ? 'bg-secondary/20 text-secondary' : 'bg-white/10 text-white/70'
            }`}
          >
            ✨ Animations
          </button>
          
          <div className="text-white/50 text-xs">
            Device: {deviceType}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Progressive Enhancement Component
interface ProgressiveEnhancementProps {
  children: ReactNode
  fallback?: ReactNode
  require3D?: boolean
}

export function ProgressiveEnhancement({ 
  children, 
  fallback = null,
  require3D = false 
}: ProgressiveEnhancementProps) {
  const { is3DEnabled, enableAnimations } = usePerformance()
  
  if (require3D && !is3DEnabled) {
    return <>{fallback}</>
  }
  
  return <>{children}</>
}