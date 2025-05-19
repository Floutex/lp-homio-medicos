"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CssGridBackground() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {/* Grid overlay that fades from outside to inside */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[-1] grid-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(19, 86, 201, 0.2) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgba(19, 86, 201, 0.2) 0.5px, transparent 0.5px)`,
          backgroundSize: "80px 80px", // Increased from 40px to 80px
          mask: "radial-gradient(circle at center, transparent 20%, black 70%)",
          WebkitMask: "radial-gradient(circle at center, transparent 20%, black 70%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle gradient overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[-2] grid-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "radial-gradient(70% 70% at 50% 50%, transparent 0%, rgba(19, 86, 201, 0.05) 100%)",
        }}
        aria-hidden="true"
      />
    </>
  )
}
