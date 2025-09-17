"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "cupcake" ? "dark" : "cupcake")
  }

  if (!mounted) {
    return (
      <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
        <Sun size={20} className="w-5 h-5 text-base-content" />
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-base-200 text-base-content transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon size={20} className="w-5 h-5" />
      ) : (
        <Sun size={20} className="w-5 h-5" />
      )}
    </motion.button>
  )
}

export default ThemeToggle
