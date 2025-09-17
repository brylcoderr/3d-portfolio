"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Monitor, Server, Database, Smartphone, Cloud, Palette, Star, ArrowRight, CheckCircle, Zap, Award, TrendingUp, Users } from "lucide-react"


const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: Monitor,
      title: "Frontend Development",
      description: "Crafting stunning, responsive web experiences that captivate users and drive engagement through modern technologies and innovative design patterns.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization", "Responsive Design", "Modern CSS"],
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-blue-400",
      bgGradient: "from-blue-500/10 via-cyan-500/8 to-blue-600/10",
      glowColor: "shadow-blue-500/25",
      borderGlow: "group-hover:border-blue-400/50",
      emoji: "💻",
      rating: 98,
      projects: "25+ Projects",
      experience: "5+ Years",
      category: "Frontend"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust, scalable server architectures that power seamless user experiences and handle millions of requests with optimal performance.",
      features: ["Node.js & Python", "RESTful APIs", "GraphQL", "Microservices", "Authentication", "Database Integration"],
      color: "from-green-500/20 to-emerald-500/20",
      hoverColor: "group-hover:text-green-400",
      bgGradient: "from-green-500/10 via-emerald-500/8 to-teal-500/10",
      glowColor: "shadow-green-500/25",
      borderGlow: "group-hover:border-green-400/50",
      emoji: "⚙️",
      rating: 95,
      projects: "30+ APIs",
      experience: "4+ Years",
      category: "Backend"
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Designing efficient data solutions that scale with your business needs and optimize for lightning-fast performance across all operations.",
      features: ["PostgreSQL & MongoDB", "Database Optimization", "Data Modeling", "Query Performance", "Indexing", "Replication"],
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "group-hover:text-purple-400",
      bgGradient: "from-purple-500/10 via-pink-500/8 to-rose-500/10",
      glowColor: "shadow-purple-500/25",
      borderGlow: "group-hover:border-purple-400/50",
      emoji: "🗄️",
      rating: 92,
      projects: "20+ Databases",
      experience: "3+ Years",
      category: "Database"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Orchestrating seamless deployments and scalable cloud infrastructure that grows with your ambitions and handles enterprise-level traffic.",
      features: ["AWS & Azure", "CI/CD Pipelines", "Docker & Kubernetes", "Infrastructure as Code", "Monitoring", "Auto-scaling"],
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "group-hover:text-orange-400",
      bgGradient: "from-orange-500/10 via-red-500/8 to-pink-500/10",
      glowColor: "shadow-orange-500/25",
      borderGlow: "group-hover:border-orange-400/50",
      emoji: "☁️",
      rating: 90,
      projects: "15+ Deployments",
      experience: "3+ Years",
      category: "DevOps"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating cross-platform mobile experiences that feel native and deliver exceptional performance on iOS and Android devices.",
      features: ["React Native", "Progressive Web Apps", "Native Performance", "Cross-platform", "App Store Deployment", "Mobile Optimization"],
      color: "from-indigo-500/20 to-blue-500/20",
      hoverColor: "group-hover:text-indigo-400",
      bgGradient: "from-indigo-500/10 via-blue-500/8 to-cyan-500/10",
      glowColor: "shadow-indigo-500/25",
      borderGlow: "group-hover:border-indigo-400/50",
      emoji: "📱",
      rating: 87,
      projects: "12+ Apps",
      experience: "2+ Years",
      category: "Mobile"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Transforming creative designs into pixel-perfect, accessible interfaces that delight users and exceed business expectations.",
      features: ["Design Systems", "Component Libraries", "Accessibility (WCAG)", "User Testing", "Animation & Micro-interactions", "Responsive Design"],
      color: "from-pink-500/20 to-rose-500/20",
      hoverColor: "group-hover:text-pink-400",
      bgGradient: "from-pink-500/10 via-rose-500/8 to-red-500/10",
      glowColor: "shadow-pink-500/25",
      borderGlow: "group-hover:border-pink-400/50",
      emoji: "🎨",
      rating: 96,
      projects: "18+ Designs",
      experience: "4+ Years",
      category: "Design"
    },
  ]

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed", color: "text-yellow-500" },
    { icon: Users, value: "25+", label: "Happy Clients", color: "text-blue-500" },
    { icon: TrendingUp, value: "99%", label: "Success Rate", color: "text-green-500" },
    { icon: Zap, value: "24/7", label: "Support Available", color: "text-purple-500" }
  ]

  return (
    <section id="services" className="py-28 bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative overflow-hidden">
      {/* Enhanced atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-secondary/4 to-accent/4"></div>
        
        {/* Dynamic gradient orbs */}
        <div className="absolute top-20 left-12 w-96 h-96 bg-gradient-to-r from-primary/12 to-blue-500/8 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-16 right-8 w-[500px] h-[500px] bg-gradient-to-r from-secondary/10 to-purple-500/6 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-accent/8 to-pink-500/5 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/6 to-emerald-500/4 rounded-full blur-3xl animate-pulse opacity-45" style={{ animationDelay: '6s' }}></div>
        
        {/* Enhanced floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full floating-particle opacity-30 ${
              i % 4 === 0 ? 'w-2 h-2 bg-primary/40' :
              i % 4 === 1 ? 'w-3 h-3 bg-secondary/30' :
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-accent/50' :
              'w-2.5 h-2.5 bg-gradient-to-r from-primary/30 to-secondary/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stunning Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotateY: -20 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-block mb-12"
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-5 bg-gradient-to-br from-primary/20 via-blue-500/15 to-cyan-500/20 rounded-3xl backdrop-blur-xl border border-white/25 shadow-2xl"
              >
                <span className="text-4xl">🚀</span>
              </motion.div>
              <h2 className="text-5xl lg:text-7xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                My <span className="gradient-text">Services</span>
              </h2>
              <motion.div 
                whileHover={{ rotate: -360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="p-5 bg-gradient-to-br from-accent/20 via-pink-500/15 to-rose-500/20 rounded-3xl backdrop-blur-xl border border-white/25 shadow-2xl"
              >
                <Zap className="w-10 h-10 text-accent" />
              </motion.div>
            </div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              viewport={{ once: true }}
              className="h-2 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full max-w-lg shadow-lg"
            ></motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-base-content/85 max-w-5xl mx-auto text-pretty leading-relaxed mb-12 font-medium"
          >
            Crafting digital excellence through comprehensive development services that merge 
            <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> innovative technology </span>
            with stunning user experiences that drive real business results.
          </motion.p>
          
          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + index * 0.1, 
                  type: "spring", 
                  stiffness: 150,
                  damping: 12
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 10 }
                }}
                className="group relative p-6 bg-gradient-to-br from-white/8 via-white/5 to-white/8 backdrop-blur-xl rounded-2xl border border-white/15 overflow-hidden cursor-pointer transform-gpu"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} drop-shadow-lg`} />
                  </motion.div>
                  <div className="font-bold text-3xl bg-gradient-to-br from-base-content to-base-content/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-base-content/70 group-hover:text-base-content/90 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stunning Services Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, margin: "-20px" }}
              whileHover={{ 
                scale: 1.04, 
                y: -16,
                rotateX: 8,
                rotateZ: 2,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 12,
                  duration: 0.4
                }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`group relative h-[420px] p-8 rounded-3xl backdrop-blur-2xl border overflow-hidden cursor-pointer transform-gpu hover:${service.glowColor} ${service.borderGlow} transition-all duration-500`}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: hoveredCard === index ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.12)',
                boxShadow: hoveredCard === index 
                  ? `0 25px 60px rgba(0, 0, 0, 0.15), 0 0 40px ${service.glowColor?.replace('shadow-', '').replace('/25', '')}20, inset 0 1px 0 rgba(255, 255, 255, 0.3)` 
                  : '0 15px 35px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
              }}
            >
              {/* Enhanced dynamic background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-70 transition-all duration-700 ease-out`}></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-5 right-5 text-5xl opacity-12 group-hover:opacity-25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">{service.emoji}</div>
              
              {/* Enhanced rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                  delay: 0.4 + index * 0.06,
                  type: "spring",
                  stiffness: 250,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-xl rounded-full border border-yellow-400/30 shadow-lg"
              >
                <Star className="w-4 h-4 text-yellow-500 drop-shadow-sm" fill="currentColor" />
                <span className="text-sm font-bold text-yellow-600">{service.rating}%</span>
              </motion.div>
              
              <div className="relative h-full flex flex-col justify-between">
                {/* Enhanced service header */}
                <div className="space-y-5">
                  <motion.div
                    whileHover={{ 
                      scale: 1.12, 
                      rotate: 8,
                      transition: { type: "spring", stiffness: 400, damping: 12 }
                    }}
                    className="relative w-16 h-16 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-2xl flex items-center justify-center group-hover:from-primary/35 group-hover:to-secondary/35 transition-all duration-500 shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-400"></div>
                    <service.icon className={`w-8 h-8 text-primary ${service.hoverColor} transition-all duration-400 relative z-10 drop-shadow-lg`} />
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold text-base-content ${service.hoverColor} transition-colors duration-400 leading-tight`}>
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-base-content/70">
                      <span className="font-semibold px-3 py-1 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full">{service.projects}</span>
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse"></div>
                        {service.experience}
                      </span>
                    </div>
                  </div>

                  {/* Enhanced description */}
                  <p className="text-base text-base-content/80 group-hover:text-base-content/95 transition-colors duration-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced features grid */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2.5">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ 
                          delay: 0.5 + index * 0.06 + featureIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 4, rotate: 1 }}
                        className="flex items-center gap-2.5 p-3 bg-gradient-to-r from-white/8 to-white/4 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-400 hover:bg-gradient-to-r hover:from-white/12 hover:to-white/8"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0 shadow-sm"></div>
                        <span className="text-xs font-semibold text-base-content/80 group-hover:text-base-content transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced action button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.03, 
                      y: -2,
                      boxShadow: `0 10px 25px ${service.glowColor?.replace('shadow-', '').replace('/25', '')}30`,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveService(activeService === index ? null : index)}
                    className={`w-full py-3.5 px-6 bg-gradient-to-r from-primary/12 to-secondary/12 backdrop-blur-xl rounded-2xl border border-primary/20 font-bold text-primary group-hover:from-primary/20 group-hover:to-secondary/20 ${service.borderGlow} transition-all duration-500 flex items-center justify-center gap-3 shadow-lg`}
                  >
                    <span className="text-sm">Explore Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
                
                {/* Enhanced bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left shadow-lg"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="relative mt-32 p-16 bg-gradient-to-br from-primary/8 via-secondary/6 to-accent/8 backdrop-blur-2xl rounded-3xl border border-white/15 overflow-hidden"
          style={{
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/8 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-accent/8 to-primary/10 rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full border border-primary/25 backdrop-blur-xl"
              >
                <span className="text-2xl">✨</span>
                <span className="text-lg font-bold text-primary">Ready to Transform Your Ideas?</span>
                <span className="text-2xl">🚀</span>
              </motion.div>
              
              <h3 className="text-4xl lg:text-5xl font-bold gradient-text leading-tight">
                Let's Build Something Amazing Together
              </h3>
              
              <p className="text-xl text-base-content/85 max-w-3xl mx-auto leading-relaxed font-medium">
                Ready to turn your vision into reality? Let's collaborate on creating exceptional digital experiences 
                that drive results and exceed expectations. Your next breakthrough project starts with a conversation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-primary/30 transition-all duration-500 flex items-center gap-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 font-bold text-lg rounded-2xl hover:from-white/15 hover:to-white/10 transition-all duration-500 flex items-center gap-3"
              >
                <span>View Portfolio</span>
                <Star className="w-6 h-6" />
              </motion.button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2 text-sm text-base-content/70">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-base-content/70">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-base-content/70">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Money Back Guarantee</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
