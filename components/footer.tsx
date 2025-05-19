"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const currentYear = 2025
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  return (
    <footer className="border-t py-6 sm:py-8" ref={footerRef}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Homio. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
