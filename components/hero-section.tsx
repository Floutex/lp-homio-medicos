"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CssGridBackground from "@/components/css-grid-background"
import { useEffect, useState, useRef, memo } from "react"
import { motion } from "framer-motion"
import { scrollToElement } from "@/lib/scroll-utils"

// Memoize the component to prevent unnecessary re-renders
const HeroSection = memo(function HeroSection() {
  // Use ResizeObserver instead of window event for better performance
  const [viewportWidth, setViewportWidth] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const observerRef = useRef<ResizeObserver | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth)

    // Delay setting isLoaded to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Create ResizeObserver to track viewport changes
    observerRef.current = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        if (entries[0]) {
          setViewportWidth(window.innerWidth)
        }
      })
    })

    // Observe document body
    observerRef.current.observe(document.body)

    // Cleanup
    return () => {
      clearTimeout(timer)
      observerRef.current?.disconnect()
    }
  }, [])

  // Determine layout based on viewport width
  const isSmallScreen = viewportWidth < 640

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced from 0.2 for better performance
        delayChildren: 0.05, // Reduced from 0.1 for better performance
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Reduced from 0.6 for better performance
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.98 }, // Reduced scale change for better performance
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Reduced from 0.8 for better performance
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2, // Reduced from 0.4 for better performance
      },
    },
  }

  // Handle video load event
  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh]"
    >
      <CssGridBackground />
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Sistema Homio
          </motion.div>

          <motion.h1
            className="font-bold tracking-tighter mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-3xl"
            variants={itemVariants}
          >
            A maioria dos médicos confia que agenda cheia é sinal de que tudo está indo bem, até perceber o que poucos
            estão acompanhando.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl"
            variants={itemVariants}
          >
            Descubra o ponto decisivo que existe entre a primeira consulta e o retorno: um intervalo silencioso que está
            drenando os resultados de clínicas em todo o Brasil.
          </motion.p>

          <motion.div className="w-full max-w-3xl mx-auto mb-8 sm:mb-10 will-change-transform" variants={videoVariants}>
            <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl transition-all duration-500 hover:shadow-2xl transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50 z-10 pointer-events-none"></div>

              {/* Video placeholder while loading */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-muted/30 animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              )}

              <iframe
                className={`w-full h-full transition-opacity duration-300 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
                src="https://www.youtube.com/embed/B5Pql0TNBpA?rel=0&autoplay=1&mute=1"
                title="Sistema Homio | Demonstração"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={handleVideoLoad}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="will-change-transform">
            <Button
              className="group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              size={isSmallScreen ? "default" : "lg"}
              onClick={() => scrollToElement("agendar", 80)}
            >
              <span className={isSmallScreen ? "text-sm" : ""}>
                {isSmallScreen ? "Ver como funciona" : "Quero ver como o Sistema Homio funciona na prática"}
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default HeroSection
