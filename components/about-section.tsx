"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Zap, Award, Users, Calendar, Star, Heart, Lightbulb, Target, Rocket } from "lucide-react"
import Image from "next/image"

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Crafting maintainable, scalable code with modern design patterns and best practices",
      color: "from-blue-500/20 to-cyan-500/20",
      hoverColor: "group-hover:text-blue-400",
      bgGradient: "from-blue-500/10 via-cyan-500/8 to-blue-600/10",
      emoji: "💻",
      stat: "98%",
      statLabel: "Code Quality"
    },
    {
      icon: Rocket,
      title: "Full Stack Mastery",
      description: "End-to-end development excellence from database design to user interface perfection",
      color: "from-green-500/20 to-emerald-500/20",
      hoverColor: "group-hover:text-green-400",
      bgGradient: "from-green-500/10 via-emerald-500/8 to-teal-500/10",
      emoji: "🚀",
      stat: "50+",
      statLabel: "Projects"
    },
    {
      icon: Globe,
      title: "Modern Innovation",
      description: "Leveraging cutting-edge technologies to build tomorrow's digital experiences today",
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "group-hover:text-purple-400",
      bgGradient: "from-purple-500/10 via-pink-500/8 to-rose-500/10",
      emoji: "⚡",
      stat: "15+",
      statLabel: "Technologies"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing every line of code for lightning-fast performance and exceptional user experiences",
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "group-hover:text-orange-400",
      bgGradient: "from-orange-500/10 via-red-500/8 to-pink-500/10",
      emoji: "✨",
      stat: "99.9%",
      statLabel: "Uptime"
    },
  ]

  const personalStats = [
    { icon: Calendar, value: "5+", label: "Years Experience", color: "text-primary", emoji: "🎯", gradient: "from-blue-500/10 to-cyan-500/10" },
    { icon: Award, value: "50+", label: "Projects Completed", color: "text-secondary", emoji: "🏆", gradient: "from-purple-500/10 to-pink-500/10" },
    { icon: Heart, value: "100%", label: "Client Satisfaction", color: "text-accent", emoji: "❤️", gradient: "from-red-500/10 to-rose-500/10" },
    { icon: Users, value: "25+", label: "Happy Clients", color: "text-green-500", emoji: "🎆", gradient: "from-green-500/10 to-emerald-500/10" }
  ]

  const skills = [
    { name: "React & Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-500" },
    { name: "Node.js & Python", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Database Design", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Cloud & DevOps", level: 80, color: "from-orange-500 to-red-500" },
    { name: "UI/UX Implementation", level: 92, color: "from-pink-500 to-rose-500" }
  ]

  const journey = [
    {
      year: "2019",
      title: "Started Journey",
      description: "Began learning web development",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      year: "2020",
      title: "First Projects",
      description: "Built first commercial applications",
      icon: Rocket,
      color: "text-blue-500"
    },
    {
      year: "2022",
      title: "Full Stack Focus",
      description: "Specialized in end-to-end development",
      icon: Target,
      color: "text-green-500"
    },
    {
      year: "2024",
      title: "Industry Expert",
      description: "Leading complex enterprise projects",
      icon: Star,
      color: "text-purple-500"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-base-200 via-base-100 to-base-200 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full backdrop-blur-sm border border-white/20">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-balance">
                Get to Know <span className="gradient-text">Me</span>
              </h2>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full max-w-xs"
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="space-y-20">
          {/* Personal Introduction and Stats */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Personal Introduction Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl backdrop-blur-xl overflow-hidden group"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-6 right-6 text-7xl opacity-8 group-hover:opacity-20 transition-opacity duration-500">🎯</div>
                
                <div className="relative space-y-8">
                  {/* Profile Image with Enhanced Effects */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotateY: 8, rotateX: 5 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl transform-gpu max-w-md mx-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-secondary/40 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 z-20"></div>
                    <Image
                      src="/images/developer-workspace.jpg"
                      alt="Developer workspace with modern setup"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute bottom-6 left-6 text-white z-30">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="backdrop-blur-xl bg-black/30 rounded-2xl p-4 border border-white/20"
                      >
                        <p className="font-bold text-lg flex items-center gap-3">
                          <span className="text-2xl">💡</span> My Creative Command Center
                        </p>
                        <p className="text-sm text-white/80 mt-1">Where ideas become reality</p>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Enhanced Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="space-y-5 text-base-content/90 leading-relaxed">
                      <p className="text-2xl font-semibold text-balance">
                        <span className="text-3xl mr-3">👋</span>
                        Hello! I'm a passionate Full Stack Developer with 5+ years of experience creating digital magic.
                      </p>
                      
                      <p className="text-lg text-pretty">
                        My journey in technology is fueled by an insatiable curiosity for solving complex challenges and 
                        building solutions that make a real difference. I believe great code isn't just functional—
                        it's elegant, maintainable, and tells a compelling story.
                      </p>
                      
                      <p className="text-lg text-pretty">
                        From crafting intuitive user interfaces with React and Next.js to architecting robust backend 
                        systems with Node.js and Python, I bridge the gap between beautiful design and powerful functionality. 
                        Every project is an opportunity to push boundaries and exceed expectations.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Skills Progress Bars */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-center mb-8">
                  <span className="gradient-text">Technical Expertise</span>
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-base-content group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-base-content/70">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-base-content/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Stats and Journey */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-1 gap-6">
                {personalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.6, 
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8, 
                      rotateY: 8,
                      transition: { type: "spring", stiffness: 400, damping: 12 }
                    }}
                    className="group relative p-6 rounded-2xl backdrop-blur-xl border border-white/20 overflow-hidden transform-gpu cursor-pointer"
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute -top-3 -right-3 text-5xl opacity-15 group-hover:opacity-30 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">{stat.emoji}</div>
                    
                    <div className="relative flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="p-3 bg-gradient-to-br from-white/15 to-white/5 rounded-xl backdrop-blur-sm"
                      >
                        <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                      </motion.div>
                      <div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-all duration-300`}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm font-medium text-base-content/80 group-hover:text-base-content transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.div>
                ))}
              </div>

              {/* Journey Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-center gradient-text mb-6">My Journey</h3>
                <div className="space-y-4">
                  {journey.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group relative p-4 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden"
                      style={{ background: 'rgba(255, 255, 255, 0.04)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          className="p-2 bg-gradient-to-br from-white/10 to-white/5 rounded-lg"
                        >
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-primary text-sm">{item.year}</span>
                            <span className="font-semibold text-base-content text-sm">{item.title}</span>
                          </div>
                          <p className="text-xs text-base-content/70 group-hover:text-base-content/90 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -12,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 overflow-hidden cursor-pointer transform-gpu"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">{highlight.emoji}</div>
                
                {/* Stat Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-xs font-bold text-primary">{highlight.stat}</span>
                  <span className="text-xs text-base-content/70 ml-1">{highlight.statLabel}</span>
                </div>
                
                <div className="relative space-y-4 pt-8">
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    className="w-14 h-14 bg-gradient-to-br from-primary/25 to-secondary/25 rounded-2xl flex items-center justify-center group-hover:from-primary/35 group-hover:to-secondary/35 transition-all duration-500 shadow-xl"
                  >
                    <highlight.icon className={`w-7 h-7 text-primary ${highlight.hoverColor} transition-colors duration-300`} />
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h3 className={`font-bold text-xl text-base-content ${highlight.hoverColor} transition-colors duration-300 leading-tight`}>
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-base-content/75 group-hover:text-base-content/90 transition-colors duration-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Technology Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-32 space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-white/20 backdrop-blur-sm"
            >
              <span className="text-2xl">🛠️</span>
              <h3 className="text-2xl lg:text-4xl font-bold gradient-text">Technology Expertise</h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting digital experiences with a carefully curated tech stack, 
              where each tool serves a purpose in creating exceptional solutions.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                image: "/images/web-development.jpg",
                alt: "Modern web development technologies",
                title: "Frontend Excellence",
                description: "React, Next.js, TypeScript",
                gradient: "from-blue-500/80 to-cyan-500/80",
                emoji: "🎨",
                tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
              },
              {
                image: "/images/full-stack-tech.jpg",
                alt: "Full stack development architecture",
                title: "Backend Mastery",
                description: "Node.js, Python, PostgreSQL",
                gradient: "from-purple-500/80 to-pink-500/80",
                emoji: "⚙️",
                tags: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group relative rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20 transform-gpu"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 right-4 text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                </div>
                
                <div className="relative p-8 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-2xl text-white group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {item.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.2 + tagIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white group-hover:bg-white/30 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/50 to-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
