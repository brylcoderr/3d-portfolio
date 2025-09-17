"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUp,
  Code,
  Coffee,
  Heart,
  Sparkles,
  Star,
  ChevronUp
} from "lucide-react"

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "from-gray-400 to-gray-600",
      hoverColor: "hover:text-gray-300",
      description: "Open source projects"
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-blue-400",
      description: "Professional network"
    },
    {
      id: "email",
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "from-green-400 to-green-600",
      hoverColor: "hover:text-green-400",
      description: "Get in touch"
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToSection = (href: string) => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-300/30 via-base-200/10 to-transparent" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Tech particle grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`footer-particle-${i}`}
              className={`absolute w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-primary/40' : 
                i % 3 === 1 ? 'bg-secondary/40' : 'bg-accent/40'
              }`}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * 400,
              }}
              animate={{
                y: [null, -10, 10, -5, 5],
                x: [null, 5, -5, 3, -3],
                scale: [1, 1.3, 0.7, 1.1, 1],
                opacity: [0.4, 0.8, 0.3, 0.6, 0.4],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.div
        className="absolute -top-12 right-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          onClick={scrollToTop}
          whileHover={{ 
            scale: 1.1, 
            y: -3,
            rotateZ: 10,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 10px 40px rgba(var(--fallback-p,oklch(var(--p)))/0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
        >
          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
          />
          
          <div className="relative w-full h-full flex items-center justify-center text-white">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <ChevronUp size={20} className="drop-shadow-lg" />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>

      {/* Main footer content */}
      <div className="relative z-10">
        {/* Top section with holographic border */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative py-16"
        >
          {/* Holographic top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Brand section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 md:col-span-2 lg:col-span-1"
              >
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={scrollToTop}
                >
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-content text-xl font-bold">D</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {"<Dev />"}
                  </span>
                </motion.div>
                
                <p className="text-base-content/70 leading-relaxed">
                  Crafting exceptional digital experiences with modern technologies and innovative solutions. 
                  Let's build something amazing together.
                </p>
                
                {/* Contact info */}
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-base-content/60 hover:text-primary transition-colors group"
                  >
                    <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">New York, NY</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-base-content/60 hover:text-secondary transition-colors group"
                  >
                    <Phone size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-base-content/60 hover:text-accent transition-colors group"
                  >
                    <Mail size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm">your.email@example.com</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 md:col-span-1 lg:col-span-1"
              >
                <div className="relative">
                  <motion.h3 
                    className="text-xl lg:text-2xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text mb-6 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    Quick Links
                  </motion.h3>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/80 to-white/50 rounded-full"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {quickLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      initial={{ opacity: 0, x: -20, rotateY: -15 }}
                      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.6 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        x: 10, 
                        scale: 1.03,
                        rotateY: 5,
                        transition: { duration: 0.2, type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative text-left py-3 px-4 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-primary/30 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.05) 100%)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.1)'
                      }}
                    >
                      {/* Background glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"
                      />
                      
                      <span className="relative text-base-content/70 group-hover:text-primary transition-colors duration-300 font-medium">
                        {link.name}
                      </span>
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-300 rounded-full"
                      />
                      
                      {/* Arrow indicator */}
                      <motion.div
                        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        animate={{
                          x: [0, 3, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      </motion.div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Social Links - Let's Connect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-8 md:col-span-2 lg:col-span-1"
              >
                {/* Enhanced Header with Holographic Effects */}
                <div className="relative">
                  <motion.h3 
                    className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text mb-6 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    Let's Connect
                  </motion.h3>
                  
                  {/* Holographic glow behind text */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/80 to-white/50 rounded-full"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                  
                  {/* Subtitle */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="text-base-content/70 text-sm lg:text-base mt-3 max-w-xs lg:max-w-sm"
                  >
                    Ready to collaborate? Let's create something amazing together!
                  </motion.p>
                </div>

                {/* Enhanced Social Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.div
                        key={social.id}
                        initial={{ opacity: 0, y: 30, rotateX: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.8 + index * 0.15,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="group relative"
                      >
                        {/* Background glow effect */}
                        <motion.div
                          className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`}
                          animate={hoveredSocial === social.id ? {
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        />
                        
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setHoveredSocial(social.id)}
                          onMouseLeave={() => setHoveredSocial(null)}
                          whileHover={{ 
                            y: -8,
                            scale: 1.03,
                            rotateY: 5,
                            transition: { 
                              duration: 0.3, 
                              type: "spring", 
                              stiffness: 300 
                            }
                          }}
                          whileTap={{ scale: 0.98 }}
                          className="relative flex items-center gap-5 p-5 lg:p-6 rounded-2xl backdrop-blur-xl border border-white/10 overflow-hidden transform-gpu transition-all duration-300 hover:border-primary/30 glass-tech"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)'
                          }}
                        >
                          {/* Animated shimmer overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
                          />
                          
                          {/* Enhanced Icon Container */}
                          <div className="relative">
                            <motion.div 
                              className={`relative w-16 h-16 lg:w-18 lg:h-18 rounded-2xl flex items-center justify-center bg-gradient-to-br ${social.color} shadow-xl transition-all duration-300 overflow-hidden`}
                              whileHover={{
                                rotateY: 180,
                                scale: 1.1,
                                transition: { duration: 0.6 }
                              }}
                              style={{
                                transformStyle: 'preserve-3d',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
                              }}
                            >
                              {/* Icon glow effect */}
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150`}
                              />
                              
                              {/* Inner shine */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                              
                              {/* Icon */}
                              <IconComponent size={24} className="text-white relative z-10 drop-shadow-lg" />
                              
                              {/* Rotating border */}
                              <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                  background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.4) 90deg, transparent 180deg, rgba(255,255,255,0.4) 270deg, transparent 360deg)',
                                  mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                                  maskComposite: 'subtract'
                                }}
                                animate={{
                                  rotate: [0, 360]
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear"
                                }}
                              />
                            </motion.div>
                            
                            {/* Floating particles around icon */}
                            {hoveredSocial === social.id && (
                              <>
                                {[...Array(6)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${social.color}`}
                                    style={{
                                      top: `${20 + i * 8}%`,
                                      left: `${20 + i * 10}%`
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                      scale: [0, 1, 0],
                                      opacity: [0, 1, 0],
                                      y: [0, -20, -40],
                                      x: [0, Math.sin(i) * 10, Math.sin(i) * 20]
                                    }}
                                    transition={{
                                      duration: 2,
                                      delay: i * 0.1,
                                      repeat: Infinity
                                    }}
                                  />
                                ))}
                              </>
                            )}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <motion.div 
                              className="font-bold text-lg lg:text-xl text-base-content group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {social.label}
                            </motion.div>
                            <motion.div 
                              className="text-sm lg:text-base text-base-content/70 group-hover:text-base-content/90 transition-colors duration-300 mt-1"
                              whileHover={{ x: 3 }}
                            >
                              {social.description}
                            </motion.div>
                            
                            {/* Hover action text */}
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ 
                                opacity: hoveredSocial === social.id ? 1 : 0,
                                height: hoveredSocial === social.id ? "auto" : 0
                              }}
                              transition={{ duration: 0.2 }}
                              className="text-xs text-primary font-medium mt-2 overflow-hidden"
                            >
                              Click to connect →
                            </motion.div>
                          </div>
                          
                          {/* Enhanced Hover indicator */}
                          <motion.div
                            className="flex flex-col items-center gap-2"
                            animate={hoveredSocial === social.id ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0]
                            } : {}}
                            transition={{ duration: 0.8, repeat: Infinity }}
                          >
                            <motion.div
                              className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-all duration-300"
                              whileHover={{ scale: 1.5 }}
                            />
                            <motion.div
                              className="w-1 h-6 bg-gradient-to-b from-primary/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                              animate={{
                                scaleY: hoveredSocial === social.id ? [1, 1.5, 1] : 1
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          </motion.div>
                        </motion.a>
                      </motion.div>
                    )
                  })}
                </div>
                
                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="relative p-6 rounded-2xl backdrop-blur-sm border border-primary/20 overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 50%, rgba(236,72,153,0.1) 100%)'
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"
                    animate={{
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.p 
                      className="text-base-content/80 text-sm lg:text-base mb-3"
                      animate={{
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      🚀 Ready to start your next project?
                    </motion.p>
                    <motion.p 
                      className="text-primary font-semibold text-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      Let's make something extraordinary! ✨
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative py-8 border-t border-base-content/10"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright with animated elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-3 text-base-content/60"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Code size={16} className="text-primary" />
                </motion.div>
                <span className="text-sm">
                  © 2024 Developer Portfolio. Made with
                </span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ['#ec4899', '#f59e0b', '#10b981', '#ec4899']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart size={16} fill="currentColor" />
                </motion.div>
                <span className="text-sm">and lots of</span>
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Coffee size={16} className="text-amber-500" />
                </motion.div>
              </motion.div>

              {/* Tech stack badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm text-base-content/60">Built with:</span>
                <div className="flex gap-2">
                  {[
                    { name: "Next.js", color: "from-gray-700 to-black" },
                    { name: "React", color: "from-blue-400 to-blue-600" },
                    { name: "Tailwind", color: "from-cyan-400 to-cyan-600" },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${tech.color} text-white text-xs font-medium shadow-lg backdrop-blur-sm cursor-pointer`}
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Final holographic effects */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </footer>
  )
}

export default Footer