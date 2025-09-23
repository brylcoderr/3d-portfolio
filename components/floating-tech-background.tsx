"use client"

import React from "react"

// Lightweight CSS-only floating tech background for better performance
const FloatingTechBackground = () => {
  const techItems = [
    { name: "React", color: "#61DAFB", x: "10%", y: "20%", delay: "0s" },
    { name: "Next.js", color: "#000000", x: "80%", y: "15%", delay: "1s" },
    { name: "TypeScript", color: "#3178C6", x: "15%", y: "70%", delay: "2s" },
    { name: "Node.js", color: "#339933", x: "85%", y: "60%", delay: "3s" },
    { name: "Three.js", color: "#000000", x: "25%", y: "40%", delay: "4s" },
    { name: "Tailwind", color: "#06B6D4", x: "70%", y: "80%", delay: "5s" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
      <div className="absolute inset-0">
        {techItems.map((tech, index) => (
          <div
            key={tech.name}
            className="absolute flex flex-col items-center animate-pulse"
            style={{
              left: tech.x,
              top: tech.y,
              animationDelay: tech.delay,
              animationDuration: '4s'
            }}
          >
            {/* Tech icon circle */}
            <div 
              className="w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2"
              style={{ 
                borderColor: tech.color,
                backgroundColor: `${tech.color}20`
              }}
            >
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
            </div>
            {/* Tech name */}
            <span 
              className="text-xs font-medium opacity-60"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Additional floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FloatingTechBackground
