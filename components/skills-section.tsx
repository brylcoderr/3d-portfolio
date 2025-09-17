"use client"

import { motion } from "framer-motion"
import { useState, Suspense } from "react"
import { Code, Database, Cloud, Palette, Star, Award, TrendingUp, Sparkles, Zap, Layers, ChevronRight, Lightbulb, Rocket, Target } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import 3D component for performance
const TechShowcase3D = dynamic(() => import("./tech-showcase-3d"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse rounded-2xl" />
  )
})

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const [show3D, setShow3D] = useState(false)

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "React/Next.js", level: 95, description: "Advanced component architecture & SSR" },
        { name: "TypeScript", level: 90, description: "Type-safe development & complex types" },
        { name: "Tailwind CSS", level: 92, description: "Responsive design & custom components" },
        { name: "Three.js", level: 85, description: "3D graphics & interactive experiences" },
      ],
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "Node.js", level: 88, description: "RESTful APIs & microservices" },
        { name: "Python", level: 85, description: "Data processing & automation" },
        { name: "PostgreSQL", level: 90, description: "Complex queries & optimization" },
        { name: "MongoDB", level: 82, description: "NoSQL design & aggregation" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "AWS", level: 80, description: "EC2, S3, Lambda & RDS" },
        { name: "Docker", level: 78, description: "Containerization & orchestration" },
        { name: "Git", level: 95, description: "Version control & collaboration" },
        { name: "Vercel", level: 92, description: "Deployment & edge functions" },
      ],
    },
    {
      title: "Design & UX",
      icon: Palette,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      skills: [
        { name: "Figma", level: 85, description: "UI design & prototyping" },
        { name: "UI/UX Design", level: 80, description: "User research & wireframing" },
        { name: "Responsive Design", level: 95, description: "Mobile-first approach" },
        { name: "Accessibility", level: 88, description: "WCAG compliance & testing" },
      ],
    },
  ]

  const achievements = [
    { icon: Star, label: "Expert Level", value: "20+", description: "Technologies Mastered" },
    { icon: Award, label: "Certifications", value: "8+", description: "Professional Certifications" },
    { icon: TrendingUp, label: "Growth Rate", value: "95%", description: "Skill Improvement YoY" },
  ]

  const renderIcon = (Icon: any, customSize?: number, customClassName?: string) => {
    const iconSize = customSize || 16
    const iconClassName = customClassName || "w-6 h-6 text-primary"
    return <Icon size={iconSize} className={iconClassName} />
  }

  // Simplified animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }


  return (
    <section 
      id="skills" 
      className="relative py-32 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, hsl(var(--b2)) 0%, hsl(var(--b3)) 100%)
        `
      }}
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Particle System */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${
              i % 3 === 0 ? 'from-primary to-secondary' :
              i % 3 === 1 ? 'from-secondary to-accent' : 'from-accent to-primary'
            } rounded-full opacity-60`}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -20, 20, -10],
              x: [null, 10, -10, 5],
              scale: [1, 1.5, 0.5, 1],
              opacity: [0.6, 1, 0.3, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Matrix-style code rain effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-primary/20 text-sm font-mono select-none"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -50,
            }}
            animate={{
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {['</', 'div>', 'const', 'func', 'return', '{}', '[]', '=>'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Stunning Holographic Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-32 relative"
        >
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { icon: '⚡', position: 'top-10 left-10', delay: 0, color: 'text-yellow-400' },
              { icon: '🚀', position: 'top-20 right-20', delay: 0.5, color: 'text-blue-400' },
              { icon: '💡', position: 'bottom-20 left-16', delay: 1, color: 'text-orange-400' },
              { icon: '🎯', position: 'bottom-10 right-12', delay: 1.5, color: 'text-green-400' },
              { icon: '⚙️', position: 'top-1/2 left-5', delay: 2, color: 'text-purple-400' },
              { icon: '🌟', position: 'top-1/3 right-8', delay: 2.5, color: 'text-pink-400' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} text-4xl ${item.color} tech-float opacity-30`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>

          {/* Main Title with Holographic Effect */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            {/* Glowing Orb behind title */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-20 pulse-glow-skills"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <h2 className="relative responsive-text-hero font-black mb-6 leading-none">
              <motion.span 
                className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent hologram-effect drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Skills &
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent neon-glow hologram-effect"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Technologies
              </motion.span>
            </h2>
            
            {/* Animated Underline */}
            <motion.div
              className="relative h-2 mx-auto max-w-md overflow-hidden rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="responsive-text-body text-base-content/90 leading-relaxed font-light mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Crafting digital experiences
              </span> with a comprehensive arsenal of 
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                cutting-edge technologies
              </span> and innovative methodologies.
            </p>
            
            {/* View Toggle Buttons */}
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShow3D(false)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 backdrop-blur-xl border-2 ${
                  !show3D 
                    ? 'bg-primary/20 border-primary text-primary shadow-lg shadow-primary/20' 
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                }`}
              >
                📊 Traditional View
              </motion.button>
              <motion.button
                onClick={() => setShow3D(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 backdrop-blur-xl border-2 ${
                  show3D 
                    ? 'bg-secondary/20 border-secondary text-secondary shadow-lg shadow-secondary/20' 
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                }`}
              >
                🌌 3D Interactive
              </motion.button>
            </motion.div>
            
            {/* Floating Tech Stack Badges - only show in 2D mode */}
            {!show3D && (
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Next.js'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    className="px-6 py-3 glass-morphism rounded-full border-2 border-primary/30 backdrop-blur-xl cursor-pointer group"
                  >
                    <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent transition-all duration-300">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Conditional Content Rendering */}
        {show3D ? (
          /* 3D Interactive Tech Showcase */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-20"
          >
            <div className="rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <Suspense fallback={
                <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              }>
                <TechShowcase3D />
              </Suspense>
            </div>
            
            {/* 3D Mode Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="glass-morphism rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">Interactive 3D Tech Stack</h3>
                <p className="text-gray-300">
                  🖱️ Click spheres for details • 🔄 Drag to rotate • ⚡ Hover for animations
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Traditional 2D Skills Grid */
          <div className="grid lg:grid-cols-3 gap-16 items-start mb-20">
          <div className="lg:col-span-2 space-y-12">
            {/* Futuristic Category Selector */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 glass-morphism rounded-3xl shadow-2xl border-2 border-primary/20"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-30 animate-pulse" />
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={category.title}
                    onClick={() => setActiveCategory(index)}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -8,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-6 rounded-2xl font-bold transition-all duration-500 group overflow-hidden transform-gpu ${
                      activeCategory === index 
                        ? "glass-morphism border-2 border-white/40 shadow-2xl neon-glow" 
                        : "glass-morphism border border-white/10 hover:border-primary/30 shadow-lg"
                    }`}
                    style={{
                      background: activeCategory === index 
                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))'
                        : 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {/* Holographic shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-shimmer" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <motion.div
                        animate={activeCategory === index ? { 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className={`p-4 rounded-xl shadow-lg transition-all duration-500 ${
                          activeCategory === index ? "bg-white/20 backdrop-blur-sm shadow-2xl" : `${category.bgColor} group-hover:scale-110`
                        }`}
                      >
                        <category.icon 
                          size={28} 
                          className={`transition-all duration-300 drop-shadow-lg ${
                            activeCategory === index ? "text-white" : `${category.color} group-hover:scale-110`
                          }`} 
                        />
                      </motion.div>
                      <span className={`text-sm font-bold tracking-wide ${
                        activeCategory === index ? "text-white drop-shadow-sm" : "text-base-content/80"
                      }`}>
                        {category.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Circular Skill Visualization */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring", damping: 20 }}
              className="relative"
            >
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className={`relative p-4 glass-morphism rounded-xl shadow-lg border ${skillCategories[activeCategory].borderColor}`}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-30 animate-pulse" />
                  <div className="relative">
                    {renderIcon(skillCategories[activeCategory].icon, 28, `${skillCategories[activeCategory].color} drop-shadow-lg`)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-base-content drop-shadow-lg">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-sm text-base-content/70">Professional mastery</p>
                </div>
              </motion.div>

              {/* Compact Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => {
                  const circumference = 2 * Math.PI * 35; // radius = 35
                  const strokeDasharray = `${(skill.level / 100) * circumference} ${circumference}`;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.7, rotateY: -30 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ 
                        delay: skillIndex * 0.1,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 120
                      }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -8,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative p-6 glass-morphism rounded-3xl shadow-2xl border border-white/20 hover:border-primary/40 transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                      {/* Holographic Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100"
                        animate={{ 
                          background: [
                            'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))',
                            'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                            'linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(99, 102, 241, 0.05))'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Enhanced Holographic Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-all duration-500" />
                      
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                        animate={{ x: [-100, 300] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />
                      
                      <div className="relative z-10 flex items-center gap-5">
                        {/* Enhanced Circular Progress */}
                        <div className="relative flex-shrink-0">
                          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 90 90">
                            {/* Background circle with glow */}
                            <circle
                              cx="45"
                              cy="45"
                              r="35"
                              stroke="rgba(255,255,255,0.08)"
                              strokeWidth="6"
                              fill="none"
                            />
                            {/* Animated progress circle */}
                            <motion.circle
                              cx="45"
                              cy="45"
                              r="35"
                              stroke="url(#enhancedSkillGradient)"
                              strokeWidth="6"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: `0 ${circumference}` }}
                              animate={{ strokeDasharray }}
                              transition={{ 
                                duration: 2,
                                delay: skillIndex * 0.2,
                                ease: "easeInOut"
                              }}
                              className="drop-shadow-2xl"
                            />
                            {/* Enhanced Gradient definition */}
                            <defs>
                              <linearGradient id="enhancedSkillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="1" />
                                <stop offset="30%" stopColor="rgb(139, 92, 246)" stopOpacity="0.9" />
                                <stop offset="70%" stopColor="rgb(236, 72, 153)" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="1" />
                              </linearGradient>
                            </defs>
                          </svg>
                          
                          {/* Enhanced Center Content */}
                          <motion.div 
                            className="absolute inset-0 flex flex-col items-center justify-center"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: skillIndex * 0.2 + 0.8, duration: 0.6, type: "spring" }}
                          >
                            <span className="text-lg font-black text-primary drop-shadow-lg">
                              {skill.level}%
                            </span>
                            <div className="text-xs text-base-content/60 font-medium">
                              Level
                            </div>
                          </motion.div>
                          
                          {/* Floating Particles */}
                          <motion.div
                            className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                            animate={{ 
                              scale: [0, 1.2, 0],
                              rotate: [0, 180, 360],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.3 }}
                          />
                          <motion.div
                            className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100"
                            animate={{ 
                              scale: [0, 1, 0],
                              x: [0, 10, 0],
                              y: [0, -5, 0]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: skillIndex * 0.3 + 0.5 }}
                          />
                        </div>
                        
                        {/* Enhanced Skill Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-3">
                            <h4 className="text-lg font-bold text-base-content group-hover:text-primary transition-colors duration-300 truncate">
                              {skill.name}
                            </h4>
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: skillIndex * 0.2 + 1.2 }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <Sparkles size={14} className="text-accent" />
                            </motion.div>
                          </div>
                          
                          {/* Enhanced Skill Indicators */}
                          <div className="flex items-center gap-2 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${
                                  i < Math.floor(skill.level / 20) 
                                    ? 'bg-gradient-to-r from-primary to-secondary shadow-lg' 
                                    : 'bg-white/20'
                                }`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ 
                                  delay: skillIndex * 0.2 + 1.4 + i * 0.05,
                                  duration: 0.3,
                                  type: "spring"
                                }}
                                whileHover={{ scale: 1.4, y: -2 }}
                              />
                            ))}
                            <motion.span 
                              className="ml-2 text-sm font-semibold text-base-content/70 group-hover:text-primary transition-colors duration-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: skillIndex * 0.2 + 1.8 }}
                            >
                              {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Pro' : 'Learning'}
                            </motion.span>
                          </div>
                          
                          {/* Dynamic Progress Bar */}
                          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: `${skill.level}%`, opacity: 1 }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.15, ease: "easeOut" }}
                            >
                              {/* Flowing Light Effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                                animate={{ x: [-50, 200] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                              />
                              {/* Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-sm" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right Column - Compact Tech Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full flex flex-col space-y-6"
          >
            {/* Compact Tech Overview */}
            <motion.div className="relative glass-morphism rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              {/* Simplified Background */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative p-6">
                {/* Compact Header */}
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="relative p-3 glass-morphism rounded-xl border-2 border-primary/30"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(99, 102, 241, 0.3)',
                        '0 0 40px rgba(139, 92, 246, 0.5)',
                        '0 0 20px rgba(236, 72, 153, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles size={28} className="text-primary" />
                    </motion.div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black mb-1">
                      <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Tech Mastery
                      </span>
                    </h3>
                    <p className="text-sm text-base-content/60">Performance Dashboard</p>
                  </div>
                </motion.div>

                {/* Compact Performance Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Zap, label: "Performance", value: "99.9%", color: "from-yellow-400 to-orange-500" },
                    { icon: Layers, label: "Architecture", value: "A+", color: "from-blue-400 to-indigo-500" },
                    { icon: Code, label: "Quality", value: "5★", color: "from-green-400 to-teal-500" },
                    { icon: Database, label: "Data Ops", value: "100%", color: "from-purple-400 to-pink-500" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="relative p-4 glass-morphism rounded-xl border border-white/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group text-center"
                    >
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      />
                      
                      <motion.div
                        className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${item.color} mb-3 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon size={20} className="text-white" />
                      </motion.div>
                      
                      <div className="text-2xl font-black text-base-content mb-1">{item.value}</div>
                      <div className="text-xs text-base-content/60 font-semibold">{item.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Compact Tech Stack */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-center"
                >
                  <h4 className="text-lg font-black mb-4">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Tech Stack
                    </span>
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
                      { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-600" },
                      { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
                      { name: "AWS", level: 82, color: "from-orange-400 to-orange-600" },
                      { name: "Docker", level: 78, color: "from-cyan-400 to-cyan-600" },
                      { name: "Next.js", level: 94, color: "from-gray-400 to-gray-600" },
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 + index * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="group relative cursor-pointer"
                      >
                        <div className={`absolute -inset-2 bg-gradient-to-r ${tech.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                        
                        <div className="relative p-3 glass-morphism rounded-xl border border-white/20 group-hover:border-primary/40 transition-all duration-300 text-center">
                          <div className="text-xs font-bold text-base-content group-hover:text-primary transition-colors duration-300 mb-2">
                            {tech.name}
                          </div>
                          
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-1">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${tech.level}%` }}
                              transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                            />
                          </div>
                          
                          <div className={`text-xs font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                            {tech.level}%
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Compact Achievement Cards */}
            <div className="space-y-3">
              {achievements.slice(0, 3).map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative glass-morphism rounded-xl shadow-lg border border-white/20 hover:border-primary/40 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  
                  <div className="relative p-4 flex items-center gap-4">
                    <motion.div 
                      className="relative p-2.5 glass-morphism rounded-lg border border-primary/30"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon size={20} className="text-primary" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="text-2xl font-black text-primary mb-0.5">{achievement.value}</div>
                      <div className="text-sm font-bold text-base-content">{achievement.label}</div>
                      <div className="text-xs text-base-content/60">{achievement.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
        )}

      </div>
    </section>
  )
}

export default SkillsSection
