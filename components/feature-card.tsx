"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accentColor: string
  index: number
}

export default function FeatureCard({ icon, title, description, accentColor, index }: FeatureCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + index * 0.05,
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      className="group flex flex-col p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 h-full"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      style={{
        borderColor: "transparent",
        borderLeftColor: accentColor,
        borderLeftWidth: "4px",
      }}
    >
      <div
        className="rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4"
        style={{ backgroundColor: accentColor + "20" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  )
}
