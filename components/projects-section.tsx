"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles, Zap, Layers, Code, Database, Rocket, Star, Award, TrendingUp } from "lucide-react"

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      category: "Full Stack",
    },
    {
      title: "SaaS Analytics Dashboard",
      description:
        "A comprehensive analytics platform for SaaS businesses with real-time data visualization, user behavior tracking, and automated reporting features.",
      image: "/analytics-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "AWS"],
      liveUrl: "https://example-analytics.com",
      githubUrl: "https://github.com/username/saas-analytics",
      category: "SaaS",
    },
    {
      title: "Social Media App",
      description:
        "A modern social media application with real-time messaging, content sharing, and advanced privacy controls built for mobile-first experience.",
      image: "/social-media-app-interface-mobile-design.jpg",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io", "Redux"],
      liveUrl: "https://example-social.com",
      githubUrl: "https://github.com/username/social-media-app",
      category: "Mobile",
    },
    {
      title: "AI-Powered Content Generator",
      description:
        "An intelligent content generation platform that uses machine learning to create high-quality blog posts, social media content, and marketing copy.",
      image: "/ai-content-generator.png",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example-ai-content.com",
      githubUrl: "https://github.com/username/ai-content-generator",
      category: "AI/ML",
    },
    {
      title: "Project Management Tool",
      description:
        "A collaborative project management platform with kanban boards, time tracking, team collaboration features, and detailed project analytics.",
      image: "/project-management-kanban-board-interface.jpg",
      technologies: ["Vue.js", "Express.js", "MySQL", "Socket.io", "Docker"],
      liveUrl: "https://example-pm-tool.com",
      githubUrl: "https://github.com/username/project-management-tool",
      category: "Productivity",
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section 
      id="projects" 
      className="relative py-32 min-h-screen overflow-hidden"
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
        {/* Floating Holographic Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating Tech Icons */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20 text-2xl"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -20, 20, -10],
              x: [null, 10, -10, 5],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {['⚡', '🚀', '💡', '🎯', '⚙️', '🌟', '💻', '🔧'][i % 8]}
          </motion.div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Spectacular Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Holographic Background Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Floating Icons Around Title */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { icon: Code, position: 'top-0 left-10', delay: 0 },
              { icon: Rocket, position: 'top-10 right-10', delay: 0.5 },
              { icon: Star, position: 'bottom-0 left-16', delay: 1 },
              { icon: Sparkles, position: 'bottom-10 right-12', delay: 1.5 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} p-4 glass-morphism rounded-2xl border border-primary/20`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: item.delay,
                  duration: 0.8,
                  type: "spring"
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay
                  }}
                >
                  <item.icon size={24} className="text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.h2 
            className="relative text-5xl md:text-7xl font-black mb-6 leading-none"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              Featured
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
              Projects
            </span>
          </motion.h2>
          
          {/* Animated Underline */}
          <motion.div
            className="relative h-2 mx-auto max-w-md overflow-hidden rounded-full mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl text-base-content/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A curated collection of innovative solutions showcasing cutting-edge technologies, 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              {" "}creative problem-solving
            </span>, and exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Clean Main Project Showcase */}
        <div className="max-w-7xl mx-auto">
          {/* Project Navigation Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center gap-2 p-2 glass-morphism rounded-2xl border border-white/20">
              {projects.map((project, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    index === activeProject
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'text-base-content/70 hover:text-base-content hover:bg-white/10'
                  }`}
                >
                  {project.title}
                  {index === activeProject && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Project Details */}
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Clean Project Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                    {projects[activeProject].category}
                  </span>
                  <span className="text-sm text-base-content/60">Featured Project</span>
                </div>

                <h3 className="text-4xl font-bold text-base-content leading-tight">
                  {projects[activeProject].title}
                </h3>

                <p className="text-lg text-base-content/80 leading-relaxed">
                  {projects[activeProject].description}
                </p>
              </div>

              {/* Clean Project Image */}
              <motion.div 
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/20">
                  <img
                    src={projects[activeProject].image || "/placeholder.svg"}
                    alt={projects[activeProject].title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Clean Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-base-content flex items-center gap-2">
                  <Layers size={20} className="text-primary" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-base-200 hover:bg-base-300 text-base-content rounded-full text-sm font-medium transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clean Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={projects[activeProject].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-focus text-white rounded-xl font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                  View Live
                </motion.a>

                <motion.a
                  href={projects[activeProject].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-base-300 hover:border-primary text-base-content hover:text-primary rounded-xl font-semibold transition-all duration-200"
                >
                  <Github size={18} />
                  View Code
                </motion.a>
              </div>
          </motion.div>

            {/* Right - Project Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Project Cards Stack */}
              <div className="relative h-[500px] perspective-1000">
                {projects.map((project, index) => {
                  const isActive = index === activeProject;
                  const offset = index - activeProject;
                  const isVisible = Math.abs(offset) <= 2;
                  
                  if (!isVisible) return null;
                  
                  return (
                    <motion.div
                      key={index}
                      animate={{
                        y: offset * 20,
                        x: offset * 30,
                        rotateY: offset * -15,
                        scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.1,
                        opacity: isActive ? 1 : 0.6 - Math.abs(offset) * 0.2,
                        zIndex: projects.length - Math.abs(offset),
                      }}
                      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setActiveProject(index)}
                    >
                      <div className={`h-full p-6 rounded-2xl border-2 transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 shadow-2xl' 
                          : 'bg-base-100 border-base-300 hover:border-primary/20'
                      }`}>
                        <div className="flex flex-col h-full">
                          <div className="text-center mb-6">
                            <div className="text-5xl mb-3">
                              {index === 0 ? '🛒' : index === 1 ? '📊' : index === 2 ? '📱' : index === 3 ? '🤖' : '📋'}
                            </div>
                            <h4 className={`text-xl font-bold mb-2 ${
                              isActive ? 'text-primary' : 'text-base-content'
                            }`}>
                              {project.title}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              isActive 
                                ? 'bg-primary/20 text-primary border border-primary/30' 
                                : 'bg-base-200 text-base-content'
                            }`}>
                              {project.category}
                            </span>
                          </div>
                          
                          {isActive && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex-1 flex flex-col justify-center text-center space-y-4"
                            >
                              <p className="text-sm text-base-content/70 leading-relaxed">
                                {project.description.slice(0, 120)}...
                              </p>
                              
                              <div className="flex flex-wrap gap-2 justify-center">
                                {project.technologies.slice(0, 3).map((tech) => (
                                  <span key={tech} className="px-2 py-1 bg-base-200 rounded text-xs">
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 3 && (
                                  <span className="px-2 py-1 bg-base-200 rounded text-xs">+{project.technologies.length - 3}</span>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Navigation Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevProject}
                  className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-full shadow-lg border border-base-300 transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextProject}
                  className="p-3 bg-base-100 hover:bg-primary hover:text-white rounded-full shadow-lg border border-base-300 transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          <div className="relative p-12 glass-morphism rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            {/* Background Effects */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-3xl font-black text-base-content mb-4">
                  Ready to Build Something 
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Amazing
                  </span>?
                </h3>
                <p className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate on your next innovative project. From concept to deployment, 
                  I'll help bring your vision to life with cutting-edge technology and creative solutions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 glass-morphism rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center gap-3">
                    <Rocket size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                    <span className="font-bold text-primary group-hover:text-white transition-colors duration-300">
                      Start Your Project
                    </span>
                  </div>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  />
                </motion.a>
                
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 glass-morphism rounded-xl border-2 border-white/30 hover:border-white/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Star size={20} className="text-base-content group-hover:text-accent transition-colors duration-300" />
                    <span className="font-bold text-base-content group-hover:text-accent transition-colors duration-300">
                      Get In Touch
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
