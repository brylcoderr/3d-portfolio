"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Show success message (you can implement toast notifications here)
    alert("Message sent successfully! I'll get back to you soon.")
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative inline-block mb-6"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              {"Let's"} <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Connect</span>
            </h2>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? {"Let's"} discuss your project and explore how we can work together to
            create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Modern Glass Morphism Form */}
            <div className="relative">
              {/* Background Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-30"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative glass-morphism-premium rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                    <p className="text-gray-400 text-sm">I'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full"></span>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-secondary/50 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-300 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Project inquiry, collaboration, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project, timeline, requirements, and what you'd like to achieve..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300 disabled:opacity-50"
                    style={{
                      background: isSubmitting 
                        ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' 
                        : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
                      boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    {/* Button Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      animate={{ x: isSubmitting ? 0 : [-300, 300] }}
                      transition={{ duration: 1.5, repeat: isSubmitting ? 0 : Infinity, repeatDelay: 2 }}
                    />
                    
                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Send size={18} />
                          </motion.div>
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-4 p-4 glass-morphism rounded-xl border border-white/20 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  />
                  
                  <div className="relative p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="relative">
                    <div className="font-semibold text-white group-hover:text-primary transition-colors duration-300">{info.label}</div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className="relative p-4 glass-morphism rounded-xl border border-white/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden"
                  aria-label={social.label}
                >
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Interactive Contact Visual */}
            <div className="relative">
              {/* Animated Glow Background */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-30"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative h-[420px] glass-morphism-premium rounded-3xl border border-white/20 overflow-hidden">
                {/* Advanced Background Pattern */}
                <div className="absolute inset-0">
                  {/* Floating Orbs */}
                  <motion.div
                    className="absolute top-12 left-12 w-16 h-16 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full blur-xl"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-32 right-16 w-12 h-12 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-full blur-lg"
                    animate={{
                      y: [0, 15, 0],
                      x: [0, -8, 0],
                      scale: [1, 0.8, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                  <motion.div
                    className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-2xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                  />
                  
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }} />
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  {/* Animated Icon */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
                    whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mb-8"
                  >
                    <motion.div 
                      className="relative w-28 h-28 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-2xl"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                      animate={{ 
                        boxShadow: [
                          '0 0 30px rgba(99, 102, 241, 0.5)',
                          '0 0 60px rgba(139, 92, 246, 0.8)',
                          '0 0 30px rgba(236, 72, 153, 0.5)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {/* Inner glow */}
                      <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Send className="w-12 h-12 text-white drop-shadow-lg" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Title & Description */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl font-bold text-white mb-4"
                  >
                    Ready to <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Collaborate?</span>
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg text-gray-300 mb-8 max-w-sm leading-relaxed"
                  >
                    I'm always excited to take on new challenges and collaborate on innovative projects.
                  </motion.p>
                  
                  {/* Enhanced Badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3"
                  >
                    {[
                      { label: '⚡ Quick Response', color: 'from-yellow-400 to-orange-500' },
                      { label: '🌟 Top Quality', color: 'from-green-400 to-blue-500' },
                      { label: '🚀 Fast Delivery', color: 'from-purple-400 to-pink-500' }
                    ].map((badge, index) => (
                      <motion.div
                        key={badge.label}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 bg-gradient-to-r ${badge.color} rounded-full text-white font-semibold text-sm shadow-lg`}
                      >
                        {badge.label}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Enhanced Value Proposition */}
            <div className="relative">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-3xl blur opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <div className="relative glass-morphism-dark rounded-3xl p-8 border border-white/20">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold text-center text-white mb-6"
                >
                  Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me?</span>
                </motion.h3>

                <div className="space-y-4 mb-6">
                  {[
                    { icon: '🚀', text: '5+ years of proven full-stack development experience' },
                    { icon: '💡', text: 'Expertise in translating business goals into technical solutions' },
                    { icon: '⚡', text: 'Commitment to clean, maintainable, and scalable code' },
                    { icon: '🤝', text: 'Excellent communication and project management skills' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                    >
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Service Categories */}
                <div className="space-y-4">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-center font-semibold"
                  >
                    {"Let's"} collaborate on your next:
                  </motion.p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Custom Web Apps", "SaaS Platforms", "E-Commerce Solutions", "Full-Stack Applications"].map((item, index) => (
                      <motion.span 
                        key={item}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white text-sm font-medium hover:border-primary/40 transition-all duration-300"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8"
        >
          {/* Subtle Divider */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
          
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ color: '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            © 2024 Full Stack Developer Portfolio • Built with ❤️ using Next.js, Framer Motion & Three.js
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
