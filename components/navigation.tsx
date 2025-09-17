"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Mail, Linkedin, Download } from "lucide-react"
import ThemeToggle from "./theme-toggle"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 50)

        const sections = ["home", "about", "services", "skills", "projects", "contact"]
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
          }
          return false
        })
        if (currentSection) setActiveSection(currentSection)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "hover:text-green-600",
    },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-base-100/80 backdrop-blur-xl shadow-2xl border-b border-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-secondary/5 before:to-accent/5 before:rounded-b-2xl" 
          : "bg-gradient-to-r from-base-100/10 via-base-100/5 to-base-100/10 backdrop-blur-sm"
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgba(var(--fallback-b1,oklch(var(--b1)))/0.9), rgba(var(--fallback-b1,oklch(var(--b1)))/0.7))' 
          : undefined
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold cursor-pointer flex items-center gap-3 group relative"
            onClick={() => handleNavClick("#home")}
          >
            {/* Holographic glow effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Logo icon with 3D effect */}
            <motion.div 
              className="relative w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300"
              whileHover={{
                rotateY: 180,
                rotateZ: 10,
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <span className="text-primary-content text-lg font-bold relative z-10">D</span>
              
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            
            {/* Text with gradient and glow */}
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-extrabold tracking-tight"
              whileHover={{
                scale: 1.05,
                textShadow: '0 0 20px rgba(var(--fallback-p,oklch(var(--p)))/0.5)'
              }}
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(var(--fallback-p,oklch(var(--p)))/0.3))'
              }}
            >
              {"<Dev />"}
            </motion.span>
          </motion.div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3,
                      rotateX: 10,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
                      activeSection === item.name.toLowerCase() 
                        ? "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 text-primary shadow-xl border border-primary/30 backdrop-blur-sm" 
                        : "text-base-content hover:text-primary backdrop-blur-sm border border-transparent hover:border-primary/20 hover:bg-gradient-to-r hover:from-base-200/50 hover:to-base-300/30"
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: activeSection === item.name.toLowerCase() 
                        ? '0 8px 32px rgba(var(--fallback-p,oklch(var(--p)))/0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                        : '0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Glass morphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    
                    {/* Holographic shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                    
                    <span className="relative z-10 tracking-wide">{item.name}</span>
                    
                    {/* Active indicator with glow */}
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                        style={{
                          boxShadow: '0 0 20px rgba(var(--fallback-p,oklch(var(--p)))/0.6)'
                        }}
                      />
                    )}
                    
                    {/* Hover glow indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full group-hover:w-4 transition-all duration-300"
                      style={{
                        filter: 'blur(1px)'
                      }}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline btn-sm gap-2 hover:btn-primary transition-all duration-300"
            >
              <Download size={14} className="w-4 h-4" />
              Resume
            </motion.a>

            <ThemeToggle />

            <div className="flex items-center space-x-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full hover:bg-base-200 text-base-content transition-all duration-300 tooltip tooltip-bottom hover:shadow-lg ${social.color}`}
                    data-tip={social.label}
                    aria-label={social.label}
                  >
                    <IconComponent size={18} className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} className="w-6 h-6" /> : <Menu size={24} className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 lg:hidden bg-base-100/98 backdrop-blur-md border-t border-primary/10 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left text-lg p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    activeSection === item.name.toLowerCase()
                      ? "bg-primary text-primary-content shadow-lg"
                      : "text-base-content hover:text-primary hover:bg-base-200"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Mobile Resume Button */}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full gap-2 mt-4"
              >
                <Download size={16} className="w-4 h-4" />
                Download Resume
              </motion.a>

              {/* Mobile Social Links */}
              <div className="flex gap-2 pt-6 border-t border-base-300 justify-center">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navItems.length + index + 1) * 0.1 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 rounded-full hover:bg-base-200 text-base-content transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent size={20} className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
