"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, Download, Play } from "lucide-react"

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background - Removed 3D temporarily for debugging */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        {/* Animated orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 z-5">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 8,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="relative px-4 py-2 rounded-full backdrop-blur-sm border border-primary/30 overflow-hidden group" style={{ background: 'rgba(99, 102, 241, 0.1)' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative flex items-center gap-2 text-primary font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-sm shadow-primary/50"></div>
                    <span className="text-sm font-semibold">5+ Years Experience</span>
                  </div>
                </div>
                <div className="relative px-4 py-2 rounded-full backdrop-blur-sm border border-green-500/30 overflow-hidden group" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="relative flex items-center gap-2 text-green-500 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50"></div>
                    <span className="text-sm font-semibold">Available for hire</span>
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="responsive-text-hero font-bold text-balance"
              >
                <span className="gradient-text">{displayText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="responsive-text-body text-base-content/80 text-pretty max-w-lg"
              >
                Transforming business goals into scalable web solutions with clean code, modern technologies, and
                exceptional user experiences that drive results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Background glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-lg opacity-50"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-primary/30 rounded-full blur-sm floating-particle"></div>
              <div className="absolute -top-4 -right-6 w-3 h-3 bg-secondary/40 rounded-full blur-sm floating-particle" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-6 -left-4 w-5 h-5 bg-accent/25 rounded-full blur-sm floating-particle" style={{ animationDelay: '4s' }}></div>
              <div className="absolute -bottom-8 -right-8 w-2 h-2 bg-primary/50 rounded-full blur-sm floating-particle" style={{ animationDelay: '6s' }}></div>
              
              <div className="relative bg-gradient-to-br from-base-100/10 to-base-100/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 space-y-6">
                {/* Primary CTA Button - Enhanced */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 100 }}
                  className="flex justify-center"
                >
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -6,
                      rotateX: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-5 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-700 min-w-[280px] transform-gpu"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 30%, #ec4899 60%, #f59e0b 100%)',
                      boxShadow: '0 20px 60px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {/* Animated background layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-300%] group-hover:translate-x-[300%] transition-transform duration-1500 ease-out"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out delay-100"></div>
                    
                    {/* Button content */}
                    <div className="relative flex items-center justify-center gap-4 text-white">
                      <motion.div
                        whileHover={{ 
                          rotate: 360, 
                          scale: 1.3,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-md group-hover:bg-white/50 transition-colors duration-300"></div>
                        <Play size={22} className="drop-shadow-lg relative z-10" fill="currentColor" />
                      </motion.div>
                      <span className="drop-shadow-lg tracking-wide font-extrabold">Let's Work Together</span>
                    </div>
                    
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 scale-125"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.button>
                </motion.div>

                {/* Enhanced Action buttons with staggered animation */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {([
                    {
                      label: "View Portfolio",
                      icon: <Download size={18} className="group-hover:animate-bounce" />,
                      onClick: () => scrollToSection("projects"),
                      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
                      hoverColor: "group-hover:text-blue-400",
                      emoji: "🚀",
                      delay: 0
                    },
                    {
                      label: "Send Email",
                      icon: null,
                      href: "mailto:your.email@example.com",
                      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
                      hoverColor: "group-hover:text-green-400",
                      emoji: "💌",
                      delay: 0.1
                    },
                    {
                      label: "Learn More",
                      icon: null,
                      onClick: () => scrollToSection("about"),
                      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
                      hoverColor: "group-hover:text-purple-400",
                      emoji: "✨",
                      delay: 0.2
                    }
                  ] as Array<{
                    label: string
                    icon?: React.ReactNode | null
                    onClick?: () => void
                    href?: string
                    gradient: string
                    hoverColor: string
                    emoji: string
                    delay: number
                  }>).map((btn, index) => (
                    <motion.div
                      key={btn.label}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        delay: 1.1 + btn.delay, 
                        duration: 0.5, 
                        type: "spring", 
                        stiffness: 200 
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -4, 
                        rotateY: 5,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      {btn.href ? (
                        <a
                          href={btn.href}
                          className="relative block px-8 py-4 rounded-xl font-semibold overflow-hidden border border-white/20 backdrop-blur-xl transition-all duration-500 transform-gpu"
                          style={{
                            background: 'rgba(255, 255, 255, 0.12)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${btn.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          <div className={`relative flex items-center gap-3 text-base-content ${btn.hoverColor} transition-all duration-300`}>
                            <motion.span 
                              whileHover={{ 
                                scale: 1.2, 
                                rotate: 10,
                                transition: { type: "spring", stiffness: 400 }
                              }}
                              className="text-2xl filter drop-shadow-sm"
                            >
                              {btn.emoji}
                            </motion.span>
                            {btn.icon && <div className="text-current">{btn.icon}</div>}
                            <span className="font-medium tracking-wide">{btn.label}</span>
                          </div>
                        </a>
                      ) : (
                        <button
                          onClick={btn.onClick}
                          className="relative px-8 py-4 rounded-xl font-semibold overflow-hidden border border-white/20 backdrop-blur-xl transition-all duration-500 transform-gpu"
                          style={{
                            background: 'rgba(255, 255, 255, 0.12)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${btn.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          <div className={`relative flex items-center gap-3 text-base-content ${btn.hoverColor} transition-all duration-300`}>
                            <motion.span 
                              whileHover={{ 
                                scale: 1.2, 
                                rotate: 10,
                                transition: { type: "spring", stiffness: 400 }
                              }}
                              className="text-2xl filter drop-shadow-sm"
                            >
                              {btn.emoji}
                            </motion.span>
                            {btn.icon && <div className="text-current">{btn.icon}</div>}
                            <span className="font-medium tracking-wide">{btn.label}</span>
                          </div>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Call to action text with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="text-center pt-2"
                >
                  <p className="text-sm text-base-content/70 font-medium">
                    Ready to start your next project?
                    <motion.span 
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-primary ml-2"
                    >
                      Let's make it happen! ✨
                    </motion.span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-base-content/60 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React", level: 95, color: "badge-primary" },
                  { name: "Node.js", level: 90, color: "badge-secondary" },
                  { name: "TypeScript", level: 88, color: "badge-accent" },
                  { name: "Next.js", level: 92, color: "badge-primary" },
                  { name: "PostgreSQL", level: 85, color: "badge-secondary" },
                  { name: "AWS", level: 80, color: "badge-accent" },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4, rotateY: 10 }}
                    className="tooltip tooltip-top group cursor-pointer"
                    data-tip={`${tech.level}% proficiency`}
                  >
                    <div className="relative px-4 py-2 rounded-lg backdrop-blur-sm border border-base-content/20 overflow-hidden transition-all duration-300 hover:border-primary/50" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative text-sm font-medium text-base-content group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </div>
                      <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ width: `${tech.level}%` }}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { value: "50+", label: "Projects Completed", color: "primary", delay: 0 },
                { value: "5+", label: "Years Experience", color: "secondary", delay: 0.1 },
                { value: "100%", label: "Client Satisfaction", color: "accent", delay: 0.2 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.8 + stat.delay, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -4, rotateY: 5 }}
                  className="group relative p-6 rounded-xl backdrop-blur-sm border border-base-content/10 overflow-hidden cursor-pointer min-w-[160px]"
                  style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/5 to-${stat.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute top-2 right-2 w-16 h-16 rounded-full border border-base-content/10 opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border border-base-content/5 opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="relative">
                    <div className={`text-3xl font-bold text-${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-base-content/80 group-hover:text-base-content transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-${stat.color} to-${stat.color}/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} style={{ width: '100%' }}></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] lg:h-[600px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 shadow-2xl"
          >
            {/* Animated Background */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-16 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-32 left-12 w-28 h-28 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Floating Elements */}
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                <div className="w-48 h-48 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl shadow-2xl transform rotate-12 opacity-80">
                  <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-32 right-32"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full shadow-xl opacity-70"></div>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-40 left-20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-lg shadow-lg opacity-60 transform rotate-45"></div>
              </motion.div>
              
              {/* Central Content */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
              >
                <div className="mb-6">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-base-content mb-2">Full Stack Developer</h3>
                  <p className="text-base-content/70">Crafting Digital Excellence</p>
                </div>
                
                <div className="flex gap-2">
                  <div className="px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary backdrop-blur-sm">React</div>
                  <div className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium text-secondary backdrop-blur-sm">Node.js</div>
                  <div className="px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-accent backdrop-blur-sm">TypeScript</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection("about")}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 btn btn-ghost btn-circle glass-effect"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default HeroSection
